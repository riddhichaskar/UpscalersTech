"use client";

import { motion } from "framer-motion";
import { Shield, Target, Cpu, Zap, Activity, Binary, Terminal } from "lucide-react";

const FEATURES = [
  {
    id: "architecture",
    title: "Scalable & Secure Architectures",
    tag: "SYS-INFRA",
    icon: Shield,
    description: "Future-ready systems designed for operational excellence and high-concurrency environments.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "business",
    title: "Outcome-Driven Strategy",
    tag: "STRAT-OPS",
    icon: Target,
    description: "Technology decisions aligned with measurable impact. We bridge the gap between code and ROI.",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: "digital",
    title: "Tailored Digital Engineering",
    tag: "CORE-ENG",
    icon: Cpu,
    description: "Custom digital platforms that adapt to your specific workflows and long-term vision.",
    color: "from-emerald-500 to-teal-600",
  },
];

export default function TechnologySection() {
  return (
    <section className="relative overflow-hidden bg-[#05060a] py-32 font-sans selection:bg-[#6c7cff]/30">
      {/* 1. THE GRID SYSTEM (Pure Visual) */}
      <div className="absolute inset-0 z-0 opacity-20" 
        style={{ 
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />
      
      {/* Ambient Glows */}
      <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        {/* Header Section */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
               <span className="h-[1px] w-12 bg-[#6c7cff]" />
               <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-[#6c7cff]">System Specifications</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
              Engineering <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Intelligence.</span>
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <Binary className="text-white/10 mb-4 ml-auto" size={40} />
            <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
              Build Status: Stable<br />
              Environment: Production
            </p>
          </div>
        </div>

        {/* The Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative h-full rounded-[2.5rem] bg-[#0b0e17] border border-white/5 p-10 transition-all duration-500 hover:border-[#6c7cff]/30 hover:shadow-2xl hover:shadow-[#6c7cff]/10"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-16">
                <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[9px] font-bold text-gray-600 tracking-[0.2em]">{item.tag}</span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#6c7cff] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* Decorative Energy Line */}
              <div className={`absolute bottom-0 left-10 right-10 h-[2px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Technical Drawing Effect (Watermark) */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                <Terminal size={120} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-12">
            <div className="flex gap-8">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    <Activity size={14} className="text-blue-500" /> Latency: 14ms
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    <Zap size={14} className="text-yellow-500" /> Throughput: High
                </div>
            </div>
            <button className="group flex items-center gap-4 px-8 py-3 rounded-full bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-[#6c7cff] hover:text-white transition-all">
                Audit System <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}