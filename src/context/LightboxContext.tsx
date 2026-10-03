'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LightboxContextType {
  isOpen: boolean;
  imageSrc: string;
  caption: string;
  openLightbox: (src: string, caption?: string) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [caption, setCaption] = useState('');

  const openLightbox = (src: string, cap = 'CCF Factory Production Photo') => {
    setImageSrc(src);
    setCaption(cap);
    setIsOpen(true);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    setIsOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  };

  return (
    <LightboxContext.Provider
      value={{ isOpen, imageSrc, caption, openLightbox, closeLightbox }}
    >
      {children}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
}
