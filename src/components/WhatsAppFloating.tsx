'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloating() {
  const whatsappUrl =
    'https://wa.me/919994348574?text=Hello%20CCF%20Team%2C%20I%20am%20interested%20in%20Dyed%20Black%20Bristle%20Coir%20Fibre%20(52-56kg%20bales).%20Please%20share%20wholesale%20rates%20and%20delivery%20terms.';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with CCF Sales Desk"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-all hover:bg-[#20bd5a] hover:scale-105 hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)]"
    >
      <MessageCircle className="h-5 w-5 fill-white text-white" />
      <span>WhatsApp Order</span>
    </a>
  );
}
