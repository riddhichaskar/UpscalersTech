"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import WhyUpscalerSection from "./components/WhyUpscalerSection";
import ServicesSection from "./components/ServicesSection";
import CTASection from "./components/CTASection";
import CourseSection from "./components/CourseSection";

import { LayoutGroup } from "framer-motion";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />

      {/* Shared layout context for cross-section animation */}
        <Hero />
        <TechnologySection />
      {/* Normal sections (no shared motion needed) */}
      <WhyUpscalerSection />
      <ServicesSection />
      <CourseSection />
      <CTASection />
    </main>
  );
}
