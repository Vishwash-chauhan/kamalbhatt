/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable static imports for images
    loader: 'default',
    // Cache optimized images for 365 days
    minimumCacheTTL: 31536000,
  },

  // SEO and performance headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
      // Cache static assets
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache public images
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          },
        ],
      },
    ];
  },

  // SEO-friendly rewrites
  async rewrites() {
    return {
      beforeFiles: [
        // Add rewrites here if needed
      ],
    };
  },

  // Redirects for SEO (e.g., old URLs)
  async redirects() {
    return [
      // Add redirects here if needed
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true, // 301 redirect for SEO
      // },
    ];
  },

  // Disable x-powered-by header for security
  poweredByHeader: false,

  // Enable production source maps for better error tracking
  productionBrowserSourceMaps: false,

  // Optimize font loading
  optimizeFonts: true,

  // Enable SWC minification (faster than Terser)
  swcMinify: true,

  // Compress responses
  compress: true,

  // React strict mode for development
  reactStrictMode: true,

  // Experimental features for better performance
  experimental: {
    // Enable next/future imports
    esmExternals: true,
  },
};

export default nextConfig;
