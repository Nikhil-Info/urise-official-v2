"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CircuitBackground from "./CircuitBackground";
import FloatingCards from "./FloatingCards";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse position for the cursor-reactive glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 22, stiffness: 120, mass: 0.6 };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  // Soft ambient halo (large, low intensity)
  const ambient = useTransform(
    [sx, sy],
    ([x, y]) =>
      `radial-gradient(560px circle at ${x}px ${y}px, rgba(125, 180, 230, 0.35), rgba(125, 180, 230, 0.05) 40%, transparent 65%)`
  );
  // Bright core (small, high intensity) — brightens circuit beneath it
  const core = useTransform(
    [sx, sy],
    ([x, y]) =>
      `radial-gradient(180px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.55), rgba(180, 220, 245, 0.25) 35%, transparent 70%)`
  );

  // Sticky hero recede on scroll
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 600], [0, -60]);
  const contentScale = useTransform(scrollY, [0, 600], [1, 0.94]);
  const contentOpacity = useTransform(scrollY, [0, 500, 800], [1, 0.7, 0.2]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    const onEnter = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      mouseX.jump(e.clientX - rect.left);
      mouseY.jump(e.clientY - rect.top);
      setHovered(true);
    };
    const onLeave = () => setHovered(false);
    node.addEventListener("mousemove", onMove);
    node.addEventListener("mouseenter", onEnter);
    node.addEventListener("mouseleave", onLeave);
    return () => {
      node.removeEventListener("mousemove", onMove);
      node.removeEventListener("mouseenter", onEnter);
      node.removeEventListener("mouseleave", onLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={ref}
      className="circuit-bg sticky top-0 z-0 isolate overflow-hidden h-screen flex items-center justify-center"
    >
      <CircuitBackground />

      {/* Cursor-reactive ambient halo — brightens the bg around the cursor */}
      <motion.div
        aria-hidden
        style={{ background: ambient, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="pointer-events-none absolute inset-0 z-[5] transition-opacity duration-500 mix-blend-screen"
      />
      {/* Bright core spotlight — makes circuit lines pop near cursor */}
      <motion.div
        aria-hidden
        style={{ background: core, opacity: hovered ? 1 : 0 }}
        className="pointer-events-none absolute inset-0 z-[6] mix-blend-screen"
      />

      <FloatingCards />

      <motion.div
        style={{ y: contentY, scale: contentScale, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center"
      >
        {/* Top pill */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-1.5 text-xs font-medium shadow-sm ring-1 ring-black/[0.04] backdrop-blur"
        >
          <span className="text-[#0b1220]">Latest Release</span>
          <span className="h-3 w-px bg-[#cbd5e1]" />
          <span className="flex items-center gap-1 text-[#4b5563]">
            Waitlist is live
            <ArrowRight className="h-3 w-3" />
          </span>
        </motion.div>

        {/* Heading — one line */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="whitespace-nowrap text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0a1027] sm:text-6xl md:text-[4.25rem]"
        >
          The stage for what&apos;s next.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-xl text-balance text-base leading-relaxed text-[#4b5563] sm:text-lg"
        >
          Discover, launch, and grow the next generation of digital products
          with a community of early adopters.
        </motion.p>

        {/* Two CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#launches"
            className="group inline-flex items-center gap-2 rounded-2xl bg-[#0a1027] px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(15,30,60,0.5)] transition hover:bg-[#13193a]"
          >
            <Rocket className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            Launch Now
          </a>
          <a
            href="#launches"
            className="group inline-flex items-center gap-2 rounded-2xl bg-white/95 px-6 py-3.5 text-sm font-medium text-[#0a1027] ring-1 ring-black/[0.06] shadow-sm backdrop-blur transition hover:bg-white"
          >
            Explore products
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
