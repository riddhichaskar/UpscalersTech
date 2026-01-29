"use client";

import { motion } from "framer-motion";
import AvatarShowcase from "./AvatarShowcase";
import dynamic from "next/dynamic";

// Dynamically import the 3D component to prevent SSR issues
const CubeFloor3D = dynamic(() => import("./CubeFloor3D"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative min-h-screen pb-40 overflow-hidden bg-gradient-to-b from-[#0b0e17] via-[#0f1220] to-black text-white">
      
      {/* ================= HERO CONTENT ================= 
          Note: pt-32 ensures the content starts below the fixed Navbar 
      */}
      <div className="relative z-20 mx-auto pt-32 md:pt-48 max-w-5xl text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
        >
          Welcome to{" "}
          <span className="relative inline-block text-[#6c7cff]">
            UpScalers Technology
            <span className="absolute inset-0 -z-10 rounded-md border border-[#6c7cff]/40" />
          </span>
          <br />
          <span className="text-white/90">Scaling Businesses Through Smart Technology</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-8 text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          We help organizations design, build, and optimize digital systems using
          cloud, data, automation, and AI—so they can grow faster, operate
          smarter, and stay future-ready.
        </motion.p>

        {/* MAIN CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <button className="group relative rounded-full bg-gradient-to-r from-[#6c7cff] to-[#8fa4ff] px-10 py-4 text-sm font-bold shadow-xl transition-all hover:scale-105 hover:shadow-[#6c7cff]/20">
            Talk to an Expert
          </button>
        </motion.div>
      </div>

      {/* ================= VISUAL SHOWCASE ================= */}
      <div className="relative z-20 mt-12">
        <AvatarShowcase />
      </div>

      {/* ================= FLOATING UI CARDS ================= */}
      {/* Left Card */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute left-6 md:left-14 bottom-44 z-30 hidden sm:block rounded-xl bg-white/5 px-5 py-4 backdrop-blur-md border border-white/10 shadow-2xl"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">Capabilities</p>
        <p className="text-sm mt-1 text-white">Cloud • Data • AI</p>
        <div className="mt-3 h-1.5 w-28 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
      </motion.div>

      {/* Right Card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute right-6 md:right-16 bottom-52 z-30 hidden sm:block rounded-xl bg-white/5 px-5 py-4 backdrop-blur-md border border-white/10 shadow-2xl"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-purple-400">Digital Engineering</p>
        <p className="mt-1 text-xs text-gray-300 max-w-[160px] leading-snug">
          Scalable, secure, and future-ready digital systems.
        </p>
      </motion.div>

      {/* ================= 3D ANIMATED FLOOR ================= */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <CubeFloor3D />
      </div>

      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6c7cff]/10 blur-[120px] rounded-full -z-10" />
    </section>
  );
}