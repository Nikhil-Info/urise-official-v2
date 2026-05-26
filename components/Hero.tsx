"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import CircuitBackground from "./CircuitBackground";
import FloatingCards from "./FloatingCards";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");

  // Track window scroll for sticky-hero recede effect
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 600], [0, -60]);
  const contentScale = useTransform(scrollY, [0, 600], [1, 0.94]);
  const contentOpacity = useTransform(scrollY, [0, 500, 800], [1, 0.7, 0.2]);

  return (
    <section
      ref={ref}
      className="circuit-bg sticky top-0 z-0 isolate overflow-hidden h-screen flex items-center justify-center"
    >
      <CircuitBackground />
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

        {/* Email form */}
        <motion.form
          id="waitlist"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={(e) => {
            e.preventDefault();
            if (email) {
              alert(`Thanks! ${email} is on the waitlist.`);
              setEmail("");
            }
          }}
          className="mt-9 flex w-full max-w-md items-center gap-2 rounded-2xl bg-white/95 p-1.5 shadow-[0_10px_30px_-12px_rgba(15,30,60,0.18)] ring-1 ring-black/[0.04] backdrop-blur"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-transparent px-3.5 py-2.5 text-sm text-[#0b1220] placeholder:text-[#9ca3af] focus:outline-none"
            required
          />
          <button
            type="submit"
            className="group flex items-center gap-1.5 rounded-xl bg-[#0a1027] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#13193a]"
          >
            Join waitlist
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
