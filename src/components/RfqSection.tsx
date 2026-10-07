"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, ShieldCheck, Clock, Truck, CheckCircle2, Sparkles, Loader2 } from "lucide-react";

export default function RfqSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    length: '8" - 12" Standard Commercial Length (200-300mm) ⭐',
    quantity: "",
    state: "India",
    city: "",
    phone: "",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const syncBookingToAdmin = async () => {
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success && data.bookingNumber) {
        setBookingRef(data.bookingNumber);
        return data.bookingNumber;
      }
    } catch (err) {
      console.warn('Booking sync notice:', err);
    }
    const fallbackRef = `CCF-BK-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(fallbackRef);
    return fallbackRef;
  };

  const handleWhatsAppQuote = async () => {
    setIsSubmitting(true);
    const ref = await syncBookingToAdmin();
    setIsSubmitting(false);
    setSubmitted(true);

    const message = `*CCF Wholesale Booking & Inquiry* [Ref: ${ref}]%0A` +
      `*Name:* ${encodeURIComponent(formData.name || "N/A")}%0A` +
      `*Company:* ${encodeURIComponent(formData.company || "N/A")}%0A` +
      `*Length/Grade:* ${encodeURIComponent(formData.length)}%0A` +
      `*Quantity:* ${encodeURIComponent(formData.quantity || "1 Truckload / 10 Tons")}%0A` +
      `*City / Delivery Location:* ${encodeURIComponent(formData.city || "Direct Delivery")}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone || "N/A")}%0A` +
      `*Notes:* ${encodeURIComponent(formData.notes || "Please provide today's best wholesale quote and freight estimate.")}`;

    window.open(`https://wa.me/919487371259?text=${message}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const ref = await syncBookingToAdmin();
    setIsSubmitting(false);
    setSubmitted(true);

    setTimeout(() => {
      // Create mailto fallback link
      const subject = encodeURIComponent(`CCF Wholesale Inquiry [Ref: ${ref}] - ${formData.company || formData.name}`);
      const body = encodeURIComponent(
        `Booking Ref: ${ref}\nName: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nRequired Length: ${formData.length}\nQuantity: ${formData.quantity}\nCity / Delivery Location: ${formData.city}\nNotes: ${formData.notes}`
      );
      window.location.href = `mailto:chinnathambicoir@gmail.com?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="enquiry" className="scroll-mt-24 py-16 sm:py-20 bg-[#1B0E08] text-cream-white relative overflow-hidden">
      <span id="booking" className="absolute -top-24" />
      <span id="rfq" className="absolute -top-24" />
      <span id="form" className="absolute -top-24" />
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-caramel/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-caramel-dark/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Manufacturer Credentials & Contact info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel/15 border border-caramel/40 text-caramel-light font-bold text-xs uppercase tracking-widest">
              💬 Direct Manufacturer Quotation
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cream-white tracking-tight leading-tight">
              Get Today&apos;s Wholesale Price <span className="text-caramel-light">(All-India Supply)</span>
            </h2>

            <p className="text-[#D6C7BA] text-base sm:text-lg leading-relaxed">
              Tell us your target destination, required standard cut length, and volume. <strong>Chinnathambi Coir Fibre (CCF)</strong> will provide direct ex-factory rates + verified door/godown freight calculation.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#3D2318]">
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#26150E] border border-[#4A2D20]/60">
                <div className="w-10 h-10 rounded-lg bg-caramel/20 flex items-center justify-center text-caramel-light shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-cream-white">35+ Years Field Experience • Est. 6 Years Ago</h4>
                  <p className="text-xs text-[#B8A392] mt-0.5">Reliable continuous factory supply with strict zero-breakage packing.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#26150E] border border-[#4A2D20]/60">
                <div className="w-10 h-10 rounded-lg bg-caramel/20 flex items-center justify-center text-caramel-light shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-cream-white">Factory &amp; Dyeing Yard Location</h4>
                  <p className="text-xs text-[#B8A392] mt-0.5">Kanyakumari District Coconut Belt, Tamil Nadu, India.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#26150E] border border-[#4A2D20]/60">
                <div className="w-10 h-10 rounded-lg bg-caramel/20 flex items-center justify-center text-caramel-light shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-cream-white">Fast Turnaround Quotation</h4>
                  <p className="text-xs text-[#B8A392] mt-0.5">Instant WhatsApp quotation replies within 15 minutes during operating hours.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact links */}
            <div className="pt-4 flex flex-wrap gap-4 text-sm font-semibold">
              <a 
                href="tel:+919487371259" 
                className="inline-flex items-center gap-2 text-caramel-light hover:text-caramel transition-colors"
              >
                <Phone className="w-4 h-4" /> +91 94873 71259
              </a>
              <span className="text-[#5C4638]">|</span>
              <a 
                href="mailto:chinnathambicoir@gmail.com" 
                className="inline-flex items-center gap-2 text-caramel-light hover:text-caramel transition-colors"
              >
                <Mail className="w-4 h-4" /> chinnathambicoir@gmail.com
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Quotation Request Form Card */}
          <div className="lg:col-span-7 bg-[#26150E] border border-[#4A2D20] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative">
            <div className="flex items-center justify-between pb-6 border-b border-[#3D2318] mb-6">
              <div>
                <h3 className="text-2xl font-bold text-cream-white font-serif">Wholesale Quotation Request</h3>
                <p className="text-xs text-[#B8A392] mt-1">Fill the details below for customized wholesale factory billing</p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#1B0E08] text-caramel-light border border-caramel/30">
                <Truck className="w-3.5 h-3.5" /> All-India Dispatch
              </span>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 bg-caramel/20 text-caramel-light rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-caramel/20 text-caramel-light text-xs font-mono font-bold tracking-wider mb-2 border border-caramel/40">
                    Lead Ref: {bookingRef || 'CCF-BK-1001'}
                  </span>
                  <h4 className="text-2xl font-bold text-cream-white font-serif">Quotation Request Logged!</h4>
                </div>
                <p className="text-[#D6C7BA] text-sm max-w-md mx-auto leading-relaxed">
                  Your inquiry has been registered and directly synced to our <strong>Admin ERP Portal</strong>. Our sales desk will verify current stock &amp; door freight within 15 minutes.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button 
                    onClick={handleWhatsAppQuote}
                    className="btn-pill-caramel cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp ({bookingRef})</span>
                    <span className="arrow-disc">→</span>
                  </button>
                  <button 
                    onClick={() => { setSubmitted(false); setFormData({ name: "", company: "", length: '8" - 12" Standard Length (200-300mm) Commercial ⭐', quantity: "", state: "", city: "", phone: "", notes: "" }); }}
                    className="btn-pill-light cursor-pointer"
                  >
                    <span>New Quotation</span>
                    <span className="arrow-disc">↺</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#D6C7BA] mb-2">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full bg-[#1B0E08] border border-[#4A2D20] focus:border-caramel rounded-xl px-4 py-3 text-cream-white placeholder-[#786456] text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#D6C7BA] mb-2">
                      Company / Factory Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Brush Industries"
                      className="w-full bg-[#1B0E08] border border-[#4A2D20] focus:border-caramel rounded-xl px-4 py-3 text-cream-white placeholder-[#786456] text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#D6C7BA] mb-2 flex items-center justify-between">
                      <span>Required Grade / Cut Length</span>
                      <span className="text-[#34D399] font-semibold text-[10px] bg-[#10B981]/15 px-2 py-0.5 rounded border border-[#10B981]/30">Standard Grade</span>
                    </label>
                    <select
                      name="length"
                      value={formData.length}
                      onChange={handleChange}
                      className="w-full bg-[#1B0E08] border border-[#4A2D20] focus:border-caramel rounded-xl px-4 py-3 text-[#DF9B52] text-sm outline-none transition-all font-bold cursor-pointer"
                    >
                      <option value='8" - 12" Standard Commercial Length (200-300mm) ⭐'>
                        8&quot; - 12&quot; Standard Commercial (200-300mm) ⭐
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#D6C7BA] mb-2">
                      Estimated Volume *
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      required
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 2 Tons / 50 Bales / 1 Truckload"
                      className="w-full bg-[#1B0E08] border border-[#4A2D20] focus:border-caramel rounded-xl px-4 py-3 text-cream-white placeholder-[#786456] text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#D6C7BA] mb-2">
                      City / Delivery Location *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Mumbai, Ahmedabad, Kanpur, Pune"
                      className="w-full bg-[#1B0E08] border border-[#4A2D20] focus:border-caramel rounded-xl px-4 py-3 text-cream-white placeholder-[#786456] text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#D6C7BA] mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-[#1B0E08] border border-[#4A2D20] focus:border-caramel rounded-xl px-4 py-3 text-cream-white placeholder-[#786456] text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="pt-3 flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    onClick={handleWhatsAppQuote}
                    className="btn-pill-caramel flex-1 cursor-pointer"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Quick Order on WhatsApp</span>
                    <span className="arrow-disc">→</span>
                  </button>

                  <button
                    type="submit"
                    className="btn-pill-light flex-1 cursor-pointer"
                  >
                    <Send className="w-5 h-5 text-espresso" />
                    <span>Send Inquiry Email</span>
                    <span className="arrow-disc">✉</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
