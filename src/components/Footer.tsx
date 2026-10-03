'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, Truck, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#140A06] text-[#E2D3C4] border-t border-[#3D2318] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2C1810]">
          
          {/* Col 1: Brand & Heritage */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl overflow-hidden bg-white p-1 border-2 border-[#DF9B52]/60 shadow-md flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/CCF.jpg"
                  alt="Chinnathambi Coir Fibre"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <span className="block font-black text-xl text-white font-serif tracking-tight">
                  CHINNATHAMBI
                </span>
                <span className="block text-[0.68rem] font-bold text-[#DF9B52] uppercase tracking-wider">
                  COIR FIBRE • 35+ YRS FIELD EXP
                </span>
              </div>
            </div>

            <p className="text-xs text-[#BCAAA4] leading-relaxed">
              Manufacturer and wholesale supplier of pure dyed black coconut bristle fibre in Kanyakumari, Tamil Nadu. Over 35 years of hands-on coir trade mastery and direct factory processing unit.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#DF9B52]">
              <ShieldCheck className="w-4 h-4" />
              <span>Est. 6 Years Ago • 100% Quality Guaranteed</span>
            </div>
          </div>

          {/* Col 2: Quick Links (Single Words Matching Navbar) */}
          <div>
            <h4 className="text-white font-serif text-sm font-bold uppercase tracking-wider mb-4 text-[#DF9B52]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C8B8AB]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/specifications" className="hover:text-white transition-colors">
                  Specifications
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Specifications & Logistics */}
          <div>
            <h4 className="text-white font-serif text-sm font-bold uppercase tracking-wider mb-4 text-[#DF9B52]">
              Core Standards
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C8B8AB]">
              <li className="flex items-center gap-1.5">
                <span className="text-[#DF9B52]">✓</span> 8&quot; to 12&quot; Standard Cut Length
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#DF9B52]">✓</span> 52kg - 56kg Manual Gunny Bales
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#DF9B52]">✓</span> No Machine Pressing (Fibre Intact)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#DF9B52]">✓</span> Under 15% Sun-Dried Moisture
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#DF9B52]">✓</span> &lt; 3% Dust &amp; Baby Hair Waste
              </li>
              <li className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#DF9B52]" /> Pan-India Direct Truck Transport
              </li>
            </ul>
          </div>

          {/* Col 4: Factory Desk Contacts */}
          <div>
            <h4 className="text-white font-serif text-sm font-bold uppercase tracking-wider mb-4 text-[#DF9B52]">
              Factory Contact
            </h4>
            <ul className="space-y-3 text-xs text-[#C8B8AB]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DF9B52] flex-shrink-0 mt-0.5" />
                <span>
                  Chinnathambi Coir Fibre, Kanyakumari District, Tamil Nadu — 629001, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DF9B52] flex-shrink-0" />
                <a href="tel:+919487371259" className="hover:text-white font-bold text-white">
                  +91 94873 71259
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DF9B52] flex-shrink-0" />
                <span>chinnathambicoir@gmail.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#DF9B52] flex-shrink-0" />
                <span>Mon – Sat: 8:00 AM – 7:00 PM IST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#826E60]">
          <p>© {new Date().getFullYear()} Chinnathambi Coir Fibre (CCF). All Rights Reserved.</p>
          <p>Direct B2B Manufacturer &amp; Wholesale Supplier of Natural Coir Fibre in India.</p>
        </div>
      </div>
    </footer>
  );
}
