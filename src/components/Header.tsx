"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "BERANDA", href: "/" },
    { name: "STYLIST", href: "/#hair-studio" },
    { name: "MENU", href: "/#kafe" },
    { name: "GALERI", href: "/#ruang-kami" },

    { name: "LOKASI", href: "/#visit" },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-forest-dark border-b border-white/5" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* KIRI: Logo */}
        <Link href="/" className="flex items-center gap-3 w-[200px]">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-cream/50 flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="REAL.CO Logo"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-[0.2em] text-cream leading-none">
              REAL.CO
            </span>
          </div>
        </Link>

        {/* TENGAH: Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-medium tracking-[0.2em] text-cream/80 hover:text-cream transition-colors uppercase relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* KANAN: BOOK NOW */}
        <div className="hidden lg:flex justify-end w-[200px]">
          <Link
            href="/booking"
            className="text-[10px] font-bold tracking-[0.2em] text-cream border-b border-gold hover:text-gold transition-colors uppercase pb-1"
          >
            RESERVASI SEKARANG
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="lg:hidden p-2 text-cream"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full h-screen bg-forest-dark flex flex-col items-center pt-16 space-y-10 z-40">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-serif font-medium tracking-[0.2em] text-cream/80 hover:text-gold transition-colors uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/booking"
            className="text-[11px] font-bold tracking-[0.2em] text-forest-dark bg-gold px-8 py-4 mt-8 uppercase"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            BOOKING SEKARANG
          </Link>
        </div>
      )}
    </header>
  );
}
