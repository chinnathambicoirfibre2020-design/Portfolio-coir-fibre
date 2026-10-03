'use client';

import React from 'react';
import Link from 'next/link';
import { Check, MapPin, Droplets, Sun, Package, ArrowRight, ShieldCheck, Award } from 'lucide-react';

export default function ProductShowcase() {
  const advantages = [
    {
      icon: MapPin,
      title: 'Coastal Origin',
      desc: "Sourced from Kanyakumari's coastal coconut belt for extra fibre thickness and natural spring resilience.",
    },
    {
      icon: Droplets,
      title: 'Permanent Dye',
      desc: 'Boiled with deep-penetrating jet black dye that will not bleed or fade during heavy wet scrubbing.',
    },
    {
      icon: Sun,
      title: 'Dry & Clean',
      desc: 'Coastal sun-cured under 15% moisture to strictly prevent fungus, mildew, and transit odors.',
    },
    {
      icon: Package,
      title: 'Manual Packing',
      desc: 'Carefully hand-packed into 52kg - 56kg bales in natural gunny bags without hydraulic machine crush.',
    },
  ];

  return (
    <section id="grades" className="py-20 bg-[#FAF4EB] text-[#22130C] border-b border-[#E2D3C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#C58940]/20 border border-[#C58940] px-4 py-1.5 rounded-full text-xs font-bold text-[#A36A28] mb-3">
            <Package className="w-3.5 h-3.5" />
            <span>Primary Commercial Fibre Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-[#1F110B] tracking-tight">
            Standard 8&quot; to 12&quot; Black Coir Fibre
          </h2>
          <p className="text-base sm:text-lg text-[#5C4638] mt-3 leading-relaxed">
            Clean, strong, and ready for making long-lasting brooms and brushes. Cut to standard 8&quot; - 12&quot; (200 - 300 mm) commercial length with high stiffness and bounce-back.
          </p>
        </div>

        {/* Featured Commercial Standard Card */}
        <div className="bg-[#2C1810] text-[#FFFDF9] rounded-3xl p-6 sm:p-10 border-2 border-[#C58940]/40 shadow-2xl relative overflow-hidden mb-16">
          <div className="absolute top-4 right-4 bg-gradient-to-r from-[#DF9B52] to-[#C58940] text-[#1A0E08] text-xs font-black px-4 py-1.5 rounded-full shadow-md">
            ⭐ Commercial Bristle Standard
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Specs */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-black font-serif text-[#DF9B52]">
                    8&quot; - 12&quot;
                  </span>
                  <span className="text-base font-bold text-[#EADBC8]">200 - 300 mm Cut</span>
                </div>
                <div className="text-sm font-semibold text-neutral-300 mt-1">
                  Standard Cut Commercial Length in Strapped Hanks
                </div>
              </div>

              {/* Stat Bars */}
              <div className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                <div>
                  <div className="flex justify-between text-xs font-bold text-[#EADBC8] mb-1">
                    <span>Length Reach (20 - 30 cm)</span>
                    <span className="text-[#DF9B52]">90% Sorting Accuracy</span>
                  </div>
                  <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#DF9B52] to-[#C58940] w-[90%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-[#EADBC8] mb-1">
                    <span>Fibre Strength &amp; Rigidity</span>
                    <span className="text-[#DF9B52]">88% Natural Stiffness</span>
                  </div>
                  <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#DF9B52] to-[#C58940] w-[88%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-[#EADBC8] mb-1">
                    <span>Cleanliness &amp; Purity</span>
                    <span className="text-[#34D399]">99.2% Clean (&lt;3% Dust)</span>
                  </div>
                  <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#34D399] w-[95%]" />
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#E2D3C4] leading-relaxed">
                <strong>Quality Highlights:</strong> Combed multiple times through sharp steel pins. Dust, loose powder, and short baby fibres are cleanly extracted so bristles stay straight, stiff, and feed smoothly into automated tufting and broom-making machines.
              </p>

              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#DF9B52] mb-1">
                  Best Used For:
                </span>
                <p className="text-xs sm:text-sm text-neutral-300">
                  Floor cleaning brooms, road sweepers, industrial roller brushes, deck scrubbing brushes, washing brushes, and strong coir ropes.
                </p>
              </div>
            </div>

            {/* Right Quick Summary Card */}
            <div className="lg:col-span-5 bg-[#1F110B] border border-[#C58940]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-serif text-white border-b border-white/10 pb-3">
                  Packing &amp; Delivery Summary
                </h3>
                <ul className="space-y-3 text-xs text-[#EADBC8]">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                    <span><strong>Packaging:</strong> 52kg - 56kg Gunny Stitched Bales</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                    <span><strong>Method:</strong> 100% Manual Hand Packing (No Crush)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                    <span><strong>Dyeing:</strong> Permanent Hot-Vat Jet Black</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                    <span><strong>Moisture:</strong> Strictly &lt; 15% Sun Dried</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                    <span><strong>Dispatch:</strong> Direct Truck to 28+ States</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <Link
                  href="/contact"
                  className="btn-pill-caramel w-full text-center text-sm font-black"
                >
                  <span>Request 8&quot;-12&quot; Standard Price</span>
                  <span className="arrow-disc">→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Advantage Cards */}
        <div>
          <h3 className="text-center font-serif text-2xl font-black text-[#1F110B] mb-8">
            Why Choose CCF Kanyakumari Coir?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => {
              const Icon = adv.icon;
              return (
                <div
                  key={adv.title}
                  className="bg-[#FCF8F4] border border-[#E2D3C4] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#C58940] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EADBC8] text-[#A36A28] grid place-items-center mb-4 font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#1F110B] mb-1.5">
                    {adv.title}
                  </h4>
                  <p className="text-xs text-[#5C4638] leading-relaxed">{adv.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
