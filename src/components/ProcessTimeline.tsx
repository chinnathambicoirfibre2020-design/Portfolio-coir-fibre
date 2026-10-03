'use client';

import React from 'react';
import Link from 'next/link';
import { useLightbox } from '@/context/LightboxContext';
import { Factory, ZoomIn, ArrowRight } from 'lucide-react';

export default function ProcessTimeline() {
  const { openLightbox } = useLightbox();

  const steps = [
    {
      step: 'Step 01',
      title: 'Husk Selection & Hackling',
      desc: 'Top quality coastal husks are defibred and processed through steel pin hackling combs to separate stiff bristle fibres from loose mattress coir.',
      img: '/assets/images/Deep-Black-img.jpg',
      caption: 'Raw Husk Extraction and Initial Combing',
    },
    {
      step: 'Step 02',
      title: 'Thermal Dye Boiling',
      desc: 'Raw fibre hanks are boiled in large thermal dye vats with industrial black mineral dyes for rich, non-fading colour permanence.',
      img: '/assets/images/Strapped-Black-img.jpg',
      caption: 'Combed Black Hanks with Signature Blue Strapping',
    },
    {
      step: 'Step 03',
      title: 'Open-Air Sun Curing',
      desc: 'Boiled black hanks are spread in tidy rows across concrete sun-drying yards until moisture reaches 12-15%, preventing fungus during transit.',
      img: '/assets/images/Sun-Drying-img.jpg',
      caption: 'Sun Curing and Open-Air Drying Yards in Kanyakumari',
    },
    {
      step: 'Step 04',
      title: '52-56kg Manual Hand Packing',
      desc: 'Finished dry hanks are hand-packed into strong stitched gunny bags without hydraulic machine crush. Each bale weighs 52kg to 56kg.',
      img: '/assets/images/IMG_3612.jpg',
      caption: '52-56kg Stitched Hessian Gunny Bales Ready for Dispatch',
    },
  ];

  return (
    <section className="py-20 bg-[#FAF4EB] text-[#22130C] border-b border-[#E2D3C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#C58940]/20 border border-[#C58940] px-4 py-1.5 rounded-full text-xs font-bold text-[#A36A28] mb-3">
            <Factory className="w-3.5 h-3.5" />
            <span>Artisan Precision • Direct Factory Facility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-[#1F110B] tracking-tight">
            How We Process Our Black Bristle Fibre
          </h2>
          <p className="text-base sm:text-lg text-[#5C4638] mt-3 leading-relaxed">
            Our 4-step production cycle guarantees uniform 8"-12" length, deep non-fading black dye, and undamaged fibre springiness.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((st) => (
            <div
              key={st.step}
              className="bg-[#FCF8F4] border border-[#E2D3C4] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#C58940] transition-all flex flex-col group"
            >
              {/* Media */}
              <div
                onClick={() => openLightbox(st.img, st.caption)}
                className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-neutral-900"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={st.img}
                  alt={st.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#1F110B]/90 text-[#DF9B52] border border-[#C58940]/40 text-xs font-black px-3 py-1 rounded-full backdrop-blur-sm">
                  {st.step}
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5 text-[#DF9B52]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base text-[#1F110B] mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#5C4638] leading-relaxed">{st.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Detailed Process Link */}
        <div className="text-center">
          <Link href="/process" className="btn-pill-dark text-sm">
            <span>Explore Full Factory Tour &amp; Video Walkthrough</span>
            <span className="arrow-disc">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
