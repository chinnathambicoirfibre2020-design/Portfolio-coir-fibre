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
      {/* Top Notification Bar */}
      <div className="bg-[#190C07] text-[#EADBC8] text-xs py-2 px-4 border-b border-[#3D2318]/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 font-semibold text-[#DF9B52]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DF9B52]" /> Direct Kanyakumari Manufacturer
            </span>
            <span className="hidden md:inline text-neutral-500">•</span>
            <span className="hidden md:inline text-neutral-300">
              35+ Years Coir Field Experience • Est. 6 Years Ago
            </span>
          </div>
          <div className="flex items-center gap-4 text-neutral-300">
            <span className="hidden sm:inline">52kg - 56kg Manual Gunny Bales</span>
            <a
              href="tel:+919994348574"
              className="font-bold text-[#DF9B52] hover:underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3" /> +91 99943 48574
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#FAF4EB]/95 backdrop-blur-md border-b border-[#E2D3C4] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
            <div className="relative w-13 h-13 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shadow-md border-2 border-[#E2D3C4] bg-white flex-shrink-0 transition-transform group-hover:scale-105 group-hover:border-[#C58940]">
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

          {/* Desktop Navigation Links (Clean Single Words) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-[#2C1810] text-[#FFFDF9] shadow-sm'
                      : 'text-[#5C4638] hover:text-[#1F110B] hover:bg-[#EFE4D8]'
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
              href="tel:+919994348574"
              className="flex items-center gap-2 text-xs font-bold text-[#2C1810] bg-white border border-[#E2D3C4] px-4 py-2.5 rounded-full hover:bg-[#EFE4D8] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C58940]" />
              <span>Call Factory</span>
            </a>
            <Link
              href="/contact"
              className="btn-pill-caramel text-xs py-2.5 px-5 cursor-pointer shadow-md"
            >
              <span>Get Quote</span>
              <span className="arrow-disc">→</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2.5 rounded-xl bg-white border border-[#E2D3C4] text-[#1F110B] hover:bg-[#EFE4D8]"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#FAF4EB] border-b border-[#E2D3C4] px-4 pt-2 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5 mb-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-bold transition-all ${
                      isActive
                        ? 'bg-[#2C1810] text-[#FFFDF9]'
                        : 'text-[#3D2318] hover:bg-[#EFE4D8]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-[#E2D3C4]">
              <a
                href="tel:+919994348574"
                className="flex items-center justify-center gap-2 text-sm font-bold text-[#1F110B] bg-white border border-[#E2D3C4] py-3 rounded-full"
              >
                <Phone className="w-4 h-4 text-[#C58940]" />
                <span>Call +91 99943 48574</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-pill-caramel w-full justify-center text-sm py-3"
              >
                <span>Request Wholesale Price</span>
                <span className="arrow-disc">→</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
