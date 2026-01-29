"use client";

import { motion } from "framer-motion";

export default function TryFreeToolSection() {
  return (
    <section className="relative overflow-hidden bg-[#0e0f14] py-28">
      {/* subtle background cubes / gradients later */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#2a2f45,transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-8">
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <h2 className="text-4xl font-semibold text-white">
            Use and Try Our Free{" "}
            <span className="text-[#6c7cff]">AI Video Tool</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Generate AI avatars by typing your script. Choose from 60+ stock
            avatars across industries, or create your own digital clone.
          </p>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* ================= LEFT (IMAGE PLACEHOLDER) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Placeholder frame */}
            <div className="relative h-[420px] w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              {/* inner glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />

              {/* reserved text */}
              <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500">
                Avatar / Video Preview
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT (STEPS) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            {/* Step 1 */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <p className="text-sm font-medium text-white">
                1. Pick an Avatar
              </p>

              <div className="mt-4 flex gap-4">
                <div className="h-16 w-16 rounded-lg bg-white/10" />
                <div className="h-16 w-16 rounded-lg bg-white/10" />
                <div className="h-16 w-16 rounded-lg bg-white/10" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <p className="text-sm font-medium text-white">
                2. Type Your Script in Any Language
              </p>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Generate AI avatars by typing your script. Choose from 60+ stock
                avatars across industries, or create your own digital clone.
              </p>
            </div>

            {/* CTA */}
            <button className="mt-8 w-full rounded-xl bg-[#6c7cff] py-4 text-sm font-medium text-white transition hover:opacity-90">
              Create Free AI Video
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
