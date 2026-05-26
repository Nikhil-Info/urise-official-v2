"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const PATHS_LEFT = [
  "M0 120 H 140 L 180 80 H 260",
  "M0 180 H 80 L 110 210 H 220",
  "M0 260 H 200 L 230 230 H 320",
  "M0 360 H 100 L 140 400 H 240",
  "M0 460 H 160 L 200 420 H 280",
  "M0 560 H 90 L 130 600 H 230",
  "M0 660 H 200 L 240 620 H 340",
];
const PATHS_RIGHT = [
  "M1440 120 H 1300 L 1260 80 H 1180",
  "M1440 200 H 1340 L 1300 240 H 1200",
  "M1440 300 H 1280 L 1240 270 H 1160",
  "M1440 420 H 1320 L 1280 460 H 1200",
  "M1440 520 H 1280 L 1240 480 H 1160",
  "M1440 620 H 1320 L 1280 660 H 1200",
];
// Center patterns kept to top/bottom bands so they don't fight the headline text
const PATHS_CENTER = [
  // Top band
  "M260 80 H 380 L 420 60 H 540",
  "M540 60 H 660 L 700 100 H 820",
  "M820 100 H 940 L 980 70 H 1100",
  "M340 140 H 460 L 500 170 H 600",
  "M880 170 H 980 L 1020 140 H 1140",
  "M600 80 V 160 H 700",
  "M780 160 H 880 V 80",
  // Bottom band
  "M260 720 H 380 L 420 700 H 540",
  "M540 700 H 660 L 700 740 H 820",
  "M820 740 H 940 L 980 710 H 1100",
  "M340 660 H 460 L 500 690 H 600",
  "M880 690 H 980 L 1020 660 H 1140",
  "M600 720 V 640 H 700",
  "M780 640 H 880 V 720",
];
const NODES: [number, number][] = [
  [140, 120], [180, 80], [110, 210], [200, 260], [140, 400], [200, 460],
  [130, 600], [240, 620], [1300, 120], [1260, 80], [1340, 200], [1280, 300],
  [1320, 420], [1280, 520], [1320, 620],
  // Center top
  [380, 80], [420, 60], [540, 60], [660, 60], [700, 100], [820, 100],
  [940, 100], [980, 70], [1100, 70], [460, 140], [500, 170], [600, 170],
  [880, 170], [980, 170], [1020, 140], [1140, 140],
  [600, 80], [700, 160], [880, 160], [780, 80],
  // Center bottom
  [380, 720], [540, 700], [660, 700], [820, 740], [940, 740], [1100, 710],
  [600, 720], [700, 640], [880, 640], [780, 720],
];
const CHIPS: [number, number][] = [
  [60, 320], [280, 180], [60, 520], [1340, 160], [1190, 360], [1340, 560],
  // Center
  [480, 90], [720, 130], [960, 90], [480, 690], [720, 690], [960, 730],
];
const GLOW_DOTS: [number, number][] = [
  [180, 80], [1260, 80], [200, 260], [1280, 300], [240, 620], [1280, 520],
  // Center
  [600, 80], [880, 80], [600, 720], [880, 720], [720, 130], [720, 690],
];

function CircuitSvg({
  lineStroke,
  lineWidth,
  nodeFill,
  chipFill,
  chipStroke,
  dotColor,
  dotOpacity,
  className,
  style,
}: {
  lineStroke: string;
  lineWidth: number;
  nodeFill: string;
  chipFill: string;
  chipStroke: string;
  dotColor: string;
  dotOpacity?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className ?? ""}`}
      style={style}
      viewBox="0 0 1440 800"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id={`dot-${dotColor.replace(/[^a-z0-9]/gi, "")}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={dotColor} stopOpacity={dotOpacity ?? 0.9} />
          <stop offset="100%" stopColor={dotColor} stopOpacity="0" />
        </radialGradient>
      </defs>
      <g stroke={lineStroke} strokeWidth={lineWidth} fill="none" strokeLinecap="round">
        {PATHS_LEFT.map((d) => (
          <path key={d} d={d} />
        ))}
        {PATHS_RIGHT.map((d) => (
          <path key={d} d={d} />
        ))}
        {PATHS_CENTER.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill={nodeFill}>
        {NODES.map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x - 4} y={y - 4} width={8} height={8} rx={1.5} />
        ))}
      </g>
      <g fill={chipFill} stroke={chipStroke} strokeWidth={0.8}>
        {CHIPS.map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width={22} height={14} rx={2} />
        ))}
      </g>
      <g>
        {GLOW_DOTS.map(([x, y]) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={14}
            fill={`url(#dot-${dotColor.replace(/[^a-z0-9]/gi, "")})`}
          />
        ))}
      </g>
    </svg>
  );
}

export default function CircuitBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  // Cursor-driven mask for the bright SVG overlay
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);
  const sx = useSpring(mx, { damping: 25, stiffness: 140, mass: 0.5 });
  const sy = useSpring(my, { damping: 25, stiffness: 140, mass: 0.5 });
  const mask = useTransform(
    [sx, sy],
    ([x, y]) =>
      `radial-gradient(260px circle at ${x}px ${y}px, black 0%, rgba(0,0,0,0.6) 35%, transparent 70%)`
  );

  useEffect(() => {
    const node = ref.current?.parentElement; // the Hero <section>
    if (!node) return;
    const onMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      mx.set(e.clientX - rect.left);
      my.set(e.clientY - rect.top);
    };
    const onLeave = () => {
      mx.set(-9999);
      my.set(-9999);
    };
    node.addEventListener("mousemove", onMove);
    node.addEventListener("mouseleave", onLeave);
    return () => {
      node.removeEventListener("mousemove", onMove);
      node.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        {/* Base — dim circuit */}
        <CircuitSvg
          lineStroke="#9CC4E4"
          lineWidth={1.2}
          nodeFill="#BFD7EC"
          chipFill="#cfe2f3"
          chipStroke="#9CC4E4"
          dotColor="#7FB2DA"
          dotOpacity={0.55}
          style={{ opacity: 0.7 }}
        />

        {/* Bright overlay — masked to follow cursor */}
        <motion.div
          className="absolute inset-0"
          style={{
            WebkitMaskImage: mask,
            maskImage: mask,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        >
          <CircuitSvg
            lineStroke="#3b82f6"
            lineWidth={1.6}
            nodeFill="#60a5fa"
            chipFill="#dbeafe"
            chipStroke="#3b82f6"
            dotColor="#60a5fa"
            dotOpacity={1}
          />
        </motion.div>
      </motion.div>

      <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.55),transparent_70%)] blur-2xl" />

      {/* Bottom fade — wipes circuit lines under the trusted-by band */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(to_top,#e8f3fb_0%,rgba(232,243,251,0.92)_55%,rgba(232,243,251,0)_100%)]" />
    </div>
  );
}
