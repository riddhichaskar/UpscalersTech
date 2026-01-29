"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Cloud,
  BarChart3,
  Cpu,
  Workflow,
  Layers,
  Database,
  ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    title: "Digital Engineering",
    subtitle: "High-velocity product development using modern React and Node.js architectures.",
    icon: Layers,
    color: "text-blue-600",
    border: "group-hover:border-blue-500/50",
    href: "/services/digital-engineering",
    span: "md:col-span-2", // Larger card
  },
  {
    title: "AI & Machine Learning",
    subtitle: "Inference engines and RAG orchestration for enterprise scale.",
    icon: Cpu,
    color: "text-indigo-600",
    border: "group-hover:border-indigo-500/50",
    href: "/services/ai-machine-learning",
  },
  {
    title: "Cloud & Platform",
    subtitle: "Kubernetes, serverless, and automated CI/CD infrastructure.",
    icon: Cloud,
    color: "text-cyan-600",
    border: "group-hover:border-cyan-500/50",
    href: "/services/cloud-platform",
  },
  {
    title: "Data & Analytics",
    subtitle: "Transforming raw streams into actionable decision intelligence.",
    icon: BarChart3,
    color: "text-emerald-600",
    border: "group-hover:border-emerald-500/50",
    href: "/services/data-analytics",
    span: "md:col-span-2", // Larger card
  },
  {
    title: "Automation",
    subtitle: "Frictionless event-driven workflows and RPA solutions.",
    icon: Workflow,
    color: "text-orange-600",
    border: "group-hover:border-orange-500/50",
    href: "/services/automation-workflows",
  },
  {
    title: "Salesforce CRM",
    subtitle: "High-octane implementations for the modern customer lifecycle.",
    icon: Database,
    color: "text-red-600",
    border: "group-hover:border-red-500/50",
    href: "/services/salesforce",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-32 font-sans">
      {/* ================= BACKGROUND SYSTEM ================= */}
      {/* Refined Dot Matrix Pattern */}
      <div className="absolute inset-0 z-0 opacity-40" 
        style={{ backgroundImage: `radial-gradient(#e5e7eb 1px, transparent 1px)`, backgroundSize: '32px 32px' }} 
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
              Capability Matrix
            </span>
            <h2 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
              Engineering <br />
              <span className="text-slate-400 font-serif italic font-normal">Beyond the Template.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-xs text-sm text-slate-500 leading-relaxed border-l-2 border-slate-100 pl-6"
          >
            We don't just deliver features; we architect scalable ecosystems that evolve with your market.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[320px]">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-50/50 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 ${service.span || ""} ${service.border}`}
              >
                {/* 1. Subtle Engineering Grid Overlay (Reveals on Hover) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundImage: `linear-gradient(#6c7cff 1px, transparent 1px), linear-gradient(90deg, #6c7cff 1px, transparent 1px)`, backgroundSize: '20px 20px' }}
                />

                {/* 2. Top Navigation Element */}
                <div className="flex justify-between items-start mb-12">
                  <div className={`p-4 rounded-2xl bg-white shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${service.color}`}>
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <Link href={service.href}>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 p-2 bg-slate-900 rounded-full text-white">
                      <ArrowUpRight size={20} />
                    </div>
                  </Link>
                </div>

                {/* 3. Text Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[280px]">
                    {service.subtitle}
                  </p>
                </div>

                {/* 4. Bottom Line Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-current transition-all duration-700 group-hover:w-full opacity-20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}