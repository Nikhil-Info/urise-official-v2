"use client";

import { motion } from "framer-motion";
import { Triangle, Zap, Hexagon, Box, Aperture } from "lucide-react";

const brands = [
  { name: "Vector", icon: Triangle, dy: 18 },
  { name: "Bolt", icon: Zap, dy: 6 },
  { name: "Hex", icon: Hexagon, dy: 0 },
  { name: "Cube", icon: Box, dy: 6 },
  { name: "Aperture", icon: Aperture, dy: 18 },
];

export default function TrustedByCurve() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex flex-col items-center"
    >
      <div className="flex items-end gap-10 sm:gap-14">
        {brands.map(({ name, icon: Icon, dy }) => (
          <div
            key={name}
            style={{ transform: `translateY(${dy}px)` }}
            className="grid h-9 w-9 place-items-center text-[#062018] transition-transform hover:scale-110"
          >
            <Icon
              className="h-6 w-6"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth={1.4}
              strokeLinejoin="round"
            />
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#062018]/70">
        Trusted by founders from
      </p>
    </motion.div>
  );
}
