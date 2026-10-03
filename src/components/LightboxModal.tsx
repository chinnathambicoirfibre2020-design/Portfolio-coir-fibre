'use client';

import React, { useEffect } from 'react';
import { useLightbox } from '@/context/LightboxContext';
import { X } from 'lucide-react';
import Image from 'next/image';

export default function LightboxModal() {
  const { isOpen, imageSrc, caption, closeLightbox } = useLightbox();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeLightbox]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
      onClick={closeLightbox}
    >
      <button
        onClick={closeLightbox}
        aria-label="Close modal"
        className="absolute top-6 right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 hover:scale-110"
      >
        <X className="h-6 w-6" />
      </button>

      <div
        className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-neutral-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-auto max-h-[80vh] w-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={caption || 'CCF Factory Photo'}
            className="max-h-[80vh] w-auto object-contain"
          />
        </div>
        {caption && (
          <div className="border-t border-white/10 bg-neutral-950/80 px-6 py-4 text-center">
            <p className="text-sm font-semibold text-amber-200/90">{caption}</p>
            <p className="text-xs text-neutral-400 mt-0.5">CCF Kanyakumari Direct Production Stock</p>
          </div>
        )}
      </div>
    </div>
  );
}
