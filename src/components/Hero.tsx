'use client';

import React from 'react';
import Link from 'next/link';
import { useLightbox } from '@/context/LightboxContext';
import { Sparkles, Zap, Truck, ZoomIn, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const { openLightbox } = useLightbox();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF4EB] via-[#F5EBE1] to-[#EFE4D8] text-[#22130C] py-16 lg:py-24 border-b border-[#E2D3C4]">
      {/* Soft warm radial ambient glows */}
      <div className="absolute top-0 right-1/4 w-[32rem] h-[32rem] bg-[#C58940]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#DF9B52]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#C58940]/15 border border-[#C58940]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#A36A28] shadow-sm">
              <Sparkles className="w-4 h-4 text-[#A36A28]" />
              <span>35+ Years Coir Industry Experience • Direct Factory</span>
            </div>

            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black font-serif text-[#1F110B] tracking-tight leading-[1.15]">
              Natural Black Coir Fibre from <span className="text-[#A36A28]">Kanyakumari</span>
            </h1>

            <p className="text-base sm:text-lg text-[#5C4638] leading-relaxed max-w-2xl font-sans">
              We manufacture pure dyed black coconut bristle fibre in Kanyakumari, Tamil Nadu. Thoroughly cleaned, combed straight, and cut to standard 8&quot; to 12&quot; (200 - 300 mm) length for making brooms, brushes, and industrial sweepers. Direct factory rates and fast truck delivery to any city across India.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/products" className="btn-pill-dark">
                <span>View Products</span>
                <span className="arrow-disc">→</span>
              </Link>
              <Link href="/contact" className="btn-pill-caramel">
                <span>Get Wholesale Price</span>
                <span className="arrow-disc">→</span>
              </Link>
            </div>

            {/* Hero Trust Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="flex items-center gap-2 bg-[#FFFDF9] border border-[#E2D3C4] rounded-xl px-3 py-2 text-xs font-bold text-[#1F110B] shadow-sm hover:border-[#C58940] transition-colors">
                <span className="text-[#A36A28]">⭐</span>
                <span>35+ Yrs Mastery</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FFFDF9] border border-[#E2D3C4] rounded-xl px-3 py-2 text-xs font-bold text-[#1F110B] shadow-sm hover:border-[#C58940] transition-colors">
                <span className="text-[#10B981]">🌿</span>
                <span>Pure Coastal Fibre</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FFFDF9] border border-[#E2D3C4] rounded-xl px-3 py-2 text-xs font-bold text-[#1F110B] shadow-sm hover:border-[#C58940] transition-colors">
                <Zap className="w-3.5 h-3.5 text-[#A36A28]" />
                <span>15-Min Reply</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FFFDF9] border border-[#E2D3C4] rounded-xl px-3 py-2 text-xs font-bold text-[#1F110B] shadow-sm hover:border-[#C58940] transition-colors">
                <Truck className="w-3.5 h-3.5 text-[#A36A28]" />
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
              className="group relative cursor-pointer overflow-hidden rounded-3xl border-2 border-[#E2D3C4] bg-[#FFFDF9] p-2 shadow-xl transition-all duration-300 hover:border-[#C58940] hover:shadow-[0_20px_50px_rgba(197,137,64,0.25)] animate-float"
            >
              <div className="relative aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-2xl bg-neutral-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/hero-section.jpg"
                  alt="CCF Factory finished black dyed coir bristle hanks strapped with blue bands"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Badge Overlay */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-[#1F110B]/85 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md border border-white/20 transition-transform group-hover:scale-105">
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
