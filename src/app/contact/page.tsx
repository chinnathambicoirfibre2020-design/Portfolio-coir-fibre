import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageSquare, Clock, Truck, ShieldCheck } from "lucide-react";
import RfqSection from "@/components/RfqSection";
import TransportCoverage from "@/components/TransportCoverage";

export const metadata: Metadata = {
  title: "Contact Factory Sales Desk & Wholesale RFQ | CCF",
  description: "Contact Chinnathambi Coir Fibre (CCF) sales team for direct factory wholesale rates, 8\"-12\" standard cut black bristle coir, sample hanks, and Pan-India freight quotes.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-[#F5EBE1]">
      {/* Page Hero */}
      <section className="py-20 bg-gradient-to-b from-[#2C1810] to-[#1F110B] text-cream-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel/20 border border-caramel/40 text-caramel-light font-bold text-xs uppercase tracking-widest mb-6">
            ⚡ Quick Response within 15 Minutes
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cream-white tracking-tight leading-tight max-w-4xl mx-auto font-serif">
            Contact CCF <span className="text-caramel-light">Factory Sales Desk</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#D6C7BA] max-w-3xl mx-auto leading-relaxed">
            Get today&apos;s wholesale price for 8&quot;-12&quot; Standard Commercial Length Dyed Black Bristle Coir Fibre, request sample hanks, or calculate direct truck transport freight to your city.
          </p>
        </div>
      </section>

      {/* Main Interactive RFQ Section */}
      <RfqSection />

      {/* Logistics & Transit Network */}
      <TransportCoverage />

      {/* Direct Contact Cards Grid */}
      <section className="py-16 bg-[#FFFDF9] border-t border-cream-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-[#F5EBE1] border border-cream-border rounded-2xl p-7 text-center space-y-3">
              <div className="w-12 h-12 bg-espresso text-caramel-light rounded-xl mx-auto flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-espresso text-base">Direct Phone &amp; WhatsApp</h3>
              <p className="text-xs text-ink-soft">Direct line to our factory dispatch coordinators.</p>
              <div className="pt-2">
                <a href="tel:+910000000000" className="text-sm font-bold text-caramel-dark hover:underline">
                  +91 00000 00000
                </a>
              </div>
            </div>

            <div className="bg-[#F5EBE1] border border-cream-border rounded-2xl p-7 text-center space-y-3">
              <div className="w-12 h-12 bg-espresso text-caramel-light rounded-xl mx-auto flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-espresso text-base">Official Email Desk</h3>
              <p className="text-xs text-ink-soft">Send purchase orders, tender documents &amp; RFQs.</p>
              <div className="pt-2">
                <a href="mailto:sales@yourbrand.example" className="text-sm font-bold text-caramel-dark hover:underline">
                  sales@yourbrand.example
                </a>
              </div>
            </div>

            <div className="bg-[#F5EBE1] border border-cream-border rounded-2xl p-7 text-center space-y-3">
              <div className="w-12 h-12 bg-espresso text-caramel-light rounded-xl mx-auto flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-espresso text-base">Factory &amp; Godown</h3>
              <p className="text-xs text-ink-soft">Kanyakumari District Coconut Belt, Tamil Nadu, 629001, India.</p>
              <div className="pt-2">
                <span className="text-xs font-semibold text-espresso">Daily All-India Dispatches</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
