"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { 
  Rocket, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Briefcase, 
  Globe, 
  Trophy,
  Cpu
} from "lucide-react";
import { useRef } from "react";

const textVariant: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  visible: { transition: { staggerChildren: 0.15 } }
};

const OPEN_ROLES = [
  { title: "AI Solutions Architect", type: "Full-time", location: "Remote / Hybrid", team: "Engineering" },
  { title: "Full Stack Engineer", type: "Full-time", location: "Nashik, IN", team: "Product" },
  { title: "Data Scientist (RAG)", type: "Contract", location: "Remote", team: "AI Labs" },
  { title: "Technical Product Manager", type: "Full-time", location: "Hybrid", team: "Strategy" },
];

export default function CareerPage() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yCircle = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#f8fafc] dark:bg-[#090b14] text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden">
      
      {/* ================= BACKGROUND DECOR ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[5%] left-[-2%] text-[18vw] font-black text-slate-200 dark:text-white/[0.02] select-none leading-none uppercase">
          Talent
        </div>
        <motion.div 
          style={{ y: yCircle }}
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-[-5%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] border border-[#6c7cff]/10 rounded-full flex items-center justify-center"
        >
          <div className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] border border-[#6c7cff]/5 rounded-full" />
        </motion.div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <div className="relative mx-auto max-w-7xl px-6 pt-32 md:pt-56 pb-20">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          <div className="flex-[1.5] overflow-hidden">
            <motion.div initial="hidden" animate="visible" className="flex items-center gap-3 mb-8">
               <motion.div initial={{ width: 0 }} animate={{ width: 48 }} transition={{ duration: 1 }} className="h-[1px] bg-[#6c7cff]" />
               <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#6c7cff]">Join the Ecosystem</span>
            </motion.div>
            
            <div className="overflow-hidden">
                <motion.h1 variants={textVariant} initial="hidden" animate="visible" className="text-5xl md:text-9xl font-bold tracking-tighter leading-[0.8] mb-6">
                Engineer
                </motion.h1>
            </div>
            <div className="overflow-hidden">
                <motion.h1 variants={textVariant} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="text-5xl md:text-9xl font-bold tracking-tighter leading-[0.8] text-transparent bg-clip-text bg-gradient-to-r from-[#6c7cff] via-[#8fa4ff] to-purple-500">
                The Future.
                </motion.h1>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex-1 mt-0 md:mt-20 border-l border-[#6c7cff]/30 pl-8 space-y-6"
          >
            <p className="text-lg md:text-xl text-slate-500 dark:text-gray-400 leading-relaxed font-medium italic">
              "We aren't looking for employees. We're looking for architects of intelligence who want to break the template."
            </p>
          </motion.div>
        </div>
      </div>

      {/* ================= ASYMMETRIC GRID: OPPORTUNITIES ================= */}
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <motion.div 
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-1 md:col-span-6"
          >
            <div className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-12 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl">
              <Sparkles className="text-[#6c7cff] mb-10 w-12 h-12" />
              <h2 className="text-4xl font-bold mb-8 tracking-tight">Open Roles</h2>
              <div className="space-y-4">
                {OPEN_ROLES.map((role, i) => (
                  <div key={i} className="group flex items-center justify-between p-6 rounded-2xl border border-transparent hover:border-[#6c7cff]/30 hover:bg-[#6c7cff]/5 transition-all cursor-pointer">
                    <div>
                      <h4 className="font-bold text-lg">{role.title}</h4>
                      <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{role.team} • {role.location}</p>
                    </div>
                    <ArrowRight size={20} className="text-[#6c7cff] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
             <motion.div variants={cardVariant} initial="hidden" whileInView="visible">
                <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
                  Autonomy is <br />
                  <span className="text-[#6c7cff] font-serif italic">Our Core Protocol.</span>
                </h3>
                <p className="text-xl text-slate-500 dark:text-gray-400 mb-10 leading-relaxed">
                  We operate with high trust and low bureaucracy. You own your stack, your schedule, and your impact.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-slate-100 dark:bg-white/5 border border-transparent hover:border-[#6c7cff]/20 transition-all">
                    <Globe size={24} className="text-[#6c7cff] mb-4" />
                    <h5 className="font-bold">Global Remote</h5>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-100 dark:bg-white/5 border border-transparent hover:border-[#6c7cff]/20 transition-all">
                    <Trophy size={24} className="text-[#6c7cff] mb-4" />
                    <h5 className="font-bold">Equity Stakes</h5>
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>

      {/* ================= BENTO BOX: PERKS ================= */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 mb-20">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <motion.div variants={cardVariant} className="md:col-span-2 rounded-[2.5rem] bg-slate-900 dark:bg-white p-12 text-white dark:text-slate-900 flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
            <Rocket className="absolute top-12 right-12 w-32 h-32 opacity-10 group-hover:rotate-12 transition-transform" />
            <h4 className="text-5xl font-bold mb-6 tracking-tighter uppercase">Hyper-Growth.</h4>
            <p className="opacity-70 text-lg">Work on bleeding-edge RAG systems and autonomous agent frameworks.</p>
          </motion.div>

          <motion.div variants={cardVariant} className="rounded-[2rem] bg-[#6c7cff]/10 border border-[#6c7cff]/20 p-10 flex flex-col justify-between">
            <Users className="text-[#6c7cff]" size={32} />
            <h5 className="font-bold text-xl mt-4">Top 1% Talent Pool</h5>
          </motion.div>

          <motion.div variants={cardVariant} className="rounded-[2rem] border border-slate-200 dark:border-white/10 p-10 flex flex-col justify-between backdrop-blur-sm">
            <Briefcase className="text-slate-400" size={32} />
            <h5 className="font-bold text-xl mt-4">Work-Life Harmony</h5>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}