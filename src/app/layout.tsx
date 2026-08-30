import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "REAL.CO | Hair Studio & Mini Cafe Batu",
  description: "Hair Studio & Mini Cafe di Batu. Ruang yang nyaman untuk bersantai, menikmati kopi, dan jadi versi terbaik dirimu. Booking haircut atau nikmati racikan kopi kami.",
  keywords: ["REAL.CO", "REAL.CO Batu", "hair studio Batu", "barbershop Batu", "coffee Batu", "haircut Batu"],
  openGraph: {
    title: "REAL.CO | Hair Studio & Mini Cafe Batu",
    description: "Where Style Meets Comfort. Hair Studio & Mini Cafe di Batu.",
    url: "https://realco.id",
    siteName: "REAL.CO",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth overflow-x-hidden">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans bg-cream text-forest-dark antialiased selection:bg-gold selection:text-white overflow-x-hidden`}>
        <SplashScreen />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
