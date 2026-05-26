"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { useRef } from "react";

export default function CtaSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const cardScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-[#eaf3fb] py-28">
      <motion.div
        style={{ scale: cardScale }}
        className="relative mx-auto max-w-5xl px-6"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1027] via-[#13193a] to-[#0a1027] px-8 py-16 text-center shadow-[0_30px_60px_-20px_rgba(15,30,60,0.5)] sm:px-16 sm:py-20">
          <motion.div
            style={{ y: blobY }}
            className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-sky-400/25 blur-3xl"
          />
          <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-400/25 blur-3xl" />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
              <Rocket className="h-3.5 w-3.5" />
              Ready to rise?
            </div>

            <h2 className="text-balance text-4xl font-semibold tracking-[-0.025em] text-white sm:text-5xl md:text-6xl">
              Launch your project today.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-balance text-white/75">
              Join makers who use this platform to ship, learn, and grow.
              Your launch day is one click away.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#waitlist"
                className="group inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-medium text-[#0a1027] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition hover:bg-[#f3f6fb]"
              >
                <Rocket className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                Join waitlist
              </a>
              <a
                href="#launches"
                className="group inline-flex items-center gap-2 rounded-2xl bg-white/10 px-6 py-3.5 text-sm font-medium text-white ring-1 ring-white/25 backdrop-blur transition hover:bg-white/20"
              >
                Explore products
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-white/65">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Free to launch
              </span>
              <span className="h-3 w-px bg-white/20" />
              <span>No spam, ever</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
