import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const override = searchParams.get('currency');
    const debug = searchParams.get('debug') === '1';
    if (override === 'inr' || override === 'usd') {
      return NextResponse.json(
        {
          currency: override,
          countryCode: 'override',
          ...(debug ? { debug: { source: 'override' } } : {}),
        },
        { headers: { 'Cache-Control': 'no-store, max-age=0' } }
      );
    }

    const envDefault = process.env.DEFAULT_CURRENCY;
    if (envDefault === 'inr' || envDefault === 'usd') {
      return NextResponse.json(
        {
          currency: envDefault,
          countryCode: 'env',
          ...(debug ? { debug: { source: 'env' } } : {}),
        },
        { headers: { 'Cache-Control': 'no-store, max-age=0' } }
      );
    }

    // Prefer CDN-provided country headers when available (more reliable than IP lookup).
    const countryHeader =
      request.headers.get('x-vercel-ip-country') ||
      request.headers.get('cf-ipcountry') ||
      request.headers.get('x-country-code');

    if (countryHeader) {
      const currency = countryHeader.toUpperCase() === 'IN' ? 'inr' : 'usd';
      return NextResponse.json(
        {
          currency,
          countryCode: countryHeader,
          ...(debug ? { debug: { source: 'header' } } : {}),
        },
        { headers: { 'Cache-Control': 'no-store, max-age=0' } }
      );
    }

    // Fall back to IP-based lookup when country headers are missing.
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ipFromForwarded = forwardedFor ? forwardedFor.split(',')[0]?.trim() : null;
    const ip = ipFromForwarded || request.headers.get('x-real-ip') || '';
    const encodedIp = ip ? encodeURIComponent(ip) : '';

    // Use ipapi.co for geolocation (free, no key required)
    const geoUrl = encodedIp ? `https://ipapi.co/${encodedIp}/json/` : 'https://ipapi.co/json/';
    const geoResponse = await fetch(geoUrl);

    if (geoResponse.ok) {
      const geoData = await geoResponse.json();
      const countryCode = geoData.country_code;
      const currency = countryCode === 'IN' ? 'inr' : 'usd';

      return NextResponse.json(
        {
          currency,
          countryCode,
          ...(debug ? { debug: { source: 'ipapi', ip, countryCode } } : {}),
        },
        { headers: { 'Cache-Control': 'no-store, max-age=0' } }
      );
    }

    // Fall back to ipwho.is if ipapi is blocked or rate-limited.
    const fallbackUrl = encodedIp ? `https://ipwho.is/${encodedIp}` : 'https://ipwho.is/';
    const fallbackResponse = await fetch(fallbackUrl);

    if (!fallbackResponse.ok) {
      return NextResponse.json(
        {
          currency: 'usd',
          ...(debug ? { debug: { source: 'fallback_error', ip } } : {}),
        },
        { status: 200, headers: { 'Cache-Control': 'no-store, max-age=0' } }
      );
    }

    const fallbackData = await fallbackResponse.json();
    const fallbackCountry = fallbackData.country_code;
    const fallbackCurrency = fallbackCountry === 'IN' ? 'inr' : 'usd';

    return NextResponse.json(
      {
        currency: fallbackCurrency,
        countryCode: fallbackCountry,
        ...(debug ? { debug: { source: 'ipwho', ip, countryCode: fallbackCountry } } : {}),
      },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  } catch (error) {
    console.error('Geolocation error:', error);
    // Default to USD on error
    return NextResponse.json(
      { currency: 'usd', ...(new URL(request.url).searchParams.get('debug') === '1'
          ? { debug: { source: 'catch' } }
          : {}) },
      { status: 200, headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  }
}
