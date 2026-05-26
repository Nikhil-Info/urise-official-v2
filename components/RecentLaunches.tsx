"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Calendar,
  ChevronUp,
  Filter,
  MessageCircle,
  Search,
  TrendingUp,
} from "lucide-react";
import { useRef } from "react";

const products = [
  {
    name: "FlowZen",
    tagline: "Smart calendar for focused work.",
    category: "Productivity",
    votes: 432,
    comments: 28,
    gradient: "from-indigo-400 to-purple-500",
    initials: "FZ",
  },
  {
    name: "Taskly",
    tagline: "AI assistant that runs your to-do list.",
    category: "AI",
    votes: 612,
    comments: 41,
    gradient: "from-rose-400 to-pink-500",
    initials: "TS",
    badge: "Featured",
  },
  {
    name: "Shoply",
    tagline: "One-tap stores for indie creators.",
    category: "E-commerce",
    votes: 521,
    comments: 19,
    gradient: "from-amber-400 to-orange-500",
    initials: "SP",
  },
  {
    name: "Playflow",
    tagline: "Game-like onboarding for SaaS.",
    category: "DevTools",
    votes: 487,
    comments: 33,
    gradient: "from-emerald-400 to-teal-500",
    initials: "PF",
  },
  {
    name: "Lumen AI",
    tagline: "Turn raw notes into polished docs.",
    category: "AI",
    votes: 398,
    comments: 22,
    gradient: "from-sky-400 to-blue-500",
    initials: "LA",
  },
  {
    name: "Brewly",
    tagline: "Subscription engine for tiny brands.",
    category: "SaaS",
    votes: 354,
    comments: 17,
    gradient: "from-fuchsia-400 to-purple-500",
    initials: "BR",
    badge: "New",
  },
];

export default function RecentLaunches() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section
      id="launches"
      ref={ref}
      className="section-lift relative isolate overflow-hidden bg-white py-24"
    >
      <motion.div
        style={{ y: blobY }}
        className="pointer-events-none absolute top-24 -left-32 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 text-white shadow-[0_8px_20px_-6px_rgba(15,30,60,0.3)]">
                  <TrendingUp className="h-4 w-4" />
                </span>
                <h2 className="text-2xl font-semibold tracking-tight text-[#0a1027] sm:text-3xl">
                  Recent Launches
                </h2>
              </div>
              <button className="grid h-9 w-9 place-items-center rounded-xl bg-[#f3f6fb] ring-1 ring-black/[0.04] text-[#4b5563] shadow-sm transition hover:text-[#0a1027]">
                <Filter className="h-4 w-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#f3f6fb] px-3 py-1.5 text-xs font-semibold text-[#0a1027] ring-1 ring-black/[0.04] shadow-sm"
            >
              <Calendar className="h-3.5 w-3.5 text-sky-600" />
              Today
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {products.slice(0, 4).map((p, i) => (
                <ProductCard key={p.name} product={p} index={i} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="mt-10 mb-5 inline-flex items-center gap-2 rounded-full bg-[#f3f6fb] px-3 py-1.5 text-xs font-semibold text-[#0a1027] ring-1 ring-black/[0.04] shadow-sm"
            >
              <Calendar className="h-3.5 w-3.5 text-sky-600" />
              Yesterday
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {products.slice(4).map((p, i) => (
                <ProductCard key={p.name} product={p} index={i + 4} />
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <SidebarSearch />
            <VisitorsCard />
            <RisingNowCard />
          </aside>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative flex items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-black/[0.05] shadow-[0_10px_30px_-20px_rgba(15,30,60,0.2)] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(15,30,60,0.25)]"
    >
      <div
        className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${product.gradient} text-base font-bold text-white shadow-[0_8px_20px_-8px_rgba(15,30,60,0.3)]`}
      >
        {product.initials}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-base font-semibold text-[#0a1027]">
            {product.name}
          </h3>
          {product.badge && (
            <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-semibold text-sky-700">
              {product.badge}
            </span>
          )}
        </div>
        <p className="truncate text-xs text-[#4b5563]">{product.tagline}</p>
        <div className="mt-1.5 flex items-center gap-3 text-[10px] text-[#6b7280]">
          <span className="rounded-md bg-sky-50 px-1.5 py-0.5 font-semibold text-sky-700">
            {product.category}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="h-3 w-3" />
            {product.comments}
          </span>
        </div>
      </div>
      <button className="flex shrink-0 flex-col items-center rounded-xl bg-[#f3f6fb] px-3 py-2 ring-1 ring-black/[0.04] transition group-hover:bg-sky-50">
        <ChevronUp className="h-4 w-4 text-[#0a1027] transition group-hover:-translate-y-0.5" />
        <span className="text-xs font-bold text-[#0a1027]">{product.votes}</span>
      </button>
    </motion.article>
  );
}

function SidebarSearch() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2.5 ring-1 ring-black/[0.05] shadow-sm"
    >
      <Search className="h-4 w-4 text-[#9ca3af]" />
      <input
        placeholder="Search URise..."
        className="flex-1 bg-transparent text-sm text-[#0b1220] placeholder:text-[#9ca3af] focus:outline-none"
      />
    </motion.div>
  );
}

function VisitorsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="rounded-2xl bg-white p-4 ring-1 ring-black/[0.05] shadow-sm"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#6b7280]">
          <TrendingUp className="h-3 w-3 text-emerald-500" />
          Visitors
        </div>
        <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">
          DR 1
        </span>
      </div>
      <div className="flex items-end justify-between gap-2">
        <div>
          <div className="text-2xl font-bold text-[#0a1027]">1,248</div>
          <div className="text-[10px] text-[#6b7280]">last 24h • +18%</div>
        </div>
        <svg viewBox="0 0 100 32" className="h-10 w-24" fill="none" aria-hidden>
          <defs>
            <linearGradient id="spark2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 22 L12 18 L24 24 L36 14 L48 18 L60 8 L72 14 L84 6 L100 10 L100 32 L0 32 Z"
            fill="url(#spark2)"
          />
          <path
            d="M0 22 L12 18 L24 24 L36 14 L48 18 L60 8 L72 14 L84 6 L100 10"
            stroke="#0ea5e9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.div>
  );
}

function RisingNowCard() {
  const items = [
    { name: "Lumen AI", change: "+128%" },
    { name: "Brewly", change: "+92%" },
    { name: "Shoply", change: "+74%" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-2xl bg-white p-4 ring-1 ring-black/[0.05] shadow-sm"
    >
      <div className="mb-3 flex items-center gap-1.5 text-xs font-bold text-[#0a1027]">
        <span className="grid h-5 w-5 place-items-center rounded-md bg-gradient-to-br from-sky-400 to-sky-600 text-white">
          <TrendingUp className="h-3 w-3" />
        </span>
        Rising Now
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li
            key={item.name}
            className="flex items-center justify-between text-xs"
          >
            <span className="flex items-center gap-2 text-[#0b1220]">
              <span className="text-[10px] font-bold text-[#9ca3af]">
                {i + 1}.
              </span>
              {item.name}
            </span>
            <span className="text-[10px] font-bold text-emerald-600">
              {item.change}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
