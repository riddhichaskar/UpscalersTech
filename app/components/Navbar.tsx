"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ChevronDown, Sun, Moon, Menu, X, Home } from "lucide-react";
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <nav className="fixed top-0 w-full h-20 z-[100]" />;

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-500 
        bg-white/80 dark:bg-[#0b0e17]/70 backdrop-blur-xl border-b border-slate-200 dark:border-white/10">
        
        <div className="flex items-center gap-6">
          {/* LOGO */}
          <Link href="/" className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
            UPSCALERS<span className="text-[#6c7cff]">.</span>
          </Link>

          {/* HOME ICON */}
          <Link href="/" className="hidden md:flex p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-500 hover:text-[#6c7cff] hover:bg-[#6c7cff]/10 transition-all border border-transparent hover:border-[#6c7cff]/20">
            <Home size={18} />
          </Link>
        </div>

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
          <li className="relative">
            <button 
              onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
              className={`flex items-center gap-1 py-2 transition-colors hover:text-[#6c7cff] ${activeDropdown === 'services' ? 'text-[#6c7cff]' : ''}`}
            >
              Services <ChevronDown size={12} className={`transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === 'services' && (
                <motion.ul 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute left-0 mt-4 w-72 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0f1220] p-2 shadow-2xl"
                >
                  {services.map((s) => (
                    <li key={s.name}>
                      <Link href={s.href} onClick={() => setActiveDropdown(null)} className="block rounded-xl px-4 py-3 text-sm font-bold normal-case tracking-normal text-slate-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-[#6c7cff] transition-all">
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li className="relative">
            <button 
              onClick={() => setActiveDropdown(activeDropdown === 'courses' ? null : 'courses')}
              className={`flex items-center gap-1 py-2 transition-colors hover:text-[#6c7cff] ${activeDropdown === 'courses' ? 'text-[#6c7cff]' : ''}`}
            >
              Courses <ChevronDown size={12} className={`transition-transform ${activeDropdown === 'courses' ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === 'courses' && (
                <motion.ul 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute left-0 mt-4 w-60 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0f1220] p-2 shadow-2xl"
                >
                  {courses.map((c) => (
                    <li key={c.name}>
                      <Link href={c.href} onClick={() => setActiveDropdown(null)} className="block rounded-xl px-4 py-3 text-sm font-bold normal-case tracking-normal text-slate-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-[#6c7cff] transition-all">
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li className="py-2 hover:text-[#6c7cff] transition-colors">
            <Link href="/aboutus">About Us</Link>
          </li>
        </ul>

        {/* ACTIONS */}
        <div className="flex items-center gap-3 md:gap-5">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:border-[#6c7cff] transition-all"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link href="/contact" className="hidden sm:block">
            <button className="rounded-full bg-slate-900 dark:bg-[#6c7cff] px-8 py-2.5 text-[10px] font-black uppercase tracking-widest text-white shadow-lg transition-all hover:scale-105 active:scale-95">
              Contact Us
            </button>
          </Link>

          <button 
            className="lg:hidden p-2 text-slate-900 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 z-[90] lg:hidden bg-white dark:bg-[#0b0e17] pt-28 px-8"
          >
            <div className="flex flex-col gap-8 text-3xl font-black uppercase tracking-tighter">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-4 py-2 border-b border-slate-100 dark:border-white/5">
                <Home size={28} /> Home
              </Link>
              <Link href="/aboutus" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-100 dark:border-white/5">About Us</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="py-2 text-[#6c7cff]">Contact Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}