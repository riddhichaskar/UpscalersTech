"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function GlobalFloatingObject() {
  const { scrollYProgress } = useScroll();

  /* ===============================
     POSITION – CURVED SCROLL PATH
     (mathematical curve, reliable)
  =============================== */

  // Horizontal curve (ease + overshoot)
  const x = useTransform(scrollYProgress, (v) => {
    const start = -0.5;      // center
    const end = 0.32;        // right side
    const curve = Math.sin(v * Math.PI) * 0.12;
    return `${(start + (end - start) * v + curve) * 100}vw`;
  });

  // Vertical curve
  const y = useTransform(scrollYProgress, (v) => {
    const start = -0.5;
    const end = 0.45;
    const curve = Math.sin(v * Math.PI) * -0.1;
    return `${(start + (end - start) * v + curve) * 100}vh`;
  });

  /* ===============================
     ROTATION – CONTINUOUS & HEAVY
  =============================== */

  const rotateX = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-40, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [25, 0]);

  /* ===============================
     DEPTH
  =============================== */

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.65]);

  /* ===============================
     COLOR SHIFT (DARK ON WHITE)
  =============================== */

  const borderColor = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    ["rgba(108,124,255,0.35)", "rgba(15,23,42,0.5)", "rgba(15,23,42,0.6)"]
  );

  const glowOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.25]);

  return (
    <motion.div
      style={{
        x,
        y,
        scale,
        rotateX,
        rotateY,
        rotateZ,
        perspective: 1400,
      }}
      className="fixed top-1/2 left-1/2 z-30 pointer-events-none"
    >
      {/* CORE OBJECT */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Outer Ring */}
        <motion.div
          style={{ borderColor, opacity: glowOpacity }}
          className="absolute inset-0 rounded-full border-2"
        />

        {/* Inner Square */}
        <motion.div
          style={{ borderColor }}
          className="absolute w-40 h-40 border rotate-45"
        />

        {/* Center Core */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute w-3 h-3 rounded-full bg-slate-900"
        />
      </div>
    </motion.div>
  );
}
