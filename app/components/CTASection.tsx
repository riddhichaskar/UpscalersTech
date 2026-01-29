"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0b0e17] py-32 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 items-start">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-semibold leading-tight">
              Talk to an Expert
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-gray-400">
              Let’s understand your goals and explore how technology can support
              your growth. Whether you’re planning a new initiative or improving
              existing systems, we’re here to help.
            </p>

            <div className="mt-10 space-y-4 text-sm text-gray-400">
              <p>✔ Business-first consultation</p>
              <p>✔ Practical, scalable recommendations</p>
              <p>✔ No obligation or sales pressure</p>
            </div>
          </motion.div>

          {/* ================= FORM ================= */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <div className="grid grid-cols-1 gap-6">
              {/* Name */}
              <div>
                <label className="text-sm text-gray-300">Full Name *</label>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg bg-black/40 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-[#6c7cff]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-gray-300">Work Email *</label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg bg-black/40 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-[#6c7cff]"
                />
              </div>

              {/* Company */}
              <div>
                <label className="text-sm text-gray-300">Company Name *</label>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg bg-black/40 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-[#6c7cff]"
                />
              </div>

              {/* Role */}
              <div>
                <label className="text-sm text-gray-300">
                  Role / Designation
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg bg-black/40 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-[#6c7cff]"
                />
              </div>

              {/* Requirement */}
              <div>
                <label className="text-sm text-gray-300">
                  What best describes your requirement?
                </label>
                <select className="mt-2 w-full rounded-lg bg-black/40 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-[#6c7cff]">
                  <option>New product development</option>
                  <option>Cloud / infrastructure modernization</option>
                  <option>Data, analytics, or AI initiative</option>
                  <option>Automation / workflow optimization</option>
                  <option>Ongoing engineering support</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-gray-300">
                  Tell us about your challenge or idea
                </label>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-lg bg-black/40 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-[#6c7cff]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-6 rounded-xl bg-gradient-to-r from-[#6c7cff] to-[#8fa4ff] px-6 py-3 text-sm font-medium shadow-lg hover:opacity-90"
              >
                Request a Consultation
              </button>

              <p className="text-xs text-gray-500">
                We usually respond within 1 business day.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
