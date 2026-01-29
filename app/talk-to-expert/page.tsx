"use client";

import { motion } from "framer-motion";
import { 
  Send, 
  MapPin, 
  Mail, 
  MessageSquare, 
  Globe, 
  Activity, 
  Clock,
  ArrowRight
} from "lucide-react";

export default function TalkToExpertPage() {
  return (
    <main className="relative min-h-screen bg-[#f8fafc] dark:bg-[#05060a] transition-colors duration-500 overflow-hidden">
      
      {/* 1. BACKGROUND SYSTEM (Engineering Grid) */}
      <div className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(#6c7cff 1.5px, transparent 1.5px), linear-gradient(90deg, #6c7cff 1.5px, transparent 1.5px)`, 
          backgroundSize: '100px 100px' 
        }} 
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 md:pt-48 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: THE BRIEFING */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-mono text-xs font-black uppercase tracking-[0.4em] text-[#6c7cff]">
                Consultation Gateway
              </span>
              <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9]">
                Let's Build the <br /> <span className="text-slate-400 font-serif italic font-normal lowercase tracking-normal">Future.</span>
              </h1>
              
              <p className="mt-8 text-lg text-slate-500 dark:text-gray-400 leading-relaxed max-w-md">
                Skip the sales pitch. Connect directly with our engineering leads to discuss architecture, scalability, and technical strategy.
              </p>

              {/* Status Indicators */}
              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6c7cff]/10 text-[#6c7cff]">
                    <Activity size={20} className="animate-pulse" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Response Status</p>
                    <p className="text-sm font-bold dark:text-white">Active // Under 4 Hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Headquarters</p>
                    <p className="text-sm font-bold dark:text-white">Nashik, India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: THE ARCHITECTURE FORM */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-[3rem] bg-white dark:bg-[#0b0e17] border border-slate-200 dark:border-white/5 p-8 md:p-12 shadow-2xl">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 p-4 text-sm focus:outline-none focus:ring-2 ring-[#6c7cff]/50 transition-all dark:text-white" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="w-full rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 p-4 text-sm focus:outline-none focus:ring-2 ring-[#6c7cff]/50 transition-all dark:text-white" />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Project Interest</label>
                  <select className="w-full rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 p-4 text-sm focus:outline-none focus:ring-2 ring-[#6c7cff]/50 transition-all dark:text-white appearance-none">
                    <option>Digital Product Engineering</option>
                    <option>AI & Machine Learning</option>
                    <option>Cloud Infrastructure</option>
                    <option>Salesforce Strategy</option>
                  </select>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Project Brief</label>
                  <textarea rows={4} placeholder="Tell us about your technical challenges..." className="w-full rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 p-4 text-sm focus:outline-none focus:ring-2 ring-[#6c7cff]/50 transition-all dark:text-white resize-none" />
                </div>

                <div className="md:col-span-2 pt-4">
                  <button className="group relative w-full overflow-hidden rounded-2xl bg-[#6c7cff] py-5 font-black uppercase tracking-widest text-white shadow-xl shadow-[#6c7cff]/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Initialize Consultation <Send size={18} />
                    </span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                  </button>
                </div>
              </form>

              {/* Decorative Engineering Label */}
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                 <div className="bg-slate-900 text-white p-6 rounded-3xl rotate-12 shadow-2xl">
                    <Clock size={32} className="mb-4 text-[#6c7cff]" />
                    <p className="font-mono text-[9px] uppercase tracking-widest leading-tight">System UTC<br/>Ready to Sync</p>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Footer-esque Branding */}
      <div className="py-12 text-center opacity-20 pointer-events-none">
        <p className="font-mono text-[10px] uppercase tracking-[1em] dark:text-white">UpScalers Architecture // 2026</p>
      </div>
    </main>
  );
}