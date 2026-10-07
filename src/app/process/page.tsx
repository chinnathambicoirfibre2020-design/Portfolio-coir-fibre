import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, MapPin, CheckCircle2, ShieldCheck, Sun, Layers, Package, Flame } from "lucide-react";
import ProcessTimeline from "@/components/ProcessTimeline";
import AnatomySection from "@/components/AnatomySection";
import FactoryGallery from "@/components/FactoryGallery";

export const metadata: Metadata = {
  title: "Factory Manufacturing Process & Direct Processing Facility",
  description: "Step-by-step manufacturing process of dyed black bristle coir fibre at CCF Kanyakumari. Raw husk curation, 95°C thermal vat dyeing, pin hackling, solar drying, and manual gunny baling.",
  keywords: [
    "Manufacturer",
    "Fabric product manufacturer",
    "Fibre product manufacturer",
    "Coir manufacturing process",
    "Thermal vat dyeing process coir",
    "Bristle fibre hackling factory",
    "Coir processing facility Tamil Nadu"
  ],
  alternates: {
    canonical: "/process",
  },
};

export default function ProcessPage() {
  return (
    <div className="flex flex-col w-full bg-[#F5EBE1]">
      {/* Page Hero */}
      <section className="pt-10 pb-14 sm:pt-12 sm:pb-16 bg-gradient-to-b from-[#2C1810] to-[#1F110B] text-cream-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel/20 border border-caramel/40 text-caramel-light font-bold text-xs uppercase tracking-widest mb-4">
            🏭 Factory Walkthrough &amp; Processing
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cream-white tracking-tight leading-tight max-w-4xl mx-auto font-serif">
            The Making of <span className="text-caramel-light">Black Bristle Coir</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#D6C7BA] max-w-3xl mx-auto leading-relaxed">
            From selected mature Kanyakumari coconut husks to deeply boiled dyed hanks, precision steel-pin hackling, and manual 52kg–56kg hand-stitched gunny bales.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="#journey" className="btn-pill-light">
              <span>Explore 5-Step Process</span>
              <span className="arrow-disc">↓</span>
            </Link>
            <Link href="/#enquiry" className="btn-pill-caramel">
              <span>Book Now</span>
              <span className="arrow-disc">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Origin Story Banner */}
      <section className="py-16 bg-[#1F110B] text-cream-white border-y border-[#3D2318]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 text-caramel-light font-bold text-xs uppercase tracking-widest">
                🌿 Sourced Exclusively from Kanyakumari
              </span>
              <blockquote className="text-2xl sm:text-3xl font-serif text-cream-white italic leading-snug">
                &ldquo;High-quality broom manufacturing demands natural tensile springiness. Kanyakumari&apos;s saline coastal breeze produces thicker cell walls in coconut husks that resist moisture softening.&rdquo;
              </blockquote>
              <p className="text-[#D6C7BA] text-sm leading-relaxed">
                Backed by <strong>35+ years of hands-on coir industry expertise</strong> and our dedicated unit established 6 years ago, CCF operates a rigorous multi-stage refinement workflow delivering consistent quality to brush manufacturers nationwide.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#26150E] border border-[#4A2D20] rounded-2xl p-6 text-center space-y-2 shadow-xl">
              <div className="w-12 h-12 bg-caramel/20 text-caramel-light rounded-full mx-auto flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-cream-white font-serif">Kanyakumari District</h3>
              <p className="text-caramel-light text-xs font-bold uppercase tracking-wider">Tamil Nadu, India</p>
              <p className="text-[#A89687] text-xs pt-2 border-t border-[#3D2318]">
                8.0883° N, 77.5385° E • Geographic Coastal Coconut Epicenter
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy and Macro Fibre Section */}
      <AnatomySection />

      {/* 5-Step Process Timeline */}
      <div id="journey">
        <ProcessTimeline />
      </div>

      {/* Real Factory Photo Gallery with Lightbox */}
      <FactoryGallery />

      {/* Manual Packing Commitment Section */}
      <section className="py-20 bg-[#2C1810] text-cream-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-caramel/20 border border-caramel/40 text-caramel-light font-bold text-xs uppercase tracking-widest">
                📦 Our Core Packing Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-cream-white leading-tight">
                100% Manual Hand-Packing in 52kg to 56kg Gunny Bales
              </h2>
              <p className="text-[#D6C7BA] leading-relaxed">
                Many modern exporters rely on 50-tonne high-pressure hydraulic balers that crush and deform straight bristle fibres. At CCF, we preserve bristle integrity by exclusively packing by hand into natural breathable hessian gunny sacks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#1F110B] border border-[#4A2D20]">
                  <h4 className="font-bold text-sm text-caramel-light mb-1">Zero Hydraulic Crush</h4>
                  <p className="text-xs text-[#B8A392]">Fibres retain their natural spring rebound memory for brush tufting.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#1F110B] border border-[#4A2D20]">
                  <h4 className="font-bold text-sm text-caramel-light mb-1">2-3 PP Strapped Hanks</h4>
                  <p className="text-xs text-[#B8A392]">Each 100g-250g hank is tightly secured with blue PP strap bands.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1F110B] border border-[#4A2D20] rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-bold font-serif text-cream-white">
                Quality Inspection Checkpoints
              </h3>
              <div className="space-y-4 text-sm text-[#D6C7BA]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-caramel-light shrink-0 mt-0.5" />
                  <span><strong>Moisture Meter Check:</strong> Every bale verified under 15% before final hand stitching.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-caramel-light shrink-0 mt-0.5" />
                  <span><strong>Length Sorting:</strong> Segregated into 8&quot; - 12&quot; standard commercial cut bins.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-caramel-light shrink-0 mt-0.5" />
                  <span><strong>Dust &amp; Pith Removal:</strong> High-density steel combs strip away loose baby fuzz.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-caramel-light shrink-0 mt-0.5" />
                  <span><strong>Colour Fastness:</strong> Boiled dye tested to withstand water and detergent exposure.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#3D2318] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#826E60]">Have special packing requests?</span>
                  <p className="text-sm font-bold text-cream-white">We tailor to your factory specifications</p>
                </div>
                <Link href="/contact" className="btn-pill-caramel text-xs py-2.5 px-5">
                  <span>Enquire</span>
                  <span className="arrow-disc">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
