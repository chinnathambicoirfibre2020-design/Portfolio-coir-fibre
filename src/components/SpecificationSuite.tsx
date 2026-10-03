'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Printer, Phone, Check } from 'lucide-react';

export default function SpecificationSuite() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <section id="blueprint" className="py-20 bg-[#140A06] text-[#F5EBE1] border-b border-[#3D2318] relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(197,137,64,0.15),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#C58940]/20 border border-[#C58940] px-4 py-1.5 rounded-full text-xs font-bold text-[#DF9B52] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Technical Specification &amp; Quality Parameters</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-[#FFFDF9] tracking-tight">
            Engineered Quality. Verified Standard.
          </h2>
          <p className="text-base text-[#D6C7BA] mt-3 leading-relaxed">
            Certified physical tolerances, combing density, and standard commercial cut lengths verified under 35+ years of field mastery.
          </p>
        </div>

        {/* The Specification Document Card */}
        <div className="bg-gradient-to-br from-[#1E100A] to-[#120905] border-2 border-[#C58940]/35 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_28px_70px_rgba(0,0,0,0.65)] backdrop-blur-md">
          
          {/* Document Meta Header Strip */}
          <div className="bg-gradient-to-r from-[#C58940]/15 to-[#23120C]/80 border border-[#C58940]/30 rounded-2xl p-5 mb-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#C8B8AB]">
              <span className="text-[#DF9B52] font-bold uppercase tracking-wider text-[11px]">
                Spec Sheet:
              </span>
              <span className="bg-[#C58940]/25 text-[#FFD49C] border border-[#C58940]/40 px-2.5 py-0.5 rounded-md font-bold text-xs tracking-wider">
                KKM-BBF-2026
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#C8B8AB]">
              <span className="text-[#DF9B52] font-bold uppercase tracking-wider text-[11px]">
                Product:
              </span>
              <strong className="text-[#FFFDF9]">Dyed Black Coconut Bristle Fibre</strong>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#C8B8AB]">
              <span className="text-[#DF9B52] font-bold uppercase tracking-wider text-[11px]">
                Factory Origin:
              </span>
              <strong className="text-[#FFFDF9]">Kanyakumari District, Tamil Nadu</strong>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#C8B8AB]">
              <span className="text-[#DF9B52] font-bold uppercase tracking-wider text-[11px]">
                Heritage:
              </span>
              <strong className="text-[#FFFDF9]">35+ Yrs Field Mastery • Est. 6 Years</strong>
            </div>
          </div>

          {/* Section 01: Product Details & Commercial Lengths */}
          <div className="mb-12">
            <div className="flex items-center gap-3 font-serif text-lg sm:text-xl font-bold text-[#FFFDF9] mb-5">
              <span className="bg-[#C58940]/25 text-[#DF9B52] border border-[#C58940]/40 px-2.5 py-0.5 rounded-lg text-xs font-mono font-black">
                01
              </span>
              <span>Product Details &amp; Commercial Lengths</span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#C58940]/25 bg-[#100804]/70">
              <table className="w-full min-w-[680px] text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gradient-to-b from-[#26130B] to-[#1A0D07] text-[#DF9B52] uppercase tracking-wider text-[11px] font-bold border-b border-[#C58940]/30">
                    <th className="py-4 px-5">Standard Length</th>
                    <th className="py-4 px-5">Metric (cm)</th>
                    <th className="py-4 px-5">Inches</th>
                    <th className="py-4 px-5">Combing Method</th>
                    <th className="py-4 px-5">Fibre Strength</th>
                    <th className="py-4 px-5">Main Uses</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C58940]/10 text-[#E2D3C4]">
                  <tr className="hover:bg-[#C58940]/10 transition-colors">
                    <td className="py-4 px-5">
                      <span className="inline-block bg-[#C58940]/25 text-[#FFD49C] border border-[#C58940]/40 px-2.5 py-1 rounded-md font-black text-xs mr-2">
                        8"-12"
                      </span>
                      <strong className="text-white">Standard Length ⭐</strong>
                    </td>
                    <td className="py-4 px-5 font-bold text-white">20.0 - 30.0 cm</td>
                    <td className="py-4 px-5">8.0 - 12.0 in</td>
                    <td className="py-4 px-5">Steel Pin Combed &amp; Dust-Free</td>
                    <td className="py-4 px-5 text-[#34D399] font-semibold">
                      High Stiffness &amp; Bounce
                    </td>
                    <td className="py-4 px-5 text-xs">
                      Cleaning brooms, road sweepers, industrial roller brushes, deck scrubbers &amp; coir twine
                    </td>
                  </tr>
                  <tr className="hover:bg-[#C58940]/10 transition-colors">
                    <td className="py-4 px-5">
                      <span className="inline-block bg-[#2F6FB5]/25 text-[#93C5FD] border border-[#2F6FB5]/40 px-2.5 py-1 rounded-md font-black text-xs mr-2">
                        CUSTOM
                      </span>
                      <strong className="text-white">Custom Cut (On Order)</strong>
                    </td>
                    <td className="py-4 px-5">Per Order (Custom)</td>
                    <td className="py-4 px-5">Per Order</td>
                    <td className="py-4 px-5">Custom Specified Combing</td>
                    <td className="py-4 px-5 text-neutral-300">Custom Specification</td>
                    <td className="py-4 px-5 text-xs">
                      Special brush machines &amp; custom broom manufacturing
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 02: Certified Quality Control Parameters */}
          <div className="mb-12">
            <div className="flex items-center gap-3 font-serif text-lg sm:text-xl font-bold text-[#FFFDF9] mb-6">
              <span className="bg-[#C58940]/25 text-[#DF9B52] border border-[#C58940]/40 px-2.5 py-0.5 rounded-lg text-xs font-mono font-black">
                02
              </span>
              <span>Certified Quality Control Parameters</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Dial 1 */}
              <div className="bg-[#1C0F0A] border border-[#C58940]/25 rounded-2xl p-6 text-center hover:border-[#DF9B52] hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] transition-all group">
                <div className="w-20 h-20 rounded-full border-4 border-[#331A10] border-t-[#DF9B52] border-r-[#C58940] bg-radial from-[#C58940]/15 to-transparent mx-auto mb-4 grid place-items-center font-bold text-sm text-white shadow-[0_0_20px_rgba(197,137,64,0.25)] group-hover:scale-105 transition-transform">
                  12-15%
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#DF9B52] mb-1">
                  Moisture Level
                </div>
                <p className="text-[11px] text-[#BCAAA4] leading-relaxed">
                  Properly sun-dried to stop mould and fungus during road transport
                </p>
              </div>

              {/* Dial 2 */}
              <div className="bg-[#1C0F0A] border border-[#C58940]/25 rounded-2xl p-6 text-center hover:border-[#DF9B52] hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] transition-all group">
                <div className="w-20 h-20 rounded-full border-4 border-[#331A10] border-t-[#DF9B52] border-r-[#C58940] bg-radial from-[#C58940]/15 to-transparent mx-auto mb-4 grid place-items-center font-bold text-sm text-white shadow-[0_0_20px_rgba(197,137,64,0.25)] group-hover:scale-105 transition-transform">
                  &lt; 3.0%
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#DF9B52] mb-1">
                  Dust &amp; Waste
                </div>
                <p className="text-[11px] text-[#BCAAA4] leading-relaxed">
                  Steel pins remove dust, loose powder, and short baby hair
                </p>
              </div>

              {/* Dial 3 */}
              <div className="bg-[#1C0F0A] border border-[#C58940]/25 rounded-2xl p-6 text-center hover:border-[#DF9B52] hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] transition-all group">
                <div className="w-20 h-20 rounded-full border-4 border-[#331A10] border-t-[#DF9B52] border-r-[#C58940] bg-radial from-[#C58940]/15 to-transparent mx-auto mb-4 grid place-items-center font-bold text-sm text-white shadow-[0_0_20px_rgba(197,137,64,0.25)] group-hover:scale-105 transition-transform">
                  100%
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#DF9B52] mb-1">
                  Deep Black Dye
                </div>
                <p className="text-[11px] text-[#BCAAA4] leading-relaxed">
                  Hot-vat boiled so the black colour stays permanent without fading
                </p>
              </div>

              {/* Dial 4 */}
              <div className="bg-[#1C0F0A] border border-[#C58940]/25 rounded-2xl p-6 text-center hover:border-[#DF9B52] hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] transition-all group">
                <div className="w-20 h-20 rounded-full border-4 border-[#331A10] border-t-[#DF9B52] border-r-[#C58940] bg-radial from-[#C58940]/15 to-transparent mx-auto mb-4 grid place-items-center font-bold text-xs text-white shadow-[0_0_20px_rgba(197,137,64,0.25)] group-hover:scale-105 transition-transform">
                  52-56 KG
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#DF9B52] mb-1">
                  Bale Weight (Manual)
                </div>
                <p className="text-[11px] text-[#BCAAA4] leading-relaxed">
                  Manual hand-packed in strong stitched gunny bags without machine compression
                </p>
              </div>
            </div>
          </div>

          {/* Section 03: Machinery Compatibility & Industrial Uses */}
          <div className="mb-10 bg-[#1A0E08] border border-[#C58940]/25 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 font-serif text-base sm:text-lg font-bold text-[#FFFDF9] mb-6">
              <span className="bg-[#C58940]/25 text-[#DF9B52] border border-[#C58940]/40 px-2.5 py-0.5 rounded-lg text-xs font-mono font-black">
                03
              </span>
              <span>Machinery Compatibility &amp; Industrial Uses</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#34D399] grid place-items-center font-bold text-xs flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">Works on Brush Machines</h4>
                  <p className="text-xs text-[#C8B8AB] leading-relaxed">
                    Automatic brush tufting machines, wire-wound brush machines, and hand-tying brooms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#34D399] grid place-items-center font-bold text-xs flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">Weather &amp; Water Resistant</h4>
                  <p className="text-xs text-[#C8B8AB] leading-relaxed">
                    Tolerates water, direct sunlight, and tough floor scrubbing without losing stiffness.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#34D399] grid place-items-center font-bold text-xs flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">100% Natural Coconut Fibre</h4>
                  <p className="text-xs text-[#C8B8AB] leading-relaxed">
                    Zero plastic microfibres, fully natural and eco-friendly agricultural product.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-white/10">
            <button onClick={handlePrint} className="btn-pill-caramel">
              <Printer className="w-4 h-4" />
              <span>Print / Save Product Data Sheet</span>
              <span className="arrow-disc">→</span>
            </button>
            <Link href="/contact" className="btn-pill-glass">
              <Phone className="w-4 h-4 text-[#DF9B52]" />
              <span>Contact Our Sales Desk</span>
              <span className="arrow-disc">→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
