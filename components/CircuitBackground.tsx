"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CircuitBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.svg
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9CC4E4" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#BFD9EF" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="dot" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7FB2DA" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7FB2DA" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g stroke="url(#lineGrad)" strokeWidth="1.2" fill="none">
          <path d="M0 120 H 140 L 180 80 H 260" />
          <path d="M0 180 H 80 L 110 210 H 220" />
          <path d="M0 260 H 200 L 230 230 H 320" />
          <path d="M0 360 H 100 L 140 400 H 240" />
          <path d="M0 460 H 160 L 200 420 H 280" />
          <path d="M0 560 H 90 L 130 600 H 230" />
          <path d="M0 660 H 200 L 240 620 H 340" />
        </g>

        <g stroke="url(#lineGrad)" strokeWidth="1.2" fill="none">
          <path d="M1440 120 H 1300 L 1260 80 H 1180" />
          <path d="M1440 200 H 1340 L 1300 240 H 1200" />
          <path d="M1440 300 H 1280 L 1240 270 H 1160" />
          <path d="M1440 420 H 1320 L 1280 460 H 1200" />
          <path d="M1440 520 H 1280 L 1240 480 H 1160" />
          <path d="M1440 620 H 1320 L 1280 660 H 1200" />
        </g>

        <g fill="#BFD7EC">
          {[
            [140, 120],
            [180, 80],
            [110, 210],
            [200, 260],
            [140, 400],
            [200, 460],
            [130, 600],
            [240, 620],
            [1300, 120],
            [1260, 80],
            [1340, 200],
            [1280, 300],
            [1320, 420],
            [1280, 520],
            [1320, 620],
          ].map(([x, y]) => (
            <rect
              key={`${x}-${y}`}
              x={x - 4}
              y={y - 4}
              width={8}
              height={8}
              rx={1.5}
              opacity={0.55}
            />
          ))}
        </g>

        <g fill="#cfe2f3" stroke="#9CC4E4" strokeWidth="0.8">
          <rect x="60" y="320" width="22" height="14" rx="2" />
          <rect x="280" y="180" width="22" height="14" rx="2" />
          <rect x="60" y="520" width="22" height="14" rx="2" />
          <rect x="1340" y="160" width="22" height="14" rx="2" />
          <rect x="1190" y="360" width="22" height="14" rx="2" />
          <rect x="1340" y="560" width="22" height="14" rx="2" />
        </g>

        <g>
          <circle cx="180" cy="80" r="14" fill="url(#dot)" />
          <circle cx="1260" cy="80" r="14" fill="url(#dot)" />
          <circle cx="200" cy="260" r="14" fill="url(#dot)" />
          <circle cx="1280" cy="300" r="14" fill="url(#dot)" />
          <circle cx="240" cy="620" r="14" fill="url(#dot)" />
          <circle cx="1280" cy="520" r="14" fill="url(#dot)" />
        </g>
      </motion.svg>

      <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.55),transparent_70%)] blur-2xl" />
    </div>
  );
}
