"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { useRef } from "react";
import CircuitBackground from "./CircuitBackground";
import FloatingCards from "./FloatingCards";
import TrustedByCurve from "./TrustedByCurve";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Unified scroll-driven recede: everything in the hero shrinks + drops + fades
  // together, then the next section glides over it.
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 80]);
  const heroScale = useTransform(scrollY, [0, 700], [1, 0.86]);
  const heroOpacity = useTransform(scrollY, [0, 400, 700], [1, 0.55, 0]);

  return (
    <section
      ref={ref}
      className="circuit-bg sticky top-0 z-0 isolate overflow-hidden h-screen flex items-center justify-center"
    >
      <CircuitBackground />

      <motion.div
        style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <FloatingCards />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
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
        </div>

        <TrustedByCurve />
      </motion.div>
    </section>
  );
}
