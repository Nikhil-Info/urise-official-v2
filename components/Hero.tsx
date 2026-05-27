"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { useRef } from "react";
import CircuitBackground from "./CircuitBackground";
import FloatingCards from "./FloatingCards";
import TrustedByCurve from "./TrustedByCurve";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Scroll-driven depth-of-field: as the user scrolls the hero, the contents
  // minimize and blur — section itself flows normally (no sticky parallax).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0.2]);
  const blurPx = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const contentFilter = useMotionTemplate`blur(${blurPx}px)`;

  return (
    <section
      ref={ref}
      className="circuit-bg relative isolate overflow-hidden min-h-screen flex items-center justify-center"
    >
      <CircuitBackground />

      <motion.div
        style={{ scale: contentScale, opacity: contentOpacity, filter: contentFilter }}
        className="absolute inset-0 flex items-center justify-center will-change-transform"
      >
        <FloatingCards />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
          {/* Top pill */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 inline-flex items-center gap-3 rounded-full bg-white/85 px-4 py-1.5 text-xs font-medium shadow-sm ring-1 ring-emerald-900/[0.06] backdrop-blur"
          >
            <span className="text-[#062018]">Latest Release</span>
            <span className="h-3 w-px bg-emerald-200" />
            <span className="flex items-center gap-1 text-[#4b6b5c]">
              Waitlist is live
              <ArrowRight className="h-3 w-3" />
            </span>
          </motion.div>

          {/* Heading — one line */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="whitespace-nowrap text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.03em] text-[#062018] sm:text-6xl md:text-[4.25rem]"
          >
            The stage for what&apos;s next.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-balance text-base leading-relaxed text-[#4b6b5c] sm:text-lg"
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
              className="group inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(5,150,105,0.55)] transition hover:bg-emerald-700"
            >
              <Rocket className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              Launch Now
            </a>
            <a
              href="#launches"
              className="group inline-flex items-center gap-2 rounded-2xl bg-white/95 px-6 py-3.5 text-sm font-medium text-[#062018] ring-1 ring-emerald-900/[0.08] shadow-sm backdrop-blur transition hover:bg-white"
            >
              Explore products
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        <TrustedByCurve />
      </motion.div>
    </section>
  );
}
