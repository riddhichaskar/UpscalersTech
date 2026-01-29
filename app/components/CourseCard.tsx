"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CourseCardProps {
  id: string;
  title: string;
  category: string;
  stack: string[];
  description: string;
  themeColor: string;
  href: string;
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  id, title, category, stack, description, themeColor, href, index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2"
    >
      {/* 1. Header with Technical DNA */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
            {id} // {category}
          </span>
          <h3 className="mt-2 text-3xl font-black tracking-tight text-slate-900 leading-none">
            {title}
          </h3>
        </div>
        <div 
          className="rounded-2xl p-3 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
          style={{ backgroundColor: `${themeColor}15`, color: themeColor }}
        >
          {index === 0 ? <Cpu size={24} /> : <Code2 size={24} />}
        </div>
      </div>

      {/* 2. Visual "Code Laboratory" Area */}
      <div className="relative mb-8 h-48 w-full overflow-hidden rounded-3xl bg-slate-50 p-6 border border-slate-100">
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: `radial-gradient(${themeColor} 2px, transparent 2px)`, backgroundSize: '24px 24px' }} 
        />
        
        {/* Mock Code Snippet */}
        <div className="relative font-mono text-[11px] leading-relaxed text-slate-400">
          <div className="flex gap-1.5 mb-4">
             <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
             <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
             <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          </div>
          <p className="text-slate-600 font-bold">class EvolutionEngine &#123;</p>
          <p className="pl-4">static async initialize() &#123;</p>
          <p className="pl-8 text-indigo-500 animate-pulse">await load_stack("{stack[0]}");</p>
          <p className="pl-4"> &#125;</p>
          <p className="text-slate-600 font-bold">&#125;</p>
        </div>

        {/* Technical Badges */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          {stack.map((s) => (
            <span key={s} className="rounded-lg border border-slate-200 bg-white/80 backdrop-blur-md px-2.5 py-1 text-[9px] font-black text-slate-600 uppercase tracking-tighter">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* 3. Description & CTA */}
      <div className="mt-auto">
        <p className="mb-8 text-sm leading-relaxed text-slate-500 font-medium">
          {description}
        </p>
        
        <Link href={href}>
          <button className="group/btn relative flex w-full items-center justify-center overflow-hidden rounded-2xl py-4 font-black uppercase tracking-widest text-white transition-all active:scale-95"
            style={{ backgroundColor: themeColor }}
          >
            <span className="relative z-10 flex items-center gap-2 text-xs">
              View Syllabus <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-black/10 transition-transform duration-500 group-hover/btn:translate-x-0" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;