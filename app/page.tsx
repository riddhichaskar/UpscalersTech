"use client";

import Navbar from "./components/Navbar";
import TechnologySection from "./components/TechnologySection";
import WhyUpscalerSection from "./components/WhyUpscalerSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection"; // NEW
import CTASection from "./components/CTASection";
import CourseSection from "./components/CourseSection";
import {HeroExp} from "./components/hero_exp";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <HeroExp />
      <TechnologySection />
      <WhyUpscalerSection />
      <ServicesSection />
      <CourseSection />
      <TeamSection /> 
      <CTASection />
    </main>
  );
}