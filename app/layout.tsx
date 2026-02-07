import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://kamalbhatt.com"),
  title: {
    default: "Kamal Bhatt - Digital Marketing Services in Dehradun",
    template: "%s | Kamal Bhatt - Digital Marketing Dehradun",
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
    url: "https://kamalbhatt.com",
    siteName: "Kamal Bhatt Digital Marketing",
    title: "Kamal Bhatt - Digital Marketing Services in Dehradun",
    description:
      "Expert digital marketing services in Dehradun, Uttarakhand. SEO, social media, content marketing, and brand strategy to grow your business online.",
    images: [
      {
        url: "https://kamalbhatt.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kamal Bhatt - Digital Marketing Dehradun",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Kamal Bhatt - Digital Marketing Services in Dehradun",
    description:
      "Expert digital marketing services in Dehradun, Uttarakhand. SEO, social media, content marketing, and brand strategy.",
    images: ["https://kamalbhatt.com/twitter-image.jpg"],
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
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50`}
      >
        {/* Main content wrapper */}
        <div className="min-h-screen flex flex-col">
          {/* Navigation and header would go here */}
          <main className="flex-grow">
            {children}
          </main>
          {/* Footer would go here */}
        </div>
      </body>
    </html>
  );
}
