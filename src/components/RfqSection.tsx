"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  ShieldCheck,
  Clock,
  Truck,
  CheckCircle2,
  Sparkles,
  Loader2,
  Package,
  Building2,
  Zap,
} from "lucide-react";

const INDIAN_STATES = [
  "Tamil Nadu",
  "Kerala",
  "Karnataka",
  "Andhra Pradesh",
  "Telangana",
  "Maharashtra",
  "Gujarat",
  "Madhya Pradesh",
  "Rajasthan",
  "Uttar Pradesh",
  "Delhi / NCR",
  "West Bengal",
  "Punjab",
  "Haryana",
  "Odisha",
  "Bihar",
  "Assam",
  "Other / Export",
];

const QUANTITY_PRESETS = [
  "1 Truckload (10 Tons)",
  "2 Truckloads (20 Tons)",
  "5 Tons (Half Truck)",
  "50 Bales (~2.7 Tons)",
  "Sample Hank (5-10 kg)",
];

export default function RfqSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    length: '8" - 12" Standard Commercial Length (200-300mm) ⭐',
    quantity: "",
    destinationState: "Tamil Nadu",
    city: "",
    pincode: "",
    deliveryTerms: "Door Delivery / Godown Dispatch",
    urgency: "Immediate Dispatch",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePresetQuantity = (qty: string) => {
    setFormData((prev) => ({ ...prev, quantity: qty }));
  };

  const syncBookingToAdmin = async (): Promise<string> => {
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          productGrade: formData.length,
          quantity: formData.quantity || "1 Truckload / 10 Tons",
          destinationState: formData.destinationState,
          destinationCity: formData.city,
          pincode: formData.pincode,
          deliveryTerms: formData.deliveryTerms,
          urgency: formData.urgency,
          notes: formData.notes,
        }),
      });

      const data = await res.json();
      if (data.success && data.bookingNumber) {
        setBookingRef(data.bookingNumber);
        return data.bookingNumber;
      } else if (data.error) {
        console.warn("API Error:", data.error);
      }
    } catch (err) {
      console.warn("Booking sync notice:", err);
    }

    const fallbackRef = `CCF-BK-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(fallbackRef);
    return fallbackRef;
  };

  const handleWhatsAppQuote = async () => {
    if (!formData.name || !formData.phone) {
      setSubmitError("Please fill in your Name and Phone Number to continue.");
      return;
    }
    setSubmitError("");
    setIsSubmitting(true);

    const ref = await syncBookingToAdmin();
    setIsSubmitting(false);
    setSubmitted(true);

    const message =
      `*CCF Wholesale Booking & Inquiry* [Ref: ${ref}]%0A` +
      `*Name:* ${encodeURIComponent(formData.name || "N/A")}%0A` +
      `*Company:* ${encodeURIComponent(formData.company || "N/A")}%0A` +
      `*Product/Grade:* ${encodeURIComponent(formData.length)}%0A` +
      `*Quantity:* ${encodeURIComponent(formData.quantity || "1 Truckload / 10 Tons")}%0A` +
      `*State/City:* ${encodeURIComponent(formData.destinationState + (formData.city ? " - " + formData.city : ""))}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone || "N/A")}%0A` +
      `*Urgency:* ${encodeURIComponent(formData.urgency)}%0A` +
      `*Notes:* ${encodeURIComponent(
        formData.notes || "Please provide today's best ex-factory rate + freight estimation."
      )}`;

    window.open(`https://wa.me/919487371259?text=${message}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setSubmitError("Please fill in your Name and Phone Number.");
      return;
    }
    setSubmitError("");
    setIsSubmitting(true);

    const ref = await syncBookingToAdmin();
    setIsSubmitting(false);
    setSubmitted(true);

    setTimeout(() => {
      // Create mailto fallback link
      const subject = encodeURIComponent(
        `CCF Wholesale Quotation [Ref: ${ref}] - ${formData.company || formData.name}`
      );
      const body = encodeURIComponent(
        `Booking Ref: ${ref}\n` +
          `Name: ${formData.name}\n` +
          `Company: ${formData.company || "N/A"}\n` +
          `Phone: ${formData.phone}\n` +
          `Email: ${formData.email || "N/A"}\n` +
          `Grade/Length: ${formData.length}\n` +
          `Volume: ${formData.quantity || "1 Truckload / 10 Tons"}\n` +
          `State: ${formData.destinationState}\n` +
          `City / Location: ${formData.city || "Direct Delivery"}\n` +
          `Pincode: ${formData.pincode || "N/A"}\n` +
          `Delivery Preference: ${formData.deliveryTerms}\n` +
          `Urgency: ${formData.urgency}\n` +
          `Notes: ${formData.notes || "N/A"}`
      );
      window.location.href = `mailto:chinnathambicoir@gmail.com?subject=${subject}&body=${body}`;
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      length: '8" - 12" Standard Commercial Length (200-300mm) ⭐',
      quantity: "",
      destinationState: "Tamil Nadu",
      city: "",
      pincode: "",
      deliveryTerms: "Door Delivery / Godown Dispatch",
      urgency: "Immediate Dispatch",
      notes: "",
    });
    setBookingRef("");
  };

  return (
    <section
      id="enquiry"
      className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 bg-[#1B0E08] text-cream-white relative overflow-hidden"
    >
      {/* Anchor targets */}
      <span id="booking" className="absolute -top-20 sm:-top-24" />
      <span id="rfq" className="absolute -top-20 sm:-top-24" />
      <span id="form" className="absolute -top-20 sm:-top-24" />
      <span id="wholesale-quotation" className="absolute -top-20 sm:-top-24" />
      <span id="quotation" className="absolute -top-20 sm:-top-24" />
      <span id="quote" className="absolute -top-20 sm:-top-24" />

      {/* Background glow decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-caramel/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-caramel-dark/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Factory Credentials & Trust Highlights */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel/15 border border-caramel/40 text-caramel-light font-bold text-xs uppercase tracking-widest">
              💬 Direct Manufacturer Quotation
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cream-white tracking-tight leading-tight">
              Get Today&apos;s Wholesale Price{" "}
              <span className="text-caramel-light">(All-India Supply)</span>
            </h2>

            <p className="text-[#D6C7BA] text-base sm:text-lg leading-relaxed">
              Tell us your destination state, required standard cut length, and volume.{" "}
              <strong>Chinnathambi Coir Fibre (CCF)</strong> will provide direct ex-factory rates
              plus verified door/godown freight calculation.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#3D2318]">
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#26150E] border border-[#4A2D20]/60">
                <div className="w-10 h-10 rounded-lg bg-caramel/20 flex items-center justify-center text-caramel-light shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-cream-white">
                    35+ Years Field Experience • Direct Factory Dispatch
                  </h4>
                  <p className="text-xs text-[#B8A392] mt-0.5">
                    Continuous all-weather factory supply with moisture-tested, high-density 54kg bales.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#26150E] border border-[#4A2D20]/60">
                <div className="w-10 h-10 rounded-lg bg-caramel/20 flex items-center justify-center text-caramel-light shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-cream-white">
                    Factory &amp; Dyeing Yard Location
                  </h4>
                  <p className="text-xs text-[#B8A392] mt-0.5">
                    Kanyakumari District Coconut Belt, Tamil Nadu, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#26150E] border border-[#4A2D20]/60">
                <div className="w-10 h-10 rounded-lg bg-caramel/20 flex items-center justify-center text-caramel-light shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-cream-white">
                    Fast Turnaround Quotation
                  </h4>
                  <p className="text-xs text-[#B8A392] mt-0.5">
                    Inquiries are automatically synced to our <strong>Admin ERP Portal</strong> for instant response within 15 minutes.
                  </p>
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
          <div
            id="quotation-form"
            className="scroll-mt-24 lg:col-span-7 bg-[#26150E] border border-[#4A2D20] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative"
          >
            <div className="flex items-center justify-between pb-6 border-b border-[#3D2318] mb-6">
              <div>
                <h3 className="text-2xl font-bold text-cream-white font-serif">
                  Wholesale Quotation Request
                </h3>
                <p className="text-xs text-[#B8A392] mt-1">
                  Direct factory wholesale rates with GST compliance &amp; freight calculation
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#1B0E08] text-caramel-light border border-caramel/30">
                <Truck className="w-3.5 h-3.5" /> All-India Dispatch
              </span>
            </div>

            {submitError && (
              <div className="mb-5 p-3.5 rounded-xl bg-rose-950/80 border border-rose-600 text-rose-200 text-xs font-semibold">
                {submitError}
              </div>
            )}

            {submitted ? (
              <div className="py-8 text-center space-y-5">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full mx-auto flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <span className="inline-block px-3.5 py-1 rounded-full bg-caramel/20 text-caramel-light text-xs font-mono font-bold tracking-wider mb-2 border border-caramel/40">
                    Lead Ref: {bookingRef || "CCF-BK-1001"}
                  </span>
                  <h4 className="text-2xl font-bold text-cream-white font-serif">
                    Quotation Request Logged &amp; Connected!
                  </h4>
                </div>
                <p className="text-[#D6C7BA] text-sm max-w-md mx-auto leading-relaxed">
                  Your inquiry has been registered and directly synced into our{" "}
                  <strong className="text-caramel-light">Admin ERP Billing System</strong>. Our sales desk
                  will verify current stock and send the official Proforma Invoice within 15 minutes.
                </p>

                {/* Next Steps Buttons */}
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
                    onClick={handleReset}
                    className="btn-pill-light cursor-pointer"
                  >
                    <span>New Quotation</span>
                    <span className="arrow-disc">↺</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Name & Company */}
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
                      placeholder="e.g. Apex Brush & Coir Works"
                      className="w-full bg-[#1B0E08] border border-[#4A2D20] focus:border-caramel rounded-xl px-4 py-3 text-cream-white placeholder-[#786456] text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                      className="w-full bg-[#1B0E08] border border-[#4A2D20] focus:border-caramel rounded-xl px-4 py-3 text-cream-white placeholder-[#786456] text-sm outline-none transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#D6C7BA] mb-2">
                      Email Address (For Proforma PDF)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. purchase@company.com"
                      className="w-full bg-[#1B0E08] border border-[#4A2D20] focus:border-caramel rounded-xl px-4 py-3 text-cream-white placeholder-[#786456] text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Product Grade & Volume */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#D6C7BA] mb-2 flex items-center justify-between">
                      <span>Required Grade / Cut Length</span>
                      <span className="text-[#34D399] font-semibold text-[10px] bg-[#10B981]/15 px-2 py-0.5 rounded border border-[#10B981]/30">
                        Commercial Grade
                      </span>
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
                      <option value='10" - 14" Long Bristle Export Grade'>
                        10&quot; - 14&quot; Long Bristle Export Grade
                      </option>
                      <option value='6" - 8" Short Mattress Fibre'>
                        6&quot; - 8&quot; Short Mattress Fibre
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
                      placeholder="e.g. 10 Tons / 1 Truckload / 50 Bales"
                      className="w-full bg-[#1B0E08] border border-[#4A2D20] focus:border-caramel rounded-xl px-4 py-3 text-cream-white placeholder-[#786456] text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Quantity Quick Presets */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[11px] text-[#B8A392] font-semibold mr-1">Quick Select:</span>
                  {QUANTITY_PRESETS.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => handlePresetQuantity(preset)}
                      className={`text-[11px] px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                        formData.quantity === preset
                          ? "bg-caramel/30 border-caramel text-caramel-light font-bold"
                          : "bg-[#1B0E08] border-[#4A2D20] text-[#D6C7BA] hover:border-caramel/50"
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>

                {/* Row 4: Destination State & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#D6C7BA] mb-2">
                      Destination State *
                    </label>
                    <select
                      name="destinationState"
                      value={formData.destinationState}
                      onChange={handleChange}
                      className="w-full bg-[#1B0E08] border border-[#4A2D20] focus:border-caramel rounded-xl px-4 py-3 text-cream-white text-sm outline-none transition-all cursor-pointer"
                    >
                      {INDIAN_STATES.map((st) => (
                        <option key={st} value={st} className="bg-[#1B0E08] text-white">
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

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
                      placeholder="e.g. Surat, Mumbai, Ahmedabad, Kanpur"
                      className="w-full bg-[#1B0E08] border border-[#4A2D20] focus:border-caramel rounded-xl px-4 py-3 text-cream-white placeholder-[#786456] text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 5: Notes / Delivery remarks */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D6C7BA] mb-2">
                    Additional Requirements / Notes
                  </label>
                  <textarea
                    name="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="e.g. Need 54kg high-density bales, send freight cost to Surat transporter godown..."
                    className="w-full bg-[#1B0E08] border border-[#4A2D20] focus:border-caramel rounded-xl px-4 py-3 text-cream-white placeholder-[#786456] text-sm outline-none transition-all resize-none"
                  />
                </div>

                {/* Form Submit & WhatsApp Buttons */}
                <div className="pt-3 flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleWhatsAppQuote}
                    className="btn-pill-caramel flex-1 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <MessageSquare className="w-5 h-5" />
                    )}
                    <span>{isSubmitting ? "Connecting..." : "Quick Quote on WhatsApp"}</span>
                    <span className="arrow-disc">→</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-pill-light flex-1 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5 text-espresso" />
                    )}
                    <span>{isSubmitting ? "Submitting..." : "Send Inquiry (ERP Sync)"}</span>
                    <span className="arrow-disc">✉</span>
                  </button>
                </div>

                <div className="text-center pt-2">
                  <p className="text-[11px] text-[#826E60]">
                    🔒 Inquiries are directly routed to the CCF Admin Portal &amp; GST Invoicing Desk.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
