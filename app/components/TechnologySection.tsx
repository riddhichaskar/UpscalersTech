"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Target, Cpu, Activity, Zap, Layers } from "lucide-react";

const FEATURES = [
  {
    id: "architecture",
    title: "Scalable & Secure Architectures",
    tag: "INFRASTRUCTURE",
    icon: Shield,
    description: "We design future-ready systems tailored to your business needs, ensuring long-term growth and operational excellence.",
    metrics: ["99.9% Uptime", "Zero-Trust Ready"],
  },
  {
    id: "business",
    title: "Business-First Technology",
    tag: "STRATEGY",
    icon: Target,
    description: "Technology decisions aligned with measurable impact. We bridge the gap between complex code and business outcomes.",
    metrics: ["Fast ROI", "Outcome Driven"],
  },
  {
    id: "digital",
    title: "Tailored Digital Solutions",
    tag: "ENGINEERING",
    icon: Cpu,
    description: "Custom digital platforms that adapt to your specific workflows, user behaviors, and long-term vision.",
    metrics: ["Custom Builds", "User Centric"],
  },
];

export default function TechnologySection() {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} className="relative bg-white py-32 overflow-hidden">
      {/* 1. The Engineering Grid Background (Non-distracting) */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#f1f5f9 1.5px, transparent 1.5px), linear-gradient(90deg, #f1f5f9 1.5px, transparent 1.5px)`, 
          backgroundSize: '80px 80px' 
        }} 
      />

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        {/* Header Section */}
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-xs font-bold tracking-[0.4em] text-[#6c7cff] uppercase"
          >
            Philosophy // Engineering
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.9]"
          >
            Technology That <br /> <span className="text-slate-300 italic font-serif font-normal lowercase tracking-normal">evolves.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* LEFT: THE ROADMAP NODES */}
          <div className="lg:col-span-7 space-y-32">
            {FEATURES.map((item, index) => (
              <FeatureNode key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* RIGHT: THE STICKY PERSPECTIVE ENGINE */}
          <div className="hidden lg:block lg:col-span-5 sticky top-40 h-fit">
             <div className="relative aspect-square w-full bg-slate-50 rounded-[3rem] border border-slate-100 overflow-hidden flex items-center justify-center p-12">
                {/* Decorative Perspective Elements */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-[0.03] scale-150"
                  style={{ backgroundImage: `radial-gradient(#6c7cff 2px, transparent 2px)`, backgroundSize: '24px 24px' }}
                />

                <motion.div 
                  className="relative z-10 flex flex-col items-center text-center"
                >
                    <Activity className="text-[#6c7cff] mb-6 opacity-20" size={80} />
                    <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest leading-relaxed">
                        System Analysis Ready<br />
                        Awaiting Scroll Interaction
                    </p>
                </motion.div>

                {/* Perspective Layers */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-64 h-64 border border-slate-200 rounded-2xl rotate-[30deg] skew-x-[-20deg] absolute translate-y-[-40px] opacity-20" />
                    <div className="w-64 h-64 border border-slate-200 rounded-2xl rotate-[30deg] skew-x-[-20deg] absolute translate-y-[0px] opacity-40" />
                    <div className="w-64 h-64 bg-[#6c7cff]/5 border border-[#6c7cff]/20 rounded-2xl rotate-[30deg] skew-x-[-20deg] absolute translate-y-[40px]" />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function FeatureNode({ item, index }: { item: any, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isInView ? 1 : 0.2 }}
      className="relative flex gap-8 md:gap-12"
    >
      {/* The Vertical Pulse Line */}
      <div className="flex flex-col items-center">
        <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-700 ${isInView ? 'bg-[#6c7cff] border-[#6c7cff] text-white' : 'bg-white border-slate-200 text-slate-300'}`}>
          <Icon size={20} />
        </div>
        {index !== 2 && <div className="w-[1.5px] flex-1 bg-slate-100 my-4" />}
      </div>

      <div className="pt-2">
        <span className="font-mono text-[10px] font-bold text-[#6c7cff] bg-[#6c7cff]/5 px-3 py-1 rounded-md uppercase tracking-widest">
          {item.tag}
        </span>
        <h3 className="mt-4 text-3xl font-bold text-slate-900 tracking-tight">
          {item.title}
        </h3>
        <p className="mt-4 text-base text-slate-500 leading-relaxed max-w-lg">
          {item.description}
        </p>

        {/* Dynamic Metric Badges */}
        <div className="mt-8 flex gap-3">
          {item.metrics.map((m: string) => (
            <div key={m} className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl">
              <Zap size={10} className="text-[#6c7cff]" />
              {m}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}