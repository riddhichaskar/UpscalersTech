"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ChevronDown, Sun, Moon, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "Digital Engineering", href: "/services/digital-engineering" },
  { name: "Cloud & Platform Engineering", href: "/services/cloud-platform" },
  { name: "Data & Analytics", href: "/services/data-analytics" },
  { name: "AI & Machine Learning", href: "/services/ai-machine-learning" },
  { name: "Automation & Workflows", href: "/services/automation-workflows" },
  { name: "Salesforce Services", href: "/services/salesforce" },
];

const courses = [
  { name: "Foundations of AI", href: "/courses/aiml" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <nav className="fixed top-0 w-full h-20 z-[100] border-b border-transparent" />;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-500 
        bg-white/80 dark:bg-[#0b0e17]/70 backdrop-blur-xl border-b border-slate-200 dark:border-white/10">
        
        {/* LOGO */}
        <Link 
          href="/" 
          className="text-xl font-extrabold tracking-tighter text-slate-900 dark:text-white transition-colors"
        >
          UPSCALERS
        </Link>

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden lg:flex gap-8 text-sm font-semibold text-slate-600 dark:text-gray-300">
          <li className="group relative py-2 cursor-pointer transition-colors hover:text-[#6c7cff] dark:hover:text-white">
            <div className="flex items-center gap-1">
              Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </div>
            <ul className="absolute left-0 mt-4 hidden w-72 origin-top-left rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0f1220] p-2 shadow-2xl group-hover:block">
              {services.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="block rounded-lg px-4 py-3 text-slate-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-[#6c7cff] transition-all">{s.name}</Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="group relative py-2 cursor-pointer transition-colors hover:text-[#6c7cff] dark:hover:text-white">
            <div className="flex items-center gap-1">
              Courses <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </div>
            <ul className="absolute left-0 mt-4 hidden w-56 origin-top-left rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0f1220] p-2 shadow-2xl group-hover:block">
              {courses.map((c) => (
                <li key={c.name}>
                  <Link href={c.href} className="block rounded-lg px-4 py-3 text-slate-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-[#6c7cff] transition-all">{c.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="py-2 hover:text-[#6c7cff] dark:hover:text-white cursor-pointer transition-colors"><Link href="/aboutus">About Us</Link></li>
        </ul>

        {/* ACTIONS */}
        <div className="flex items-center gap-3 md:gap-5">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 md:p-2.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:ring-2 ring-[#6c7cff] transition-all"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link href="/talk-to-expert" className="hidden sm:block">
            <button className="rounded-full bg-slate-900 dark:bg-gradient-to-r dark:from-[#6c7cff] dark:to-[#8fa4ff] px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-105">
              Talk to an Expert
            </button>
          </Link>

          {/* MOBILE TOGGLE */}
          <button 
            className="lg:hidden p-2 text-slate-900 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] lg:hidden bg-white dark:bg-[#0b0e17] pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-xl font-bold">
              
              {/* Mobile Services */}
              <div>
                <button 
                  onClick={() => setActiveMobileSub(activeMobileSub === 'services' ? null : 'services')}
                  className="flex items-center justify-between w-full py-2 border-b border-slate-100 dark:border-white/5"
                >
                  Services <ChevronDown size={20} className={activeMobileSub === 'services' ? "rotate-180 transition-transform" : ""} />
                </button>
                <AnimatePresence>
                  {activeMobileSub === 'services' && (
                    <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-4 mt-2 space-y-4 overflow-hidden">
                      {services.map(s => (
                        <li key={s.name}><Link onClick={() => setIsOpen(false)} href={s.href} className="text-base font-medium text-slate-500 dark:text-gray-400">{s.name}</Link></li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Courses */}
              <div>
                <button 
                  onClick={() => setActiveMobileSub(activeMobileSub === 'courses' ? null : 'courses')}
                  className="flex items-center justify-between w-full py-2 border-b border-slate-100 dark:border-white/5"
                >
                  Courses <ChevronDown size={20} className={activeMobileSub === 'courses' ? "rotate-180 transition-transform" : ""} />
                </button>
                <AnimatePresence>
                  {activeMobileSub === 'courses' && (
                    <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-4 mt-2 space-y-4 overflow-hidden">
                      {courses.map(c => (
                        <li key={c.name}><Link onClick={() => setIsOpen(false)} href={c.href} className="text-base font-medium text-slate-500 dark:text-gray-400">{c.name}</Link></li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/aboutus" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-100 dark:border-white/5">About us</Link>
              <Link href="/talk-to-expert" onClick={() => setIsOpen(false)} className="py-2 text-[#6c7cff]">Talk to an Expert</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}