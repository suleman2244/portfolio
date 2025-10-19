import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Osama CAD Portfolio",
  description: "MO Portfolio is the personal portfolio of Muhammad Osama — a skilled Mechanical Engineer and Designer specializing in CAD modeling, rendering, and product visualization. This portfolio showcases a diverse range of engineering design projects, technical documentation, and creative visual work using tools like SolidWorks, AutoCAD, and Creo Parametric. With a passion for precision and innovation, Muhammad Osama blends engineering expertise with design aesthetics to create high-quality mechanical components, architectural layouts, and industrial 3D concepts. The website is developed using Next.js and React, ensuring a modern, responsive, and performance-optimized experience across all devices. Visitors can explore projects, download the resume or presentation, and get in touch for professional collaborations or design inquiries.",
  icons: {
    icon: "/images/mo-logo.png", // ✅ your logo
    shortcut: "/images/mo-logo.png",
    apple: "/images/mo-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
