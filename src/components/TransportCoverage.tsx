'use client';

import React from 'react';
import Link from 'next/link';
import { Truck, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function TransportCoverage() {
  const routes = [
    {
      region: 'Western India',
      states: 'Maharashtra, Gujarat, Goa',
      cities: 'Mumbai, Pune, Surat, Ahmedabad, Rajkot',
      transit: '3 - 4 Days',
    },
    {
      region: 'Northern India',
      states: 'Delhi NCR, UP, Haryana, Punjab, Rajasthan',
      cities: 'Delhi, Noida, Kanpur, Agra, Jaipur, Ludhiana',
      transit: '5 - 6 Days',
    },
    {
      region: 'Southern India',
      states: 'Tamil Nadu, Karnataka, Kerala, AP, Telangana',
      cities: 'Chennai, Coimbatore, Bangalore, Hyderabad',
      transit: '1 - 2 Days',
    },
    {
      region: 'Eastern India',
      states: 'West Bengal, Odisha, Bihar, Assam',
      cities: 'Kolkata, Howrah, Cuttack, Patna, Guwahati',
      transit: '5 - 6 Days',
    },
  ];

  return (
    <section id="all-india" className="py-20 bg-[#1F110B] text-[#FFFDF9] border-b border-[#3D2318]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#C58940]/20 border border-[#C58940] px-4 py-1.5 rounded-full text-xs font-bold text-[#DF9B52] mb-3">
            <Truck className="w-3.5 h-3.5" />
            <span>Pan-India Logistics &amp; Transport Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-[#FFFDF9] tracking-tight">
            Direct Truck Delivery to Any City in India
          </h2>
          <p className="text-base text-[#D6C7BA] mt-3 leading-relaxed">
            Loaded directly from our Kanyakumari factory gate in 52kg - 56kg manual gunny bales with verified transit documentation and tracking.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {routes.map((rt) => (
            <div
              key={rt.region}
              className="bg-[#140A06] border border-[#C58940]/30 rounded-2xl p-6 flex flex-col justify-between hover:border-[#DF9B52] hover:shadow-xl transition-all"
            >
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#DF9B52] mb-2">
                  {rt.region}
                </div>
                <h3 className="font-serif font-bold text-lg text-white mb-2">{rt.states}</h3>
                <p className="text-xs text-[#BCAAA4] mb-4">
                  <strong className="text-white">Hubs:</strong> {rt.cities}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-[#34D399] font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Transit: {rt.transit}</span>
                </div>
                <span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded font-mono">
                  Direct Truck
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA Box */}
        <div className="bg-gradient-to-r from-[#2C1810] via-[#3D2318] to-[#2C1810] border-2 border-[#C58940]/40 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Need Transport Freight Rates for Your Pin Code?
            </h3>
            <p className="text-xs sm:text-sm text-[#EADBC8]">
              Contact our logistics desk for live truckload availability, Lorry Receipt (LR) tracking, and GST invoicing.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link href="/contact" className="btn-pill-caramel text-xs sm:text-sm">
              <span>Check Freight &amp; Delivery Terms</span>
              <span className="arrow-disc">→</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
