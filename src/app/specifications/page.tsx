import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Download, Printer, ShieldCheck, CheckCircle2, Sliders, Cpu, Wrench } from "lucide-react";
import SpecificationSuite from "@/components/SpecificationSuite";

export const metadata: Metadata = {
  title: "Technical Specifications & QC Standards | CCF",
  description: "Official technical data sheet for Chinnathambi Coir Fibre dyed black bristle coir. Length tolerances, moisture limits (<15%), purity (>97%), manual 52-56kg gunny baling.",
};

export default function SpecificationsPage() {
  return (
    <div className="flex flex-col w-full bg-[#F5EBE1]">
      {/* Page Hero */}
      <section className="py-20 bg-gradient-to-b from-[#2C1810] to-[#1F110B] text-cream-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel/20 border border-caramel/40 text-caramel-light font-bold text-xs uppercase tracking-widest mb-6">
            📐 Technical Data Sheet &amp; Specifications
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cream-white tracking-tight leading-tight max-w-4xl mx-auto font-serif">
            Verified Standards &amp; <span className="text-caramel-light">QC Parameters</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#D6C7BA] max-w-3xl mx-auto leading-relaxed">
            Exhaustive physical tolerances, moisture thresholds, strapping standards, and machinery compatibility metrics for industrial broom and brush manufacturers.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="#specs-suite" className="btn-pill-light">
              <span>Explore Spec Sheet</span>
              <span className="arrow-disc">↓</span>
            </Link>
            <Link href="/contact" className="btn-pill-caramel">
              <span>Request Formal Quotation</span>
              <span className="arrow-disc">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Interactive Specification Suite */}
      <div id="specs-suite">
        <SpecificationSuite />
      </div>

      {/* Machinery Compatibility Deep Dive */}
      <section className="py-20 bg-[#FFFDF9] border-t border-cream-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-caramel-dark font-bold text-xs uppercase tracking-widest">
              Integration Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-espresso mt-2 font-serif">
              Machinery &amp; Tooling Compatibility
            </h2>
            <p className="text-ink-soft mt-4">
              Tested for smooth operation across multiple automated and manual brush-binding equipment setups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5EBE1] border border-cream-border rounded-2xl p-7">
              <div className="w-12 h-12 rounded-xl bg-espresso text-caramel-light flex items-center justify-center mb-5">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-espresso font-serif mb-2">CNC Brush Tufting Systems</h3>
              <p className="text-xs text-ink-soft leading-relaxed mb-4">
                Compatible with Borghi, Boucherie, and domestic automatic CNC tufting machines. Cleanly combed hanks feed into automatic pickers without staple jamming.
              </p>
              <div className="text-xs font-semibold text-espresso-light flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-caramel-dark" /> Zero machine jamming
              </div>
            </div>

            <div className="bg-[#F5EBE1] border border-cream-border rounded-2xl p-7">
              <div className="w-12 h-12 rounded-xl bg-espresso text-caramel-light flex items-center justify-center mb-5">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-espresso font-serif mb-2">Wire-Wound Cylinder Brushes</h3>
              <p className="text-xs text-ink-soft leading-relaxed mb-4">
                High tensile springiness allows tight spiral wire binding around steel shafts without snapping or splitting at the root bend.
              </p>
              <div className="text-xs font-semibold text-espresso-light flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-caramel-dark" /> Flexible root resilience
              </div>
            </div>

            <div className="bg-[#F5EBE1] border border-cream-border rounded-2xl p-7">
              <div className="w-12 h-12 rounded-xl bg-espresso text-caramel-light flex items-center justify-center mb-5">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-espresso font-serif mb-2">Hand-Tied Street Brooms</h3>
              <p className="text-xs text-ink-soft leading-relaxed mb-4">
                Standard 8&quot;–12&quot; hanks bundled with blue PP straps provide easy ergonomics for manual twine binding and pitch-set broom blocks.
              </p>
              <div className="text-xs font-semibold text-espresso-light flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-caramel-dark" /> 100g–250g handy hanks
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
