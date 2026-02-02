'use client'

import React, { Suspense, useEffect, useState } from "react";
import { SplineScene } from "@/app/components/ui/splite"
import { Spotlight } from "@/app/components/ui/spotlight"
import { motion, Variants } from "framer-motion"

function SafeSpline({ scene }: { scene: string }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  if (!isClient) return <div className="w-full h-full bg-black/20 animate-pulse rounded-3xl" />;

  return (
    <Suspense fallback={<div className="w-full h-full bg-black/20 animate-pulse rounded-3xl" />}>
      <SplineScene scene={scene} className="w-full h-full" />
    </Suspense>
  );
}

export function HeroExp() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    /* Changed h-screen to min-h-screen and added responsive padding */
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col lg:flex-row items-center pt-[80px] lg:pt-[34px]">
      
      <Spotlight className="-top-20 left-[10%] lg:-top-40" fill="white" />

      <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">

        {/* LEFT CONTENT - Reordered on mobile to appear second if preferred, or first */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center w-full lg:w-[60%] z-20 text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div variants={itemVariants} className="space-y-4">
             <span className="text-[#6c7cff] font-mono text-[10px] md:text-sm font-bold tracking-[0.3em] lg:tracking-[0.5em] uppercase block">
              Engineering.Intelligence.Studio
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black bg-clip-text text-transparent 
              bg-gradient-to-b from-neutral-50 to-neutral-500 leading-[1.1] tracking-tighter">
              UPSCALERS <br /> TECHNOLOGY
            </h1>
          </motion.div>

          <motion.p 
            variants={itemVariants} 
            className="mt-6 lg:mt-8 text-neutral-400 max-w-xl mx-auto lg:mx-0 text-sm md:text-lg lg:text-xl leading-relaxed font-light"
          >
            "Transforming <span className="text-white font-medium">Spark</span> curiosity into <span className="text-white font-medium">AI Prime</span> mastery. We build the architecture that powers the next generation of automation."
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 lg:mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 lg:gap-6">
            <button 
              onClick={scrollToServices}
              className="w-full sm:w-auto px-10 lg:px-12 py-4 lg:py-5 rounded-full bg-white text-black font-bold text-xs lg:text-base hover:bg-[#6c7cff] hover:text-white transition-all duration-300 active:scale-95"
            >
              Get Started
            </button>
            
            <button 
              className="w-full sm:w-auto px-10 lg:px-12 py-4 lg:py-5 rounded-full border border-neutral-700 text-neutral-200 font-bold text-xs lg:text-base hover:bg-white/5 transition-all duration-300 active:scale-95"
            >
              Talk to Expert
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT 3D - Moved to top on mobile for visual impact */}
        <div className="relative w-full lg:w-[40%] h-[300px] md:h-[400px] lg:h-[600px] order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="absolute inset-0 scale-[1.1] md:scale-[1.3] lg:scale-[1.5] lg:translate-x-20">
            <SafeSpline scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
          </div>
        </div>

      </div>
    </section>
  )
}