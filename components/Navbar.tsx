"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Command,
  Megaphone,
  Search,
  Sun,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "Home", href: "#" },
  { label: "Feed", href: "#launches" },
  { label: "Forum", href: "#" },
  { label: "Blog", href: "#" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [active, setActive] = useState("Home");

  // Smooth, subtle shrink on scroll — wider + taller baseline
  const maxWidth = useTransform(scrollY, [0, 220], ["82rem", "74rem"]);
  const paddingY = useTransform(scrollY, [0, 220], [13, 10]);
  const paddingX = useTransform(scrollY, [0, 220], [18, 14]);
  const bgAlpha = useTransform(scrollY, [0, 220], [0.78, 0.92]);
  // Emerald-tinted gradient instead of plain white
  const navBg = useTransform(
    bgAlpha,
    (a) =>
      `linear-gradient(120deg, rgba(209,250,229,${(a * 0.85).toFixed(3)}) 0%, rgba(255,255,255,${a.toFixed(3)}) 50%, rgba(187,247,208,${(a * 0.7).toFixed(3)}) 100%)`
  );
  const shadow = useTransform(
    scrollY,
    [0, 220],
    [
      "0 8px 28px -10px rgba(4,60,40,0.14)",
      "0 18px 44px -16px rgba(4,60,40,0.26)",
    ]
  );
  const topOffset = useTransform(scrollY, [0, 220], [22, 16]);

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
        className="relative mx-auto flex items-center gap-2 rounded-full backdrop-blur-xl ring-1 ring-emerald-900/5"
      >
        {/* subtle gradient hairline */}
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
        <a
          href="#"
          className="relative flex shrink-0 items-center gap-2.5 pl-2 pr-1"
        >
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

        {/* Subtle divider */}
        <span
          aria-hidden
          className="ml-1 hidden h-5 w-px bg-emerald-900/[0.08] md:block"
        />

        {/* Nav links with sliding active indicator */}
        <ul className="relative hidden items-center gap-0.5 text-sm font-medium text-[#4b6b5c] md:flex">
          {links.map((link) => {
            const isActive = active === link.label;
            return (
              <li key={link.label} className="relative">
                <a
                  href={link.href}
                  onMouseEnter={() => setActive(link.label)}
                  className={`relative z-10 inline-block rounded-full px-3 py-1.5 transition-colors ${
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

        {/* Flexible spacer */}
        <div className="flex-1" />

        {/* Search — compact chip on md, expanded on xl */}
        <button
          aria-label="Search"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#f4faf6] px-2.5 py-1.5 text-sm text-[#9ca3af] ring-1 ring-emerald-900/[0.06] transition hover:ring-emerald-200 lg:px-3.5"
        >
          <Search className="h-3.5 w-3.5 text-[#6b7280] transition group-hover:text-emerald-700" />
          <span className="hidden lg:inline">Search products, makers...</span>
          <kbd className="hidden items-center gap-0.5 rounded-md border border-emerald-900/[0.06] bg-white px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[#6b7280] lg:inline-flex">
            <Command className="h-2.5 w-2.5" />K
          </kbd>
        </button>

        {/* Advertise */}
        <a
          href="#"
          className="hidden shrink-0 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#062018] ring-1 ring-emerald-900/[0.08] shadow-sm transition hover:-translate-y-0.5 hover:ring-emerald-300/70 hover:shadow-md md:inline-flex"
        >
          <Megaphone className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.2} />
          Advertise
        </a>

        {/* Theme toggle */}
        <button
          aria-label="Toggle theme"
          className="hidden shrink-0 place-items-center rounded-full bg-white ring-1 ring-emerald-900/[0.06] shadow-sm transition hover:-translate-y-0.5 hover:ring-emerald-300/70 hover:shadow-md sm:grid"
          style={{ width: 34, height: 34 }}
        >
          <Sun className="h-4 w-4 text-[#062018]" strokeWidth={2.2} />
        </button>

        {/* Join CTA */}
        <a
          href="#launches"
          className="group relative inline-flex shrink-0 items-center gap-1.5 overflow-hidden rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-[0_6px_20px_-8px_rgba(5,150,105,0.6)] transition hover:bg-emerald-700"
        >
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
          <span className="relative hidden sm:inline">Join URise</span>
          <span className="relative sm:hidden">Join</span>
          <ArrowUpRight className="relative h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </motion.nav>
    </motion.header>
  );
}
