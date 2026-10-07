import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Truck, Layers, Award, Sparkles, Phone } from "lucide-react";
import ProductShowcase from "@/components/ProductShowcase";
import AnatomySection from "@/components/AnatomySection";

export const metadata: Metadata = {
  title: "Commercial Standard Length Products (8\"-12\") | CCF",
  description: "Explore Chinnathambi Coir Fibre standard commercial 8\"-12\" (200-300mm) dyed black bristle coir fibre. Manual 52kg-56kg stitched gunny bale packaging.",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full bg-[#F5EBE1]">
      {/* Page Hero */}
      <section className="pt-10 pb-14 sm:pt-12 sm:pb-16 bg-gradient-to-b from-[#2C1810] to-[#1F110B] text-cream-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel/20 border border-caramel/40 text-caramel-light font-bold text-xs uppercase tracking-widest mb-4">
            ✨ 35+ Years Coir Experience • Direct Factory
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cream-white tracking-tight leading-tight max-w-4xl mx-auto font-serif">
            Our Black Bristle <span className="text-caramel-light">Coir Products</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#D6C7BA] max-w-3xl mx-auto leading-relaxed">
            High-grade dyed black coconut bristle fibre, pin-hackled and combed to uniform 8&quot; to 12&quot; (200 - 300 mm) commercial length. Manual hand-stitched 52kg–56kg gunny bales ready for direct Pan-India truck dispatch.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="#standards" className="btn-pill-light">
              <span>View 8&quot;-12&quot; Standards</span>
              <span className="arrow-disc">↓</span>
            </Link>
            <Link href="/#enquiry" className="btn-pill-caramel">
              <span>Book Now</span>
              <span className="arrow-disc">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Product Showcase Component */}
      <div id="standards">
        <ProductShowcase />
      </div>

      {/* Anatomy and Quality Section */}
      <AnatomySection />

      {/* Product Variants & Applications Matrix */}
      <section className="py-20 bg-[#F5EBE1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-caramel-dark font-bold text-xs uppercase tracking-widest">
              Industrial Utility Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-espresso mt-2 font-serif">
              Engineered For High-Output Manufacturing
            </h2>
            <p className="text-ink-soft mt-4">
              Our combed black bristle bundles are rigorously processed to run smoothly across automated tufting machines, wire-drawn brush machinery, and manual broom binding setups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#FFFDF9] border border-cream-border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-caramel/15 flex items-center justify-center text-caramel-dark mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-espresso font-serif mb-3">
                Commercial Street &amp; Deck Brooms
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed mb-6">
                High-resilience 8&quot;–12&quot; cut gives street sweeping brooms and municipal road cleaners rigid scrubbing strength without bristle curling.
              </p>
              <ul className="space-y-2.5 text-xs font-semibold text-ink">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-caramel-dark" /> Natural oil and water resistance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-caramel-dark" /> Deep thermal black penetration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-caramel-dark" /> Retains rigidity in humid conditions
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFFDF9] border-2 border-caramel/40 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute top-4 right-4 bg-caramel text-espresso font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div className="w-12 h-12 rounded-2xl bg-caramel/15 flex items-center justify-center text-caramel-dark mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-espresso font-serif mb-3">
                Automated Brush Tufting Machines
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed mb-6">
                Uniformly hackled hanks with low pith content (&lt; 3%) prevent machine clogging and needle breakage during high-speed stapling.
              </p>
              <ul className="space-y-2.5 text-xs font-semibold text-ink">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-caramel-dark" /> Low pith (&lt; 3%) protects needles
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-caramel-dark" /> Consistent 52-56kg manual bales
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-caramel-dark" /> 2-3 PP strapped hanks
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FFFDF9] border border-cream-border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-caramel/15 flex items-center justify-center text-caramel-dark mb-6">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-espresso font-serif mb-3">
                Industrial Roller &amp; Cylinder Brushes
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed mb-6">
                Spiral-wound cylinder brushes for agricultural sorting, conveyor cleaning, and heavy machinery washdowns benefit from dense tensile fibre.
              </p>
              <ul className="space-y-2.5 text-xs font-semibold text-ink">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-caramel-dark" /> Superior rebound memory
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-caramel-dark" /> Zero machine crush distortion
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-caramel-dark" /> Custom cut lengths available
                </li>
              </ul>
            </div>
          </div>

          {/* Quick CTA strip */}
          <div className="mt-16 bg-[#2C1810] rounded-3xl p-8 sm:p-12 text-cream-white flex flex-col md:flex-row items-center justify-between gap-8 border border-caramel/30">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-cream-white">
                Need Custom Hank Bundles or Trial Quantities?
              </h3>
              <p className="text-[#D6C7BA] text-sm max-w-xl">
                We support trial shipments from 500 kg up to 25 Ton full truckloads. Direct billing with GST compliance.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link href="/contact" className="btn-pill-caramel">
                <span>Talk to Factory Team</span>
                <span className="arrow-disc">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
