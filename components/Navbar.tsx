"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "Home", href: "#" },
  { label: "Launches", href: "#launches" },
  { label: "Pricing", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [active, setActive] = useState("Home");

  // Smooth shrink on scroll: width contracts, padding tightens, bg gets denser.
  const maxWidth = useTransform(scrollY, [0, 220], ["72rem", "48rem"]);
  const paddingY = useTransform(scrollY, [0, 220], [14, 8]);
  const paddingX = useTransform(scrollY, [0, 220], [22, 14]);
  const bgAlpha = useTransform(scrollY, [0, 220], [0.7, 0.92]);
  const navBg = useTransform(bgAlpha, (a) => `rgba(255,255,255,${a})`);
  const shadow = useTransform(
    scrollY,
    [0, 220],
    [
      "0 4px 20px -8px rgba(4,60,40,0.08)",
      "0 14px 40px -14px rgba(4,60,40,0.22)",
    ]
  );
  const topOffset = useTransform(scrollY, [0, 220], [22, 14]);

  return (
    <motion.header
      style={{ paddingTop: topOffset }}
      className="fixed top-0 left-0 right-0 z-50 px-4"
    >
      <motion.nav
        style={{
          maxWidth,
          paddingTop: paddingY,
          paddingBottom: paddingY,
          paddingLeft: paddingX,
          paddingRight: paddingX,
          background: navBg,
          boxShadow: shadow,
        }}
        className="relative mx-auto flex items-center justify-between rounded-full backdrop-blur-xl ring-1 ring-emerald-900/5"
      >
        {/* subtle gradient hairline border */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.6), rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(16,185,129,0.22))",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />

        {/* Brand */}
        <a href="#" className="relative flex items-center gap-2.5 pl-1">
          <span className="relative grid h-8 w-8 place-items-center">
            <span className="absolute inset-0 rounded-lg bg-linear-to-br from-emerald-400/35 to-transparent blur-md" />
            <Image
              src="/logo.png"
              alt="URise logo"
              width={36}
              height={36}
              priority
              className="relative h-8 w-8 object-contain"
            />
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-[#062018]">
            URise
          </span>
        </a>

        {/* Links with sliding active indicator */}
        <ul className="relative hidden items-center gap-1 text-sm font-medium text-[#4b6b5c] md:flex">
          {links.map((link) => {
            const isActive = active === link.label;
            return (
              <li key={link.label} className="relative">
                <a
                  href={link.href}
                  onMouseEnter={() => setActive(link.label)}
                  className={`relative z-10 inline-block rounded-full px-3.5 py-1.5 transition-colors ${
                    isActive ? "text-[#062018]" : "hover:text-[#062018]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 -z-10 rounded-full bg-emerald-900/[0.07]"
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="#launches"
          className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-[0_6px_20px_-8px_rgba(5,150,105,0.6)] transition hover:bg-emerald-700"
        >
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
          <span className="relative">Join URise</span>
          <ArrowUpRight className="relative h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </motion.nav>
    </motion.header>
  );
}
