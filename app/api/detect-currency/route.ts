import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get client IP from headers
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Use ipapi.co for geolocation (free, no key required)
    const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`);
    
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
