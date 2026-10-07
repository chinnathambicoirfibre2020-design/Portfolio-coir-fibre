'use client';

import React from 'react';
import Link from 'next/link';
import { useLightbox } from '@/context/LightboxContext';
import { ShieldCheck, Phone, Check, ZoomIn, Ruler, Sparkles, CheckCircle2, Send } from 'lucide-react';

export default function SpecificationSuite() {
  const { openLightbox } = useLightbox();

  return (
    <section id="blueprint" className="py-16 sm:py-20 bg-[#140A06] text-[#F5EBE1] border-b border-[#3D2318] relative overflow-hidden">
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
          <div className="mb-14">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-3 font-serif text-lg sm:text-xl font-bold text-[#FFFDF9]">
                <span className="bg-[#C58940]/25 text-[#DF9B52] border border-[#C58940]/40 px-2.5 py-0.5 rounded-lg text-xs font-mono font-black">
                  01
                </span>
                <span>Product Details &amp; Commercial Lengths</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs text-[#DF9B52] bg-[#C58940]/15 border border-[#C58940]/30 px-3 py-1 rounded-full">
                <Ruler className="w-3.5 h-3.5" />
                <span>Physical Measurement Benchmark Verified</span>
              </div>
            </div>

            {/* Visual Highlight Grid: Real Measurement Image + Technical Specs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Highlighted Visual Standard Image Card */}
              <div className="lg:col-span-5 flex flex-col">
                <div
                  onClick={() =>
                    openLightbox(
                      '/assets/images/bristle-lenght.jpg',
                      'CCF Standard 8"-12" (200-300 mm / ~30 cm) Dyed Black Bristle Measurement Verification'
                    )
                  }
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-[#C58940]/50 bg-[#100804] p-3.5 shadow-2xl transition-all duration-300 hover:border-[#DF9B52] hover:shadow-[0_20px_50px_rgba(197,137,64,0.35)] flex-1 flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden rounded-xl bg-neutral-950">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/images/bristle-lenght.jpg"
                      alt="CCF 8 to 12 inch (30 cm) Dyed Black Bristle Length Measurement Standard"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 bg-[#1A0D07]/90 backdrop-blur-md text-[#DF9B52] font-black text-[11px] px-3 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5 border border-[#C58940]/40">
                      <Ruler className="w-3.5 h-3.5 text-[#DF9B52]" />
                      <span>Scale Benchmark</span>
                    </div>

                    <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md text-[#34D399] font-bold text-[11px] px-2.5 py-1 rounded-full border border-[#34D399]/40 flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                      <span>~12&quot; (~30 cm)</span>
                    </div>

                    {/* Bottom Zoom Callout */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/85 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md border border-white/20 transition-transform group-hover:scale-105 shadow-xl">
                      <ZoomIn className="w-3.5 h-3.5 text-[#DF9B52]" />
                      <span>Click to Inspect Scale</span>
                    </div>
                  </div>

                  {/* Caption & Visual Verification Note */}
                  <div className="pt-4 px-1 text-left">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-[#DF9B52] font-bold uppercase tracking-wider text-[11px] flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Actual Factory Measurement</span>
                      </span>
                      <span className="text-[#34D399] text-[11px] font-mono font-semibold bg-[#10B981]/15 px-2 py-0.5 rounded border border-[#10B981]/30">
                        Tolerance: ±10 mm
                      </span>
                    </div>
                    <p className="text-xs text-[#EADBC8] leading-relaxed">
                      Physical wooden scale calibration photo demonstrating CCF combed black bristle hanks reaching standard <strong>8&quot; - 12&quot; (~30 cm)</strong> height, strapped securely with blue bands for high-speed automated tufting.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Specifications Table & Feature Highlights */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                <div className="overflow-x-auto rounded-2xl border border-[#C58940]/25 bg-[#100804]/70">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-gradient-to-b from-[#26130B] to-[#1A0D07] text-[#DF9B52] uppercase tracking-wider text-[11px] font-bold border-b border-[#C58940]/30">
                        <th className="py-3.5 px-4">Standard Length</th>
                        <th className="py-3.5 px-4">Metric (cm)</th>
                        <th className="py-3.5 px-4">Inches</th>
                        <th className="py-3.5 px-4">Combing &amp; Finish</th>
                        <th className="py-3.5 px-4">Strength &amp; Uses</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#C58940]/10 text-[#E2D3C4]">
                      <tr className="hover:bg-[#C58940]/10 transition-colors">
                        <td className="py-3.5 px-4">
                          <span className="inline-block bg-[#C58940]/25 text-[#FFD49C] border border-[#C58940]/40 px-2 py-0.5 rounded font-black text-xs mr-1.5">
                            8&quot;-12&quot;
                          </span>
                          <strong className="text-white block sm:inline">Standard Length ⭐</strong>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">20.0 - 30.0 cm</td>
                        <td className="py-3.5 px-4 whitespace-nowrap">8.0 - 12.0 in</td>
                        <td className="py-3.5 px-4">
                          <span className="text-[#34D399] font-medium">Steel-Pin Combed</span>
                          <span className="block text-[11px] text-[#A8988B]">Dust-extracted &amp; straight</span>
                        </td>
                        <td className="py-3.5 px-4 text-xs">
                          <strong className="text-white">High Spring &amp; Bounce</strong>
                          <span className="block text-[11px] text-[#A8988B]">Floor brooms, road sweepers, industrial roller brushes</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-[#C58940]/10 transition-colors">
                        <td className="py-3.5 px-4">
                          <span className="inline-block bg-[#2F6FB5]/25 text-[#93C5FD] border border-[#2F6FB5]/40 px-2 py-0.5 rounded font-black text-xs mr-1.5">
                            CUSTOM
                          </span>
                          <strong className="text-white block sm:inline">Custom Cut</strong>
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">Per Order</td>
                        <td className="py-3.5 px-4 whitespace-nowrap">Per Order</td>
                        <td className="py-3.5 px-4">
                          <span className="text-neutral-300">Tailored Combing</span>
                          <span className="block text-[11px] text-[#A8988B]">Custom specified density</span>
                        </td>
                        <td className="py-3.5 px-4 text-xs">
                          <strong className="text-white">Specialized Machinery</strong>
                          <span className="block text-[11px] text-[#A8988B]">Dedicated brush machines &amp; custom tufting heads</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 3 Quick Verification Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-[#180C08] border border-[#C58940]/25 rounded-xl p-3.5 text-left">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#DF9B52] mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                      <span>Uniform Length Reach</span>
                    </div>
                    <p className="text-[11px] text-[#BCAAA4] leading-relaxed">
                      Rigorous hand-hackling removes short curly coir, giving 90%+ uniform 20–30 cm length.
                    </p>
                  </div>

                  <div className="bg-[#180C08] border border-[#C58940]/25 rounded-xl p-3.5 text-left">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#DF9B52] mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                      <span>Elastic Spring Retention</span>
                    </div>
                    <p className="text-[11px] text-[#BCAAA4] leading-relaxed">
                      Zero hydraulic crush maintains full fiber memory and rigid bouncing strength.
                    </p>
                  </div>

                  <div className="bg-[#180C08] border border-[#C58940]/25 rounded-xl p-3.5 text-left">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#DF9B52] mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                      <span>Machine-Ready Bundling</span>
                    </div>
                    <p className="text-[11px] text-[#BCAAA4] leading-relaxed">
                      Strapped in compact hanks with durable bands for smooth tufting feeder operation.
                    </p>
                  </div>
                </div>
              </div>

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
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-white/10">
            <Link href="/contact" className="btn-pill-caramel">
              <Phone className="w-4 h-4" />
              <span>Contact Sales Desk</span>
              <span className="arrow-disc">→</span>
            </Link>
            <Link href="/#enquiry" className="btn-pill-glass">
              <Send className="w-4 h-4 text-[#DF9B52]" />
              <span>Request Wholesale Price Quote</span>
              <span className="arrow-disc">→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
