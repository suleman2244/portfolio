import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ParametricMeshBackground from "@/components/ParametricMeshBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sulaman Khan | Senior Software Engineer",
  description: "6+ years building enterprise fintech & healthcare apps for 50M+ users. React, React Native & AI specialist. Currently in Germany, available for full-time roles.",
  keywords: ["Senior Software Engineer", "React Developer", "React Native", "Frontend Developer", "Full Stack Developer", "AI Engineer", "Germany", "FinTech", "Healthcare Tech", "JazzCash", "Allied Bank"],
  authors: [{ name: "Sulaman Khan" }],
  creator: "Sulaman Khan",
  publisher: "Sulaman Khan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sulamankhan.com',
    title: 'Sulaman Khan | Senior Software Engineer',
    description: '6+ years building enterprise fintech & healthcare apps for 50M+ users. React, React Native & AI specialist.',
    siteName: 'Sulaman Khan Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sulaman Khan - Senior Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sulaman Khan | Senior Software Engineer',
    description: '6+ years building enterprise fintech & healthcare apps for 50M+ users. React, React Native & AI specialist.',
    images: ['/og-image.png'],
    creator: '@sulamankhan',
  },
  icons: {
    icon: "/images/mo-logo.png",
    shortcut: "/images/mo-logo.png",
    apple: "/images/mo-logo.png",
  },
  manifest: '/manifest.json',
};

import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics - Placeholder ID G-XXXXXXXXXX */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        <ThemeProvider>
          <ParametricMeshBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
