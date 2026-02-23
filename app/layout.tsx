import React, { Suspense } from 'react'
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Analytics from "./components/Analytics";
import Script from 'next/script'
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://meegan-media.com"),
  title: {
    default: "Meegan Media - Global Digital Marketing Agency",
    template: "%s | Meegan Media - Global Digital Marketing Agency",
  },
  description:
    "Expert digital marketing services in Dehradun, Uttarakhand. SEO, social media, content marketing, and brand strategy to grow your business online.",
  keywords: [
    "digital marketing dehradun",
    "seo services dehradun",
    "social media marketing uttrakhand",
    "digital marketing uttrakhand",
    "kamal bhatt digital marketing",
    "content marketing dehradun",
    "brand strategy dehradun",
    "online marketing consultant",
  ],
  authors: [{ name: "Kamal Bhatt" }],
  creator: "Kamal Bhatt",
  publisher: "Kamal Bhatt",
  
  // Open Graph (for social media sharing)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://meegan-media.com",
    siteName: "Meegan Media - Global Digital Marketing Agency",
    title: "Meegan Media - Global Digital Marketing Agency",
    description:
      "Expert digital marketing services in Dehradun, Uttarakhand. SEO, social media, content marketing, and brand strategy to grow your business online.",
    images: [
      {
        url: "https://meegan-media.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Meegan Media - Global Digital Marketing Agency",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Meegan Media - Global Digital Marketing Agency",
    description:
      "Expert digital marketing services in Dehradun, Uttarakhand. SEO, social media, content marketing, and brand strategy.",
    images: ["https://meegan-media.com/twitter-image.jpg"],
  },
  
  // Additional SEO settings
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Icons
  icons: {
    icon: "/images/Fabicon.PNG",
  },
};

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="google-site-verification" content="4AVLFRjOl_GwqUWELsUq9wkgynfMUhrQa1lpapUR3ko" />
        {process.env.NODE_ENV === 'production' && GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50`}
      >
        {/* Main content wrapper */}
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="grow">
            {children}
          </main>
          <Footer />
          {process.env.NODE_ENV === 'production' && (
            <Suspense fallback={null}>
              <Analytics />
            </Suspense>
          )}
        </div>
      </body>
    </html>
  );
}
