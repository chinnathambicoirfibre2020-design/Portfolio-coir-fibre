'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Clean, single-word navigation labels
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Process', href: '/process' },
    { name: 'Specifications', href: '/specifications' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Notification Bar (Frosted Dark Glass) */}
      <div className="bg-[#190C07]/92 backdrop-blur-md text-[#EADBC8] text-xs py-1.5 px-4 border-b border-[#3D2318]/50 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 font-semibold text-[#DF9B52]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DF9B52]" /> Direct Kanyakumari Manufacturer &amp; Exporter
            </span>
            <span className="hidden md:inline text-neutral-500">•</span>
            <span className="hidden md:inline text-neutral-300">
              35+ Years Coir Field Experience • Est. 6 Years Ago
            </span>
          </div>
          <div className="flex items-center gap-4 text-neutral-300">
            <span className="hidden sm:inline">52kg - 56kg Manual Gunny Bales</span>
            <a
              href="tel:+919487371259"
              className="font-bold text-[#DF9B52] hover:underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3" /> +91 94873 71259
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Header */}
      <header className="sticky top-0 z-40 bg-[#FAF4EB]/70 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_8px_32px_rgba(34,19,12,0.06)] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Glass Logo Badge */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-2xl overflow-hidden shadow-lg border-2 border-white/80 bg-white/90 backdrop-blur-md flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:border-[#C58940] group-hover:shadow-[0_8px_20px_rgba(197,137,64,0.25)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/CCF.jpg"
                alt="Chinnathambi Coir Fibre Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="block font-black text-xl sm:text-2xl tracking-tight text-[#1F110B] leading-none font-serif">
                CHINNATHAMBI
              </span>
              <span className="block text-[0.7rem] sm:text-[0.76rem] font-extrabold text-[#A36A28] tracking-wider uppercase mt-1">
                COIR FIBRE • 35+ YRS EXP
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Glass Pills) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1.5 rounded-full bg-white/40 border border-white/60 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_4px_16px_rgba(34,19,12,0.04)]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#2C1810] text-[#FFFDF9] shadow-md shadow-[#2C1810]/20'
                      : 'text-[#5C4638] hover:text-[#1F110B] hover:bg-white/80 hover:shadow-sm'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919487371259"
              className="flex items-center gap-2 text-xs font-bold text-[#2C1810] bg-white/75 backdrop-blur-md border border-white/90 px-4 py-2.5 rounded-full hover:bg-white shadow-[0_2px_8px_rgba(34,19,12,0.05)] hover:shadow-md transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#C58940]" />
              <span>Call Factory</span>
            </a>
            <Link
              href="/#enquiry"
              className="btn-pill-caramel text-xs py-2.5 px-5 cursor-pointer shadow-md shadow-[#C58940]/25"
            >
              <span>Book Now</span>
              <span className="arrow-disc">→</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 text-[#1F110B] hover:bg-white shadow-sm transition-all"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu (Glass Overlay) */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#FAF4EB]/90 backdrop-blur-2xl border-b border-white/60 px-4 pt-3 pb-6 shadow-[0_20px_40px_rgba(34,19,12,0.12)] animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5 mb-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-2xl text-base font-bold transition-all ${
                      isActive
                        ? 'bg-[#2C1810] text-[#FFFDF9] shadow-md'
                        : 'text-[#3D2318] hover:bg-white/70'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-2 pt-3 border-t border-white/60">
              <a
                href="tel:+919487371259"
                className="flex items-center justify-center gap-2 text-sm font-bold text-[#1F110B] bg-white/85 backdrop-blur-md border border-white/90 py-3 rounded-full shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#C58940]" />
                <span>Call +91 94873 71259</span>
              </a>
              <Link
                href="/#enquiry"
                onClick={() => setMobileOpen(false)}
                className="btn-pill-caramel w-full justify-center text-sm py-3"
              >
                <span>Book Now / Get Quote</span>
                <span className="arrow-disc">→</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
