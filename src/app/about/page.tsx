import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Award, MapPin, Truck, CheckCircle2, Factory, Sun, Sparkles } from "lucide-react";
import StatsBar from "@/components/StatsBar";

export const metadata: Metadata = {
  title: "About CCF | 35+ Years Coir & Fibre Product Manufacturer",
  description: "Learn about Chinnathambi Coir Fibre (CCF) - 35+ years of industry leadership and mastery in natural coir fibre processing, operating our state-of-the-art manufacturing unit in Kanyakumari, Tamil Nadu.",
  keywords: [
    "Manufacturer",
    "Fabric product manufacturer",
    "Fibre product manufacturer",
    "Coir manufacturer background",
    "Chinnathambi Coir history",
    "Coir fibre factory Kanyakumari",
    "South India natural fibre manufacturer"
  ],
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-[#F5EBE1]">
      {/* Page Hero */}
      <section className="pt-10 pb-14 sm:pt-12 sm:pb-16 bg-gradient-to-b from-[#2C1810] to-[#1F110B] text-cream-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel/20 border border-caramel/40 text-caramel-light font-bold text-xs uppercase tracking-widest mb-4">
            🏭 35+ Years Field Experience • Est. 6 Years Ago
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cream-white tracking-tight leading-tight max-w-4xl mx-auto font-serif">
            About Chinnathambi <span className="text-caramel-light">Coir Fibre (CCF)</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#D6C7BA] max-w-3xl mx-auto leading-relaxed">
            Direct processing facility in the coastal coconut belt of Kanyakumari, Tamil Nadu. Manufacturing high-tensile dyed black bristle coir fibre with reliable all-India wholesale truck dispatches.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/#enquiry" className="btn-pill-caramel">
              <span>Book Now</span>
              <span className="arrow-disc">→</span>
            </Link>
            <Link href="/products" className="btn-pill-light">
              <span>Explore Products</span>
              <span className="arrow-disc">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <StatsBar />

      {/* Heritage & Processing Narrative */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 bg-[#F5EBE1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFFDF9] border border-cream-border rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-caramel/15 border border-caramel/40 text-caramel-dark font-bold text-xs uppercase tracking-widest">
                🌿 Kanyakumari Coastal Heritage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-espresso font-serif leading-tight">
                Three Decades of Coir Craftsmanship, Direct Factory Integrity
              </h2>
              <p className="text-ink-soft leading-relaxed">
                <strong>Chinnathambi Coir Fibre (CCF)</strong> is grounded in over 35 years of active coir field experience. Located in the fertile coconut belt of Kanyakumari District, Tamil Nadu, our processing unit was established 6 years ago to bring strict quality standardization to dyed black bristle supply across India.
              </p>
              <p className="text-ink-soft leading-relaxed">
                Unlike mass-production units that use harsh hydraulic presses to compress bristles into misshapen blocks, CCF upholds a strict <strong>100% manual hand-packing philosophy</strong>. Each 52kg to 56kg bale is manually assembled and stitched in natural hessian gunny bags, protecting the natural rebound elasticity essential for automatic brush tufting and commercial broom manufacturing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-[#F5EBE1] border border-cream-border">
                  <h4 className="font-bold text-espresso text-sm mb-1">Direct Field Sourcing</h4>
                  <p className="text-xs text-ink-soft">Raw coconut husks sourced directly from coastal groves with thicker fibre walls.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F5EBE1] border border-cream-border">
                  <h4 className="font-bold text-espresso text-sm mb-1">Pan-India Freight Desk</h4>
                  <p className="text-xs text-ink-soft">Regular direct truck dispatches to Maharashtra, Gujarat, Delhi NCR, Punjab, UP &amp; South India.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFDF9] relative h-[380px] sm:h-[420px] bg-espresso">
                <Image
                  src="/assets/images/Sun-Drying-img.jpg"
                  alt="Kanyakumari coir facility sun drying yard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-cream-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-caramel-light">Processing Facility</p>
                  <p className="text-sm font-bold text-cream-white mt-1">Sun-Curing &amp; Hackling Yards, Kanyakumari</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values / Why Work With Us */}
      <section className="py-20 bg-[#2C1810] text-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-caramel-light font-bold text-xs uppercase tracking-widest">
              Why Partner With CCF
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-cream-white mt-2 font-serif">
              Built on Transparency, Purity &amp; Dependability
            </h2>
            <p className="text-[#D6C7BA] mt-4">
              We treat our B2B customers as long-term partners with predictable quality batches, fair factory pricing, and continuous year-round supply.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1F110B] border border-[#4A2D20] rounded-3xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-caramel/20 flex items-center justify-center text-caramel-light">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-cream-white font-serif">35+ Years Field Mastery</h3>
              <p className="text-xs text-[#B8A392] leading-relaxed">
                Decades of practical experience in raw fibre sorting, moisture control, and thermal dye penetration ensure zero compromise in raw material.
              </p>
            </div>

            <div className="bg-[#1F110B] border border-[#4A2D20] rounded-3xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-caramel/20 flex items-center justify-center text-caramel-light">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-cream-white font-serif">Established Direct Plant</h3>
              <p className="text-xs text-[#B8A392] leading-relaxed">
                Our plant established 6 years ago handles end-to-end processing with internal QC checkpoints from boiling vats to stitched gunny bales.
              </p>
            </div>

            <div className="bg-[#1F110B] border border-[#4A2D20] rounded-3xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-caramel/20 flex items-center justify-center text-caramel-light">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-cream-white font-serif">Direct Truck Logistics</h3>
              <p className="text-xs text-[#B8A392] leading-relaxed">
                Direct dispatch partnerships with all major national logistics fleets for full truckloads (FTL) and part truckloads (PTL) across all 28 states.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
