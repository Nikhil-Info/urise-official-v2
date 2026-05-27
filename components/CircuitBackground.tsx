"use client";

import {
  motion,
  useMotionTemplate,
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
  // Extended reach into the middle band
  "M0 320 H 260 L 300 290 H 460 L 500 320 H 580",
  "M0 400 H 220 L 260 430 H 380 L 420 400 H 540",
  "M0 480 H 320 L 360 510 H 480 L 520 480 H 600",
  "M0 540 H 180 L 220 570 H 360",
];
const PATHS_RIGHT = [
  "M1440 120 H 1300 L 1260 80 H 1180",
  "M1440 200 H 1340 L 1300 240 H 1200",
  "M1440 300 H 1280 L 1240 270 H 1160",
  "M1440 420 H 1320 L 1280 460 H 1200",
  "M1440 520 H 1280 L 1240 480 H 1160",
  "M1440 620 H 1320 L 1280 660 H 1200",
  // Extended reach into the middle band
  "M1440 340 H 1180 L 1140 310 H 980 L 940 340 H 860",
  "M1440 400 H 1220 L 1180 430 H 1060 L 1020 400 H 900",
  "M1440 480 H 1120 L 1080 510 H 960 L 920 480 H 840",
  "M1440 560 H 1260 L 1220 590 H 1080",
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
  // Extended middle-band bends (left)
  [260, 320], [300, 290], [460, 290], [500, 320],
  [220, 400], [260, 430], [380, 430], [420, 400],
  [320, 480], [360, 510], [480, 510], [520, 480],
  [180, 540], [220, 570],
  // Extended middle-band bends (right)
  [1180, 340], [1140, 310], [980, 310], [940, 340],
  [1220, 400], [1180, 430], [1060, 430], [1020, 400],
  [1120, 480], [1080, 510], [960, 510], [920, 480],
  [1260, 560], [1220, 590],
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
  const y = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);
  // Squeeze pattern inward horizontally, slight vertical compression,
  // and a soft focus loss as it recedes.
  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const blurPx = useTransform(scrollYProgress, [0, 1], [0, 3]);
  const filter = useMotionTemplate`blur(${blurPx}px)`;

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
        style={{ y, opacity, scaleX, scaleY, filter }}
        className="absolute inset-0 will-change-transform"
      >
        {/* Base — dim circuit */}
        <CircuitSvg
          lineStroke="#9fd8bc"
          lineWidth={1.2}
          nodeFill="#bfe7d2"
          chipFill="#d1f0de"
          chipStroke="#9fd8bc"
          dotColor="#86d3ad"
          dotOpacity={0.55}
          style={{ opacity: 0.75 }}
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
            lineStroke="#059669"
            lineWidth={1.6}
            nodeFill="#10b981"
            chipFill="#d1fae5"
            chipStroke="#059669"
            dotColor="#10b981"
            dotOpacity={1}
          />
        </motion.div>
      </motion.div>

      <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.6),transparent_70%)] blur-2xl" />

      {/* Top fade — wipes circuit lines behind the navbar */}
      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(to_bottom,#f0fbf5_0%,rgba(240,251,245,0.9)_55%,rgba(240,251,245,0)_100%)]" />

      {/* Bottom fade — fades hero into the global section bg seamlessly */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_top,#f5fbf8_0%,rgba(245,251,248,0.95)_45%,rgba(245,251,248,0)_100%)]" />
    </div>
  );
}
