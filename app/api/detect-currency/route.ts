import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const override = searchParams.get('currency');
    if (override === 'inr' || override === 'usd') {
      return NextResponse.json(
        { currency: override, countryCode: 'override' },
        { headers: { 'Cache-Control': 'no-store, max-age=0' } }
      );
    }

    const envDefault = process.env.DEFAULT_CURRENCY;
    if (envDefault === 'inr' || envDefault === 'usd') {
      return NextResponse.json(
        { currency: envDefault, countryCode: 'env' },
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
        { currency, countryCode: countryHeader },
        { headers: { 'Cache-Control': 'no-store, max-age=0' } }
      );
    }

    // Fall back to IP-based lookup when country headers are missing.
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ipFromForwarded = forwardedFor ? forwardedFor.split(',')[0]?.trim() : null;
    const ip = ipFromForwarded || request.headers.get('x-real-ip') || '';

    // Use ipapi.co for geolocation (free, no key required)
    const geoUrl = ip ? `https://ipapi.co/${ip}/json/` : 'https://ipapi.co/json/';
    const geoResponse = await fetch(geoUrl);
    
    if (!geoResponse.ok) {
      return NextResponse.json(
        { currency: 'usd' },
        { status: 200, headers: { 'Cache-Control': 'no-store, max-age=0' } }
      );
    }

    const geoData = await geoResponse.json();
    const countryCode = geoData.country_code;

    // Return INR for India, USD for everyone else
    const currency = countryCode === 'IN' ? 'inr' : 'usd';

    return NextResponse.json(
      { currency, countryCode },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  } catch (error) {
    console.error('Geolocation error:', error);
    // Default to USD on error
    return NextResponse.json(
      { currency: 'usd' },
      { status: 200, headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  }
}
