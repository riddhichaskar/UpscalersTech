"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Globe, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-[#05060a] pt-32 md:pt-48 pb-20 overflow-hidden selection:bg-[#6c7cff]/30">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#6c7cff 2px, transparent 2px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT: TEXT & INFO */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="font-mono text-xs font-black uppercase tracking-[0.4em] text-[#6c7cff]">Transmission // 001</span>
              <h1 className="mt-8 text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.85]">
                Initiate <br /> <span className="text-slate-300 dark:text-white/20">Sync.</span>
              </h1>
              
              <div className="mt-20 space-y-12">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 text-[#6c7cff]"><MapPin size={24} /></div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1">HQ Command</p>
                    <p className="text-xl font-bold dark:text-white">Nashik, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 text-[#6c7cff]"><Mail size={24} /></div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1">Direct Channel</p>
                    <p className="text-xl font-bold dark:text-white">connect@upscalerstech.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 py-4 px-6 rounded-2xl bg-[#6c7cff]/5 border border-[#6c7cff]/10 w-fit">
                   <Clock size={16} className="text-[#6c7cff] animate-pulse" />
                   <span className="font-mono text-[10px] font-bold uppercase text-[#6c7cff] tracking-widest">Active Response Protocol Enabled</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }}
            className="relative bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Identity</label>
                  <input type="text" placeholder="Your Name" className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 text-sm focus:ring-2 ring-[#6c7cff]/50 outline-none dark:text-white transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Hash</label>
                  <input type="email" placeholder="email@address.com" className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 text-sm focus:ring-2 ring-[#6c7cff]/50 outline-none dark:text-white transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Transmission Subject</label>
                <input type="text" placeholder="Project Inquiry / Consultation" className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 text-sm focus:ring-2 ring-[#6c7cff]/50 outline-none dark:text-white transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Project Payload</label>
                <textarea rows={5} placeholder="Tell us about your technical goals..." className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 text-sm focus:ring-2 ring-[#6c7cff]/50 outline-none dark:text-white resize-none transition-all" />
              </div>

              <button className="group relative w-full py-5 rounded-2xl bg-[#6c7cff] text-white font-black uppercase tracking-[0.3em] text-[10px] shadow-xl shadow-[#6c7cff]/20 hover:scale-[1.02] active:scale-[0.98] transition-all overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Send Transmission <Send size={16} />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}