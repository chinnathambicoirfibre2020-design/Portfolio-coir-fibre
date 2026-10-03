'use client';

import React from 'react';
import { Award, Factory, PackageCheck, Truck } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      number: '35+',
      title: 'Years Field Experience',
      desc: 'Hands-On Coir Trade Expertise',
      icon: Award,
    },
    {
      number: '6 Yrs',
      title: 'Established Unit',
      desc: 'Direct Kanyakumari Processing Plant',
      icon: Factory,
    },
    {
      number: '100%',
      title: 'Manual Hand Packing',
      desc: '52-56kg Bales (No Machine Crush)',
      icon: PackageCheck,
    },
    {
      number: '28+',
      title: 'States Delivered',
      desc: 'Direct Pan-India Truck Transport',
      icon: Truck,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
      <div className="bg-[#1F110B] text-[#FFFDF9] rounded-2xl border border-[#C58940]/30 p-6 sm:p-8 shadow-[0_16px_36px_rgba(15,8,5,0.4)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className={`flex items-start gap-4 ${
                idx !== stats.length - 1 ? 'lg:border-r lg:border-white/10 lg:pr-6' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#C58940]/15 border border-[#C58940]/30 grid place-items-center flex-shrink-0 text-[#DF9B52]">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black font-serif text-[#DF9B52] leading-none mb-1">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-white leading-tight">
                  {stat.title}
                </div>
                <div className="text-xs text-[#BCAAA4] mt-0.5 leading-normal">
                  {stat.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
