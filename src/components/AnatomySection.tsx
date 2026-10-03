'use client';

import React from 'react';
import { useLightbox } from '@/context/LightboxContext';
import { Sparkles, ZoomIn, CheckCircle2 } from 'lucide-react';

export default function AnatomySection() {
  const { openLightbox } = useLightbox();

  const features = [
    {
      title: 'Thick Coastal Coconut Husks',
      desc: 'Sourced directly from Kanyakumari farmers where sea breeze and soil give coconut fibres thicker natural walls and superior elastic bounce-back.',
    },
    {
      title: 'Deep Thermal Dye Penetration',
      desc: 'Boiled in specialized hot vats so the jet-black dye penetrates deep into the cellular core, preventing bleeding or fading during wet cleaning.',
    },
    {
      title: 'Steel-Pin Multi-Pass Combing',
      desc: 'Multiple passes through sharp steel combing pins remove short curly hair, pith, and dust, leaving only long, straight, stiff bristles.',
    },
    {
      title: 'Manual 52-56kg Baling Protection',
      desc: 'Hand-packed into gunny bags without hydraulic machine crushing. Fibres retain their full natural stiffness and springiness for brush machines.',
    },
  ];

  return (
    <section className="py-20 bg-[#22120B] text-[#FFFDF9] border-b border-[#3D2318] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#C58940]/20 border border-[#C58940] px-4 py-1.5 rounded-full text-xs font-bold text-[#DF9B52] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fibre Science &amp; Quality Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-[#FFFDF9] tracking-tight">
            What Makes Our Black Bristle Fibre Stronger?
          </h2>
          <p className="text-base text-[#C8B8AB] mt-3 leading-relaxed">
            From raw coastal husk selection to hot-dyeing and manual packaging, every stage is optimized for industrial durability.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Media Column */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              onClick={() =>
                openLightbox(
                  '/assets/images/Fibre Quality.jpg',
                  'Authentic CCF Kanyakumari Dyed Black Bristle Coir Fibre Hanks'
                )
              }
              className="group relative cursor-pointer overflow-hidden rounded-3xl border-2 border-[#C58940]/40 bg-[#140A06] p-2 shadow-2xl transition-all duration-300 hover:border-[#DF9B52] hover:shadow-[0_20px_50px_rgba(197,137,64,0.3)]"
            >
              <div className="relative aspect-[4/3] w-full max-w-[540px] overflow-hidden rounded-2xl bg-neutral-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/Fibre Quality.jpg"
                  alt="Authentic Kanyakumari dyed black bristle coir fibre hanks"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/75 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md border border-white/20 transition-transform group-hover:scale-105">
                  <ZoomIn className="w-3.5 h-3.5 text-[#DF9B52]" />
                  <span>Click to Inspect Quality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Features Column */}
          <div className="lg:col-span-6 space-y-6">
            {features.map((feat, index) => (
              <div
                key={feat.title}
                className="bg-[#180C08] border border-[#C58940]/25 rounded-2xl p-5 hover:border-[#DF9B52]/50 transition-all flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-xl bg-[#C58940]/20 text-[#DF9B52] grid place-items-center flex-shrink-0 font-bold text-sm">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-white mb-1">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#BCAAA4] leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
