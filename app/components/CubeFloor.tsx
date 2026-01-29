"use client";

export default function CubeFloor() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[45%] perspective-[1200px] overflow-hidden">
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="grid grid-cols-12 gap-[2px] transform rotate-x-[65deg] scale-125">
          {Array.from({ length: 120 }).map((_, i) => (
            <div
              key={i}
              className="h-16 w-16 bg-gradient-to-br from-[#0f1220] to-[#070910] border border-white/5 shadow-inner"
            />
          ))}
        </div>
      </div>

      {/* Depth fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
    </div>
  );
}
