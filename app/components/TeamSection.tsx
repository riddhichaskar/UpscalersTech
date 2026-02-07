"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TEAM = [
  {
    name: "Yomi Denzel",
    role: "E-Commerce Expert",
    description: "Expert in high-ticket dropshipping with over a decade of experience in scaling digital brands to 8-figure revenues.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Elena Rodriguez",
    role: "Investment Architect",
    description: "Specializing in venture capital and strategic growth, Elena bridges the gap between raw code and market dominance.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "David Sequeira",
    role: "Lead Strategist",
    description: "A visionary in operational infrastructure, ensuring that every AI implementation scales with precision and security.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Sarah Jenkins",
    role: "Investment Innovator",
    description: "Revolutionizing how enterprise-scale automation is funded and deployed in modern software ecosystems.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-[#03040a] py-32 overflow-hidden px-6 font-sans">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Partnered with most of the <br />
            <span className="text-[#6c7cff] font-serif italic font-normal lowercase tracking-normal">
              top people in the industry
            </span>
          </motion.h2>
        </div>

        {/* Accordion Container */}
        <div className="relative flex items-center justify-center gap-6">
          <button className="hidden md:flex p-4 rounded-full border border-white/10 text-white/40 hover:text-white transition-colors bg-white/5">
            <ChevronLeft size={24} />
          </button>

          <div className="flex flex-col md:flex-row gap-4 items-center min-h-[550px] w-full max-w-7xl">
            <LayoutGroup>
              {TEAM.map((member, idx) => (
                <motion.div
                  key={member.name}
                  layout
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  className={`relative h-[550px] rounded-[2.5rem] overflow-hidden cursor-pointer bg-neutral-900 border border-white/10 shadow-2xl
                    ${hoveredIndex === idx ? 'w-full md:w-[500px]' : 'w-full md:w-[180px]'}`}
                >
                  {/* Background Image */}
                  <motion.img 
                    layout
                    src={member.image} 
                    alt={member.name}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 
                      ${hoveredIndex === idx ? 'scale-110 grayscale-0' : 'grayscale'}`}
                  />
                  
                  {/* Base Gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                  {/* High-Effect Blue Overlay (Down to Up) */}
                  <AnimatePresence>
                    {hoveredIndex === idx && (
                      <motion.div 
                        initial={{ clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 }}
                        animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
                        exit={{ clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="absolute inset-0 bg-blue-600/60 backdrop-blur-md z-20 flex flex-col justify-end p-10"
                      >
                        <motion.div
                          initial={{ y: 40, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                        >
                          <p className="text-base md:text-lg text-white font-medium leading-relaxed mb-8 italic">
                            "{member.description}"
                          </p>
                          <div className="h-[2px] w-12 bg-white mb-6" />
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Name and Role */}
                  <div className="absolute bottom-0 left-0 p-10 w-full z-30">
                    <motion.div layout transition={{ duration: 0.6 }}>
                      <h4 className="text-2xl font-bold text-white tracking-tight">{member.name}</h4>
                      <p className="text-[11px] uppercase tracking-[0.25em] text-blue-300 font-bold mt-2">
                        {member.role}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </LayoutGroup>
          </div>

          <button className="hidden md:flex p-4 rounded-full border border-white/10 text-white/40 hover:text-white transition-colors bg-white/5">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}