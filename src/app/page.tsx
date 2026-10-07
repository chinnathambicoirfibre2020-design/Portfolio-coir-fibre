import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProductShowcase from "@/components/ProductShowcase";
import AnatomySection from "@/components/AnatomySection";
import ProcessTimeline from "@/components/ProcessTimeline";
import FactoryGallery from "@/components/FactoryGallery";
import SpecificationSuite from "@/components/SpecificationSuite";
import TransportCoverage from "@/components/TransportCoverage";
import RfqSection from "@/components/RfqSection";

export const metadata: Metadata = {
  title: "Coir Fibre Manufacturer | Fabric & Fibre Product Manufacturer India | CCF",
  description: "Direct Manufacturer & Factory Processor of Dyed Black Bristle Coir Fibre in 8\"-12\" (200-300mm) Standard Commercial Length. 35+ Years Experience, 52-56kg Manual Gunny Bales, Pan-India Dispatch.",
  keywords: [
    "Manufacturer",
    "Fabric product manufacturer",
    "Fibre product manufacturer",
    "Coir fibre manufacturer",
    "Black coir fibre manufacturer",
    "Bristle fibre manufacturer India",
    "Coir manufacturer Kanyakumari",
    "Brush raw material manufacturer",
    "Broom fibre wholesale manufacturer"
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <StatsBar />
      <ProductShowcase />
      <AnatomySection />
      <ProcessTimeline />
      <FactoryGallery />
      <SpecificationSuite />
      <TransportCoverage />
      <RfqSection />
    </div>
  );
}
