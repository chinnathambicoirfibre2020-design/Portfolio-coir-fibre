'use client';

import React, { useEffect } from 'react';
import { useLightbox } from '@/context/LightboxContext';
import { X } from 'lucide-react';

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
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeLightbox]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
      onClick={closeLightbox}
    >
      <button
        onClick={closeLightbox}
        aria-label="Close modal"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white/35 hover:scale-110 active:scale-95"
      >
        <X className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <div
        className="relative max-h-[92vh] max-w-5xl overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-neutral-900 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex-1 overflow-auto flex items-center justify-center max-h-[78vh] bg-black/40">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={caption || 'CCF Factory Photo'}
            className="max-h-[75vh] w-auto max-w-full object-contain p-1"
          />
        </div>
        {caption && (
          <div className="border-t border-white/10 bg-neutral-950/90 px-4 sm:px-6 py-3 sm:py-4 text-center">
            <p className="text-xs sm:text-sm font-bold text-amber-200/95 leading-snug">{caption}</p>
            <p className="text-[10px] sm:text-xs text-neutral-400 mt-0.5">CCF Kanyakumari Direct Factory Production</p>
          </div>
        )}
      </div>
    </div>
  );
}
