"use client";

import { motion } from "framer-motion";

export default function AvatarMakerSection() {
  return (
    <section className="relative bg-[#f5f6fa] py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-8 md:grid-cols-2">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <h2 className="text-4xl font-semibold text-black">
            AI avatar maker:{" "}
            <span className="text-[#6c7cff]">Realistic avatars</span>
          </h2>

          <p className="mt-4 max-w-md text-sm text-gray-600">
            Interactive AI avatars serve as your digital personalities,
            influential in creating engaging, personalized conversations.
          </p>

          {/* Active Feature */}
          <div className="mt-10 rounded-xl bg-[#dfe4ff] p-6">
            <h4 className="text-base font-medium text-black">
              Turn any content into AI videos
            </h4>
            <p className="mt-2 text-sm text-gray-700">
              Generate AI avatars by typing your script. Choose from 60+ stock
              avatars across industries, or create your own digital clone.
            </p>
          </div>

          {/* Other Features */}
          <ul className="mt-6 space-y-4 text-sm font-medium text-gray-800">
            <li className="cursor-pointer hover:text-black">
              Scale Sales with Interactive AI Avatars
            </li>
            <li className="cursor-pointer hover:text-black">
              Offer Personalized Training & Demos
            </li>
          </ul>
        </div>

        {/* ================= RIGHT VISUAL ================= */}
        <div className="relative">
          {/* Grid background */}
          <div className="absolute inset-0 rounded-xl bg-white">
            <div
              className="h-full w-full rounded-xl"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Floating Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 p-8"
          >
            {/* Top Card */}
            <div className="mb-6 w-fit rounded-xl bg-white px-4 py-3 shadow-lg">
              <p className="text-xs font-medium text-gray-800">
                Turn any content into AI
              </p>
            </div>

            {/* Center Card */}
            <div className="mb-6 w-64 rounded-xl bg-white p-4 shadow-xl">
              <p className="text-xs font-semibold text-gray-900">
                Template
              </p>
              <div className="mt-3 h-10 rounded bg-gray-100" />
              <div className="mt-2 h-10 rounded bg-gray-100" />
            </div>

            {/* Bottom Card */}
            <div className="w-64 rounded-xl bg-white p-4 shadow-xl">
              <p className="text-xs font-semibold text-gray-900">
                AI Screen Recording
              </p>
              <div className="mt-3 h-10 rounded bg-gray-100" />
              <button className="mt-4 w-full rounded-lg bg-black py-2 text-xs text-white">
                Start Recording
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
