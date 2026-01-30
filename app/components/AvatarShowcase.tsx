"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const CARD_W = 260;
const CARD_H = 340;

type Active = "left" | "center" | "right";

export default function AvatarShowcase() {
  const [active, setActive] = useState<Active>("center");

  const getStyle = (pos: Active) => {
    const isActive = active === pos;

    return {
      scale: isActive ? 1 : 0.9,
      filter: isActive ? "blur(0px)" : "blur(3px)",
      opacity: isActive ? 1 : 0.6,
      zIndex: isActive ? 30 : 10,
    };
  };

  return (
    <div className="relative z-20 mt-28 flex items-center justify-center">

      {/* LEFT */}
      <motion.div
        animate={{
          x: active === "left" ? 0 : -150,
          ...getStyle("left"),
        }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
        className="absolute cursor-pointer"
        onHoverStart={() => setActive("left")}
        onHoverEnd={() => setActive("center")}
      >
        <AvatarCard src="/img4.jpeg" />
      </motion.div>

      {/* CENTER */}
      <motion.div
        animate={{
          x:
            active === "left"
              ? 150
              : active === "right"
              ? -150
              : 0,
          ...getStyle("center"),
        }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
        className="relative"
      >
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#6c7cff] to-[#9b7cff] blur-2xl opacity-40" />
        <AvatarCard src="/img1.gif" main />

        <button className="absolute -bottom-7 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#6c7cff] to-[#8fa4ff] px-6 py-2 text-sm shadow-xl">
          Get started
        </button>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        animate={{
          x: active === "right" ? 0 : 150,
          ...getStyle("right"),
        }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
        className="absolute cursor-pointer"
        onHoverStart={() => setActive("right")}
        onHoverEnd={() => setActive("center")}
      >
        <AvatarCard src="/img3.jpg" />
      </motion.div>
    </div>
  );
}

/* ---------- CARD ---------- */
function AvatarCard({ src, main = false }: { src: string; main?: boolean }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-black"
      style={{
        width: main ? CARD_W + 20 : CARD_W,
        height: main ? CARD_H + 20 : CARD_H,
      }}
    >
      <Image
        src={src}
        alt="Avatar"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}