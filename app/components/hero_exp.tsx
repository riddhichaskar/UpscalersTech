'use client'

import { SplineScene } from "@/app/components/ui/splite"
import { Spotlight } from "@/app/components/ui/spotlight"
import { motion, Variants } from "framer-motion"

export function HeroExp() {
  // Smooth scroll handler to navigate to ServicesSection
  const scrollToServices = () => {
    // Ensure your ServicesSection has id="services"
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
    <section className="relative w-full h-screen min-h-[800px] bg-black overflow-hidden flex items-center pt-[30px]">
      <Spotlight className="-top-40 left-[10%]" fill="white" />

      <div className="relative z-10 flex w-full max-w-[1440px] mx-auto px-10 md:px-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center w-full lg:w-[60%] z-20"
        >
          <motion.div variants={itemVariants} className="space-y-4">
             <span className="text-[#6c7cff] font-mono text-sm font-bold tracking-[0.5em] uppercase block">
              Engineering.Intelligence.Studio
            </span>
            <h1 className="text-6xl md:text-8xl font-black bg-clip-text text-transparent 
              bg-gradient-to-b from-neutral-50 to-neutral-500 leading-tight tracking-tighter">
              UPSCALERS <br /> TECHNOLOGY
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-8 text-neutral-400 max-w-xl text-lg md:text-xl leading-relaxed font-light">
            "Transforming <span className="text-white font-medium">Spark</span> curiosity into <span className="text-white font-medium">AI Prime</span> mastery. We build the architecture that powers the next generation of automation."
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-6">
            {/* CLEAN PRIMARY BUTTON */}
            <motion.button 
              onClick={scrollToServices}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(108, 124, 255, 0.4)",
                backgroundColor: "#6c7cff"
              }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 rounded-full bg-white text-black font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Get Started
            </motion.button>
            
            {/* CLEAN SECONDARY BUTTON */}
            <motion.button 
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 rounded-full border border-neutral-700 text-neutral-200 font-black text-xs uppercase tracking-widest transition-all hover:bg-white/5"
            >
              Talk to Expert
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT 3D CONTENT */}
        <div className="hidden lg:block relative w-[40%] h-[600px]">
          <div className="absolute inset-0 scale-[1.5] translate-x-20">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}