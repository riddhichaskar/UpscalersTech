"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { BarChart3, Database, PieChart, LineChart, ArrowRight, Table2, Search, Activity, Globe, ShieldCheck } from "lucide-react";
import { useRef } from "react";

// Explicitly typed Variants
const textVariant: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] as const 
    } 
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

export default function DataAnalyticsPage() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yCircle = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#f8fafc] dark:bg-[#06080f] text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden">
      
      {/* ================= BACKGROUND DECOR ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[5%] left-[-2%] text-[18vw] font-black text-slate-200 dark:text-white/[0.02] select-none leading-none uppercase tracking-tighter">
          Data
        </div>
        <motion.div 
          style={{ y: yCircle }}
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-[-5%] w-[300px] h-[300px] md:w-[650px] md:h-[650px] border border-emerald-500/10 rounded-[5rem] flex items-center justify-center rotate-12"
        >
            <div className="w-[200px] h-[200px] md:w-[450px] md:h-[450px] border border-emerald-500/5 rounded-[3rem]" />
        </motion.div>
      </div>

      {/* ================= HERO: TEXT REVEAL ================= */}
      <div className="relative mx-auto max-w-7xl px-6 pt-32 md:pt-56 pb-20 md:pb-32">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          <div className="flex-[1.5] overflow-hidden">
            <motion.div initial="hidden" animate="visible" className="flex items-center gap-3 mb-6 md:mb-8">
               <motion.div initial={{ width: 0 }} animate={{ width: 48 }} transition={{ duration: 1 }} className="h-[1px] bg-emerald-500" />
               <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-emerald-500">Analytics // Alpha-03</span>
            </motion.div>
            
            <div className="overflow-hidden">
                <motion.h1 variants={textVariant} initial="hidden" animate="visible" className="text-5xl md:text-9xl font-bold tracking-tighter leading-[0.8] mb-4 md:mb-6">
                Decision 
                </motion.h1>
            </div>
            <div className="overflow-hidden">
                <motion.h1 variants={textVariant} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="text-5xl md:text-9xl font-bold tracking-tighter leading-[0.8] text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
                Intelligence.
                </motion.h1>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex-1 mt-0 md:mt-20 border-l border-emerald-500/30 pl-6 md:pl-8 space-y-4 md:space-y-6"
          >
            <p className="text-base md:text-lg text-slate-500 dark:text-gray-400 leading-relaxed font-medium">
              We turn raw streams into competitive advantages. Specialized in real-time pipelines and predictive modelling that drives measurable ROI.
            </p>
            <div className="flex items-center gap-4 text-emerald-500 font-mono text-xs md:text-sm">
              <Activity size={16} className="animate-pulse" />
              <span>Pipeline Health: 99.9%</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= ASYMMETRIC GRID ================= */}
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <motion.div 
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="col-span-1 md:col-span-5 relative group"
          >
            <div className="relative bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-3xl shadow-2xl overflow-hidden">
              <Table2 className="text-emerald-500 mb-8 md:mb-10 w-10 h-10 md:w-12 md:h-12" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 tracking-tight">Strategy</h2>
              <div className="space-y-4 md:space-y-6">
                {["Real-time ETL Pipelines", "Data Warehouse Modernization", "Custom BI Dashboards", "Behavioral Segmentation"].map((text, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-white/5">
                    <span className="text-sm md:text-base text-slate-600 dark:text-gray-300">{text}</span>
                    <ArrowRight size={14} className="text-emerald-500" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="col-span-1 md:col-span-7 md:pl-16 flex flex-col justify-center">
            <motion.div 
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
                From Data Lakes to <br />
                <span className="text-emerald-500 font-serif italic">Actionable Truths.</span>
              </h3>
              <p className="text-base md:text-xl text-slate-500 dark:text-gray-400 mb-6 md:mb-10 leading-relaxed">
                Static reports are history. We engineer dynamic data ecosystems using Snowflake and Databricks that allow every department to query the future, not just audit the past.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= BENTO BOX ================= */}
      
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-24">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6"
        >
          <motion.div variants={cardVariant} className="md:col-span-2 md:row-span-2 rounded-[2rem] md:rounded-[2.5rem] bg-slate-900 dark:bg-white p-8 md:p-12 text-white dark:text-slate-900 flex flex-col justify-end min-h-[350px] md:min-h-[450px] relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                <BarChart3 className="w-20 h-20 md:w-32 md:h-32" />
            </div>
            <h4 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tighter uppercase">Predictive <br className="hidden md:block" /> Edge.</h4>
            <p className="opacity-70 text-base md:text-lg leading-relaxed">Anticipate market shifts with 94% precision using our custom time-series forecasting engines.</p>
          </motion.div>

          <motion.div variants={cardVariant} className="rounded-[1.5rem] md:rounded-[2rem] bg-emerald-500/10 border border-emerald-500/20 p-8 md:p-10 flex flex-col justify-between">
            <Database className="text-emerald-500" size={32} />
            <h5 className="font-bold text-lg md:text-xl mt-4">Data Sourcing</h5>
          </motion.div>

          <motion.div variants={cardVariant} className="rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 dark:border-white/10 p-8 md:p-10 flex flex-col justify-between backdrop-blur-sm">
            <PieChart className="text-slate-400" size={32} />
            <h5 className="font-bold text-lg md:text-xl mt-4">Visual Logic</h5>
          </motion.div>

          <motion.div variants={cardVariant} className="md:col-span-2 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-emerald-600 to-teal-700 p-8 md:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 shadow-lg">
            <div className="space-y-1">
               <span className="text-2xl md:text-3xl font-bold tracking-tight">Need a Data Audit?</span>
               <p className="text-sm opacity-80">Identify leakage and optimize your storage costs.</p>
            </div>
            <button className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <ArrowRight size={24} />
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="py-20 text-center text-slate-300 dark:text-white/5 font-bold tracking-[1em] uppercase select-none">
        UpScalers Insights
      </div>
    </section>
  );
}