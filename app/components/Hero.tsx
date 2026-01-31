"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function StructuralSingularityHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Mouse Tracking for 3D Interaction
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    setIsMounted(true);
    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth);
      mouseY.set(e.clientY / innerHeight);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  // Transform values for the 3D Abstract Object
  const rotateX = useTransform(springY, [0, 1], [20, -20]);
  const rotateY = useTransform(springX, [0, 1], [-20, 20]);

  if (!isMounted) return <div className="min-h-screen bg-[#020308]" />;

  const brand = [
    { char: "U", color: "#6c7cff" },
    { char: "P", color: "#8fa4ff" },
    { char: "S", color: "#b3c2ff" },
    { char: "C", color: "#d9e0ff" },
    { char: "A", color: "#ffffff" },
    { char: "L", color: "#6c7cff" },
    { char: "E", color: "#8fa4ff" },
    { char: "R", color: "#b3c2ff" },
    { char: "S", color: "#d9e0ff" },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#03040a] overflow-hidden flex flex-col items-center justify-center cursor-none"
    >
      {/* 1. THE GENERATIVE BACKGROUND MESH */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="h-full w-full" style={{ 
          backgroundImage: `linear-gradient(#6c7cff 0.5px, transparent 0.5px), linear-gradient(90deg, #6c7cff 0.5px, transparent 0.5px)`,
          backgroundSize: '60px 60px' 
        }} />
      </div>

      {/* 2. THE 3D ABSTRACT "LOGIC CRYSTAL" */}
      <motion.div
        style={{ rotateX, rotateY, perspective: 1000 }}
        className="absolute z-10 w-[500px] h-[500px] flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-64 h-64 border-2 border-[#6c7cff]/30 rounded-full animate-[spin_20s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#6c7cff] rounded-full blur-sm" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full blur-sm" />
        </div>
        <div className="absolute w-40 h-40 border border-white/10 rounded-lg rotate-45 animate-[spin_15s_linear_infinite_reverse]" />
      </motion.div>

      {/* 3. MULTI-COLOR KINETIC TYPOGRAPHY */}
      <div className="relative z-20 flex select-none">
        {brand.map((item, idx) => (
          <motion.span
            key={idx}
            whileHover={{ 
              y: -20, 
              color: item.color,
              filter: `drop-shadow(0 0 25px ${item.color})`
            }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="text-[12vw] font-black text-white/90 uppercase tracking-tighter leading-none px-1 transition-colors duration-300"
          >
            {item.char}
          </motion.span>
        ))}
      </div>

      {/* 4. STRATEGIC NARRATIVE */}
      <div className="relative z-20 mt-16 text-center max-w-4xl px-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.8em] text-[#6c7cff] mb-8">
            Engineering.Intelligence.Studio
          </p>
          <h2 className="text-xl md:text-2xl font-light text-slate-400 leading-relaxed italic">
            "Transforming <span className="text-white font-bold">Spark</span> curiosity into <span className="text-white font-bold">AI Prime</span> mastery. We build the architecture that powers the next generation of automation."
          </h2>
        </motion.div>
      </div>

      {/* 5. LIVE SYSTEM TELEMETRY */}
      <div className="absolute bottom-12 left-12 hidden lg:block opacity-20">
        <div className="font-mono text-[9px] text-white space-y-1 tracking-[0.4em] uppercase">
          <p>Sector: AI_Automation_Services</p>
          <p>Protocol: SkillEdge_Active</p>
        </div>
      </div>

      {/* 6. MINIMALIST KINETIC CURSOR */}
      <motion.div 
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#6c7cff]/50 pointer-events-none z-[100] flex items-center justify-center backdrop-blur-sm"
      >
        <div className="h-1 w-1 bg-white rounded-full" />
      </motion.div>
    </section>
  );
}