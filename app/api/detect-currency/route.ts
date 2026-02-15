import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Prefer CDN-provided country headers when available (more reliable than IP lookup).
    const countryHeader =
      request.headers.get('x-vercel-ip-country') ||
      request.headers.get('cf-ipcountry') ||
      request.headers.get('x-country-code');

    if (countryHeader) {
      const currency = countryHeader.toUpperCase() === 'IN' ? 'inr' : 'usd';
      return NextResponse.json({ currency, countryCode: countryHeader });
    }

    // Fall back to IP-based lookup when country headers are missing.
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ipFromForwarded = forwardedFor ? forwardedFor.split(',')[0]?.trim() : null;
    const ip = ipFromForwarded || request.headers.get('x-real-ip') || '';

    // Use ipapi.co for geolocation (free, no key required)
    const geoUrl = ip ? `https://ipapi.co/${ip}/json/` : 'https://ipapi.co/json/';
    const geoResponse = await fetch(geoUrl);
    
    if (!geoResponse.ok) {
      return NextResponse.json({ currency: 'usd' }, { status: 200 });
    }

    const geoData = await geoResponse.json();
    const countryCode = geoData.country_code;

    // Return INR for India, USD for everyone else
    const currency = countryCode === 'IN' ? 'inr' : 'usd';

    return NextResponse.json({ 
      currency,
      countryCode,
    });
  } catch (error) {
    console.error('Geolocation error:', error);
    // Default to USD on error
    return NextResponse.json({ currency: 'usd' }, { status: 200 });
  }
}
