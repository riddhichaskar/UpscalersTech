"use client";

import { motion } from "framer-motion";
import { 
  Cpu, 
  Code2, 
  Lightbulb, 
  ShieldCheck, 
  Zap, 
  Target, 
  ArrowRight,
  Binary,
  Globe,
  Users
} from "lucide-react";

const TRACKS = [
  { id: "01", name: "Spark", audience: "Grades 1-4", focus: "Creativity & AI Awareness" },
  { id: "02", name: "NextGen", audience: "Grades 5-8", focus: "Automation & Literacy" },
  { id: "03", name: "SkillEdge", audience: "Grades 9-12", focus: "Career Clarity & Fundamentals" },
  { id: "04", name: "LaunchPad", audience: "College/Freshers", focus: "Job-Ready Execution" },
  { id: "05", name: "LeadX", audience: "Professionals", focus: "Productivity & Leadership" },
  { id: "06", name: "AI Prime", audience: "Tech Pros", focus: "Build, Integrate, Deploy" },
];

export default function AboutUsPage() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-[#05060a] transition-colors duration-500 overflow-hidden">
      
      {/* ================= BACKGROUND DECOR ================= */}
      <div className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-[0.03]" 
        style={{ 
          backgroundImage: `radial-gradient(#6c7cff 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-32 md:pt-48 pb-20">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="font-mono text-xs font-black uppercase tracking-[0.4em] text-[#6c7cff]">
              Execution Studio // Mission 2026
            </span>
            <h1 className="mt-8 text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.85]">
              Turning Confusion <br /> 
              <span className="text-slate-400 font-serif italic font-normal lowercase tracking-normal">into</span> <br /> 
              Confidence.
            </h1>
            <p className="mt-10 text-xl text-slate-500 dark:text-gray-400 leading-relaxed max-w-2xl font-medium">
              Upscaler Technology is where learning meets execution. We don't just teach AI—we build the systems that drive the future. We empower people to think, build, and apply technology with purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= THE PHILOSOPHY MATRIX ================= */}
      <section className="relative z-10 py-24 bg-slate-50 dark:bg-white/5 border-y border-slate-100 dark:border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Lightbulb, title: "Purpose over Hype", desc: "We use AI where it adds real value—automation, insights, and optimization—not just because it's trending." },
              { icon: Target, title: "Execution Mindset", desc: "Moving from curiosity to industry-ready expertise. We enable people to build outcomes that last." },
              { icon: ShieldCheck, title: "Scalable Systems", desc: "Every line of code and every curriculum is designed to grow with you, from MVP to enterprise scale." }
            ].map((item, i) => (
              <div key={i} className="group">
                <item.icon className="text-[#6c7cff] mb-6 transition-transform group-hover:scale-110" size={32} />
                <h3 className="text-xl font-bold dark:text-white mb-4">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= THE LEARNING TERMINAL (Courses) ================= */}
      <section className="relative z-10 py-32 mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 sticky top-32 h-fit">
            <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">01 // Academy</span>
            <h2 className="mt-4 text-4xl font-black tracking-tight dark:text-white uppercase">The Learning <br /> Ecosystem.</h2>
            <p className="mt-6 text-slate-500 dark:text-gray-400 text-sm leading-relaxed">
              From early curiosity to job-ready mastery, our tiered tracks are designed to build technical DNA at every life stage.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {TRACKS.map((track) => (
              <div key={track.id} className="group p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:border-[#6c7cff]/30 transition-all">
                <span className="font-mono text-[10px] text-[#6c7cff] font-bold">{track.id}</span>
                <h4 className="text-xl font-bold dark:text-white mt-2 mb-1 uppercase tracking-tight">{track.name}</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{track.audience}</p>
                <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">{track.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= THE STUDIO SPEC (Services) ================= */}
      <section className="relative z-10 py-32 bg-slate-900 text-white rounded-[3rem] mx-6 mb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: `linear-gradient(#6c7cff 1px, transparent 1px), linear-gradient(90deg, #6c7cff 1px, transparent 1px)`, backgroundSize: '60px 60px' }} 
        />
        
        <div className="relative mx-auto max-w-7xl px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-[#6c7cff]">02 // Studio</span>
              <h2 className="mt-4 text-5xl font-black tracking-tighter uppercase leading-none">Building <br /> Intelligent <br /> Systems.</h2>
              <p className="mt-8 text-slate-400 text-lg max-w-md">
                We don't just deliver features. We deliver working, scalable systems for startups, institutions, and enterprises.
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                "Custom Software Platforms",
                "AI Agent Orchestration",
                "Workflow & Process Automation",
                "Data & Intelligence Solutions"
              ].map((service, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-white/10 group cursor-default">
                  <span className="text-xl font-bold group-hover:text-[#6c7cff] transition-colors">{service}</span>
                  <ArrowRight size={20} className="text-white/20 group-hover:text-[#6c7cff] group-hover:translate-x-2 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative z-10 py-40 text-center">
        <Binary className="mx-auto text-[#6c7cff] mb-8" size={48} />
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter dark:text-white uppercase mb-10">
          Ready to <br /> <span className="text-[#6c7cff]">Upscale?</span>
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="px-10 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">
            Explore Academy
          </button>
          <button className="px-10 py-4 rounded-full border border-slate-200 dark:border-white/10 dark:text-white font-black text-xs uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
            Partner with Studio
          </button>
        </div>
      </section>

      {/* Decorative Branding Line */}
      <div className="py-12 text-center opacity-20 select-none">
        <p className="font-mono text-[9px] uppercase tracking-[1.5em] dark:text-white">Upscaler Technology // Nashik // Global</p>
      </div>
    </main>
  );
}