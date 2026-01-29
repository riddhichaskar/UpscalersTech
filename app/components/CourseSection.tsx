"use client";

import React from 'react';
import CourseCard from './CourseCard';
import { Binary, Brackets } from 'lucide-react';

const COURSES = [
  {
    id: "TRK-01",
    title: "AI & Machine Learning",
    category: "Inference Systems",
    stack: ["PyTorch", "HuggingFace", "Python"],
    description: "Deep-dive into transformer architectures, RAG orchestration, and industrial AI deployment.",
    themeColor: "#6c7cff",
    href: "/courses/aiml"
  },
  {
    id: "TRK-02",
    title: "Fullstack Systems",
    category: "Product Architecture",
    stack: ["Next.js", "TypeScript", "Prisma"],
    description: "Build production-ready distributed systems with modern React frameworks and scalable backends.",
    themeColor: "#FBBF24",
    href: "/courses/fullstack"
  }
];

const CourseSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-32 px-6">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)`, 
          backgroundSize: '60px 60px' 
        }} 
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header with high-end typography */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-slate-900" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-slate-500">Curriculum Matrix</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.9]">
            Build Your <br /> <span className="text-slate-300">Technical DNA.</span>
          </h2>
        </div>

        {/* Grid utilizing the reusable component */}
        <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
          {COURSES.map((course, i) => (
            <CourseCard 
              key={course.id}
              {...course}
              index={i}
            />
          ))}
        </div>

        {/* Subtle Decorative Footer */}
        <div className="mt-20 flex items-center gap-4 opacity-10">
            <Binary size={20} />
            <div className="h-[1px] flex-1 bg-slate-900" />
            <Brackets size={20} />
        </div>
      </div>
    </section>
  );
};

export default CourseSection;