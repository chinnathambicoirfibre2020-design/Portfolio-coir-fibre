import React from "react";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProductShowcase from "@/components/ProductShowcase";
import AnatomySection from "@/components/AnatomySection";
import ProcessTimeline from "@/components/ProcessTimeline";
import FactoryGallery from "@/components/FactoryGallery";
import SpecificationSuite from "@/components/SpecificationSuite";
import TransportCoverage from "@/components/TransportCoverage";
import RfqSection from "@/components/RfqSection";

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
