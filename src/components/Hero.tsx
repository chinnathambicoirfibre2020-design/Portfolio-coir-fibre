'use client';

import React from 'react';
import Link from 'next/link';
import { useLightbox } from '@/context/LightboxContext';
import { Shield, Sparkles, Zap, Truck, ZoomIn } from 'lucide-react';

export default function Hero() {
  const { openLightbox } = useLightbox();

  return (
    <section className="relative overflow-hidden bg-[#2C1810] text-[#FAF4EB] py-16 lg:py-24 border-b border-[#4A2D20]">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C58940]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#DF9B52]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#C58940]/20 border border-[#C58940] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#DF9B52] shadow-sm">
              <Sparkles className="w-4 h-4 text-[#DF9B52]" />
              <span>35+ Years Coir Industry Experience • Direct Factory</span>
            </div>

            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black font-serif text-[#FFFDF9] tracking-tight leading-[1.1]">
              Natural Black Coir Fibre from Kanyakumari
            </h1>

            <p className="text-base sm:text-lg text-[#EADBC8] leading-relaxed max-w-2xl font-sans">
              We manufacture pure dyed black coconut bristle fibre in Kanyakumari, Tamil Nadu. Thoroughly cleaned, combed straight, and cut to standard 8" to 12" length for making brooms, brushes, and industrial sweepers. Direct factory rates and fast truck delivery to any city across India.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/products" className="btn-pill-light">
                <span>View Products</span>
                <span className="arrow-disc">→</span>
              </Link>
              <Link href="/contact" className="btn-pill-caramel">
                <span>Get Wholesale Price</span>
                <span className="arrow-disc">→</span>
              </Link>
            </div>

            {/* Hero Trust Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs font-semibold text-[#E2D3C4]">
                <span className="text-[#DF9B52]">⭐</span>
                <span>35+ Yrs Mastery</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs font-semibold text-[#E2D3C4]">
                <span className="text-[#34D399]">🌿</span>
                <span>Pure Coastal Fibre</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs font-semibold text-[#E2D3C4]">
                <Zap className="w-3.5 h-3.5 text-[#DF9B52]" />
                <span>15-Min Reply</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs font-semibold text-[#E2D3C4]">
                <Truck className="w-3.5 h-3.5 text-[#DF9B52]" />
                <span>Pan-India Trucks</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={() =>
                openLightbox(
                  '/assets/images/hero-section.jpg',
                  'CCF Finished Dyed Black Bristle Coir Hanks with Blue Strapping'
                )
              }
              className="group relative cursor-pointer overflow-hidden rounded-3xl border-2 border-[#C58940]/40 bg-[#1F110B] p-2 shadow-2xl transition-all duration-300 hover:border-[#DF9B52] hover:shadow-[0_20px_50px_rgba(197,137,64,0.3)] animate-float"
            >
              <div className="relative aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-2xl bg-neutral-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/hero-section.jpg"
                  alt="CCF Factory finished black dyed coir bristle hanks strapped with blue bands"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Badge Overlay */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/75 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md border border-white/20 transition-transform group-hover:scale-105">
                  <ZoomIn className="w-3.5 h-3.5 text-[#DF9B52]" />
                  <span>CCF Factory Stock • Zoom</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
