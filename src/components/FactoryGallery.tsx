'use client';

import React, { useState } from 'react';
import { useLightbox } from '@/context/LightboxContext';
import { Camera, ZoomIn } from 'lucide-react';

export default function FactoryGallery() {
  const { openLightbox } = useLightbox();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const photos = [
    {
      id: 1,
      title: 'Sun Drying Yard',
      category: 'drying',
      img: '/assets/images/Sun-Drying-img.jpg',
      caption: 'Expansive open-air sun drying floor with thousands of black dyed coir hanks in Kanyakumari',
    },
    {
      id: 2,
      title: 'Strapped Black Hanks',
      category: 'hanks',
      img: '/assets/images/Strapped-Black-img.jpg',
      caption: 'Finished black bristle hanks tightly strapped with signature blue bands',
    },
    {
      id: 3,
      title: 'Deep Black Dyed Bundles',
      category: 'drying',
      img: '/assets/images/Deep-Black-img.jpg',
      caption: 'Deep black dyed bristle coir bundles boiled in permanent hot-vat mineral dye',
    },
    {
      id: 4,
      title: 'Stitched Gunny Bales',
      category: 'bales',
      img: '/assets/images/IMG_3612.jpg',
      caption: '52kg - 56kg Stitched hessian gunny bales ready for all-India truck dispatch',
    },
    {
      id: 5,
      title: 'Sun Curing Rows',
      category: 'drying',
      img: '/assets/images/Sun-Curing-img.jpg',
      caption: 'Neat rows of hackled black bristle bundles curing under coastal sun',
    },
    {
      id: 6,
      title: 'Standard 8"-12" Length',
      category: 'hanks',
      img: '/assets/images/Standard 8-12.jpg',
      caption: 'Standard 8-12 inch combed and strapped dyed black bristle hank held in hand',
    },
    {
      id: 7,
      title: 'Factory Warehouse Stock',
      category: 'bales',
      img: '/assets/images/IMG_3618.jpg',
      caption: 'Factory storage bay packed with wholesale black fibre ready for transport',
    },
    {
      id: 8,
      title: 'Hand-Checked Standard Hanks',
      category: 'hanks',
      img: '/assets/images/Standard 8-12.jpg',
      caption: 'Quality inspected 8-12 inch black hanks ready for gunny bag packing',
    },
  ];

  const filteredPhotos =
    activeFilter === 'all'
      ? photos
      : photos.filter((p) => p.category === activeFilter);

  return (
    <section id="factory-photos" className="py-20 bg-[#FAF4EB] text-[#22130C] border-b border-[#E2D3C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#C58940]/20 border border-[#C58940] px-4 py-1.5 rounded-full text-xs font-bold text-[#A36A28] mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>100% Real Production Footage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-[#1F110B] tracking-tight">
            Our Actual Factory Production Photos
          </h2>
          <p className="text-base text-[#5C4638] mt-3">
            Click on any photo to inspect our real sun-drying yard, combed bundles, and manual hand-packed 52-56kg bales.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#2C1810] text-white shadow-md'
                  : 'bg-white text-[#5C4638] border border-[#E2D3C4] hover:bg-[#EFE4D8]'
              }`}
            >
              All Photos ({photos.length})
            </button>
            <button
              onClick={() => setActiveFilter('drying')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'drying'
                  ? 'bg-[#2C1810] text-white shadow-md'
                  : 'bg-white text-[#5C4638] border border-[#E2D3C4] hover:bg-[#EFE4D8]'
              }`}
            >
              Sun Drying Yard
            </button>
            <button
              onClick={() => setActiveFilter('hanks')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'hanks'
                  ? 'bg-[#2C1810] text-white shadow-md'
                  : 'bg-white text-[#5C4638] border border-[#E2D3C4] hover:bg-[#EFE4D8]'
              }`}
            >
              Strapped Black Hanks
            </button>
            <button
              onClick={() => setActiveFilter('bales')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'bales'
                  ? 'bg-[#2C1810] text-white shadow-md'
                  : 'bg-white text-[#5C4638] border border-[#E2D3C4] hover:bg-[#EFE4D8]'
              }`}
            >
              Packed Bales &amp; Storage
            </button>
          </div>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo.img, photo.caption)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#E2D3C4] bg-[#FCF8F4] shadow-sm hover:shadow-xl hover:border-[#C58940] transition-all"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.img}
                  alt={photo.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold font-serif leading-snug">{photo.title}</h3>
                    <span className="text-[11px] text-[#DF9B52] flex items-center gap-1">
                      <ZoomIn className="w-3 h-3" /> View Zoom
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
