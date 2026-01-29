import Navbar from "./components/Navbar"; // Ensure the path is correct
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import WhyUpscalerSection from "./components/WhyUpscalerSection";
import ServicesSection from "./components/ServicesSection";
import CTASection from "./components/CTASection";
import CourseSection from "./components/CourseSection";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <TechnologySection />
      <WhyUpscalerSection />
      <ServicesSection />
      <CourseSection />
      <CTASection />
    </main>
  );
}