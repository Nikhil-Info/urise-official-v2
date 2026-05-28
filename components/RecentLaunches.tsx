"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  Calendar,
  ChevronUp,
  Command,
  Filter,
  Flame,
  History,
  MessageCircle,
  MessageSquare,
  Plus,
  Radar,
  Rocket,
  Search,
  Sparkles,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { useRef } from "react";

type ArchiveItem = {
  name: string;
  tagline: string;
  tags: string[];
  votes: number;
  comments: number;
  gradient: string;
  initial: string;
};

const archive: ArchiveItem[] = [
  {
    name: "SRTGen.com: AI Subtitle Generator & Auto Captions",
    tagline:
      "Generate AI Subtitles & Auto Captions in 100+ Languages — No signup needed.",
    tags: ["AI Tools", "Productivity"],
    votes: 1,
    comments: 0,
    gradient: "from-emerald-400 via-teal-400 to-emerald-600",
    initial: "S",
  },
  {
    name: "Layerize — AI Image to PSD Layers",
    tagline:
      "Split any image into depth-based layers and export as PSD. AI-powered, instant results.",
    tags: ["Design Tools", "Social Media"],
    votes: 1,
    comments: 0,
    gradient: "from-emerald-600 to-teal-700",
    initial: "L",
  },
];

const columnLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.08 },
  },
};
const columnCenter: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.07,
      delayChildren: 0.06,
    },
  },
};
const columnRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function RecentLaunches() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      id="launches"
      ref={ref}
      className="relative isolate overflow-hidden py-20 sm:py-24"
    >
      {/* Seam fades */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,var(--background)_0%,rgba(245,251,248,0.8)_55%,rgba(245,251,248,0)_100%)] z-[1]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,var(--background)_0%,rgba(245,251,248,0.8)_55%,rgba(245,251,248,0)_100%)] z-[1]" />

      <motion.div
        style={{ y: blobY }}
        className="pointer-events-none absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl"
      />
      <motion.div
        style={{ y: blob2Y }}
        className="pointer-events-none absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1480px] px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[300px_minmax(0,1fr)_320px]">
          {/* ===== LEFT COLUMN ===== */}
          <motion.aside
            variants={columnLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <VisitorsCard />
            <LiveActivitiesCard />
            <SponsorCard />
          </motion.aside>

          {/* ===== MIDDLE COLUMN ===== */}
          <motion.div
            variants={columnCenter}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            {/* Header */}
            <motion.div variants={item} className="space-y-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#4b5563]">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                    Live Feed
                    <span className="text-emerald-700/50">/</span>
                    <span className="text-emerald-700">28.05.26</span>
                  </div>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#062018] sm:text-4xl">
                    Recent Launches
                  </h2>
                  <p className="mt-2 max-w-md text-sm text-[#6b7280]">
                    The newest products from builders shipping today.
                  </p>
                </div>
                <button className="group grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white ring-1 ring-black/[0.06] text-[#4b5563] shadow-sm transition hover:text-[#062018] hover:ring-emerald-200">
                  <Filter className="h-4 w-4 transition group-hover:rotate-12" />
                </button>
              </div>

              {/* Timeline tabs */}
              <div className="flex w-full overflow-x-auto rounded-xl bg-white ring-1 ring-black/[0.05] no-scrollbar">
                {[
                  { label: "Today", icon: Flame, count: 0, active: true },
                  { label: "Yesterday", icon: Calendar, count: 0 },
                  { label: "This Week", icon: Calendar, count: 0 },
                  { label: "Archive", icon: History, count: 2 },
                ].map((c) => (
                  <button
                    key={c.label}
                    className={`group relative inline-flex flex-1 items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold transition ${
                      c.active
                        ? "text-[#062018]"
                        : "text-[#9ca3af] hover:text-[#062018]"
                    }`}
                  >
                    <c.icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                    {c.label}
                    <span
                      className={`ml-1 rounded-md px-1.5 py-0.5 font-mono text-[9px] ${
                        c.active
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-[#f4faf6] text-[#9ca3af]"
                      }`}
                    >
                      {c.count.toString().padStart(2, "0")}
                    </span>
                    {c.active && (
                      <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-emerald-500" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Today */}
            <motion.div variants={item} className="space-y-3">
              <SectionRail
                label="Today"
                icon={<Flame className="h-3.5 w-3.5" strokeWidth={2.4} />}
                accent
              />
              <EmptySlate
                copy="No products launched yet today."
                hint="Be the first to ship something today."
              />
            </motion.div>

            {/* Yesterday */}
            <motion.div variants={item} className="space-y-3">
              <SectionRail
                label="Yesterday"
                icon={<Calendar className="h-3.5 w-3.5" strokeWidth={2.2} />}
              />
              <EmptySlate copy="No products launched yesterday." />
            </motion.div>

            {/* This Week */}
            <motion.div variants={item} className="space-y-3">
              <SectionRail
                label="This Week"
                icon={<Calendar className="h-3.5 w-3.5" strokeWidth={2.2} />}
              />
              <EmptySlate copy="Earlier launches from this week show up here." />
            </motion.div>

            {/* Archive */}
            <motion.div variants={item} className="space-y-3">
              <SectionRail
                label="Archive"
                icon={<History className="h-3.5 w-3.5" strokeWidth={2.2} />}
                count={archive.length}
                action={
                  <a
                    href="#"
                    className="group inline-flex items-center gap-1 text-xs font-semibold text-[#062018] transition hover:text-emerald-700"
                  >
                    Browse all
                    <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
                  </a>
                }
              />
              <div className="space-y-2.5">
                {archive.map((a, i) => (
                  <ArchiveCard key={a.name} item={a} rank={i + 1} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ===== RIGHT COLUMN ===== */}
          <motion.aside
            variants={columnRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <SearchCard />
            <ReadyToRiseCard />
            <NextBattleCard />
            <ActiveDiscussionsCard />
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

/* ============================ PRIMITIVES ============================ */

function CardHeader({
  label,
  icon,
  meta,
}: {
  label: string;
  icon?: React.ReactNode;
  meta?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between border-b border-black/[0.05] bg-[#fbfdfc] px-4 py-2.5">
      <div className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4b5563]">
        {icon}
        {label}
      </div>
      {meta && (
        <div className="font-mono text-[10px] font-medium text-[#9ca3af]">
          {meta}
        </div>
      )}
    </div>
  );
}

function CardShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={item}
      className={`overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.06] shadow-[0_4px_18px_-12px_rgba(15,30,60,0.18)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

function SectionRail({
  label,
  icon,
  count,
  accent,
  action,
}: {
  label: string;
  icon: React.ReactNode;
  count?: number;
  accent?: boolean;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] ${
          accent
            ? "bg-[#062018] text-emerald-300"
            : "bg-white text-[#062018] ring-1 ring-black/[0.06]"
        }`}
      >
        {icon}
        {label}
      </span>
      {count !== undefined && (
        <span className="font-mono text-[10px] font-semibold text-[#9ca3af]">
          {count.toString().padStart(2, "0")} items
        </span>
      )}
      <div className="h-px flex-1 bg-gradient-to-r from-black/[0.06] to-transparent" />
      {action}
    </div>
  );
}

function EmptySlate({ copy, hint }: { copy: string; hint?: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-dashed border-black/[0.08] bg-white/40 px-4 py-5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(6,32,24,0.06) 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="relative flex items-center gap-3">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-white ring-1 ring-black/[0.06] text-[#9ca3af]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#d1d5db]" />
        </span>
        <div className="min-w-0">
          <p className="text-sm text-[#4b5563]">{copy}</p>
          {hint && (
            <p className="mt-0.5 text-xs italic text-[#9ca3af]">{hint}</p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================== CARDS ============================== */

function ArchiveCard({ item: a, rank }: { item: ArchiveItem; rank: number }) {
  return (
    <motion.article
      variants={item}
      whileHover={{ y: -1 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex items-start gap-4 overflow-hidden rounded-2xl bg-white p-4 ring-1 ring-black/[0.06] shadow-[0_4px_18px_-12px_rgba(15,30,60,0.18)] transition hover:ring-emerald-200"
    >
      {/* Vertical accent line on hover */}
      <span className="absolute inset-y-0 left-0 w-0.5 bg-emerald-500 opacity-0 transition group-hover:opacity-100" />

      <div className="relative">
        <div
          className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${a.gradient} text-xl font-bold text-white shadow-[0_8px_18px_-8px_rgba(5,150,105,0.6)]`}
        >
          {a.initial}
        </div>
        <span className="absolute -bottom-1 -left-1 grid h-4 w-4 place-items-center rounded-md bg-white font-mono text-[9px] font-bold text-[#062018] ring-1 ring-black/[0.08]">
          {rank}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm font-semibold text-[#062018] transition group-hover:text-emerald-700">
          {a.name}
        </h4>
        <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-[#6b7280]">
          {a.tagline}
        </p>
        <div className="mt-2.5 flex flex-wrap items-center gap-1">
          {a.tags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-[#f4faf6] px-1.5 py-0.5 text-[10px] font-medium text-[#4b5563] ring-1 ring-black/[0.04]"
            >
              #{t.toLowerCase().replace(/\s+/g, "")}
            </span>
          ))}
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-2">
        <button className="flex flex-col items-center rounded-lg bg-white px-2.5 py-1 ring-1 ring-black/[0.06] transition group-hover:bg-emerald-50 group-hover:ring-emerald-200">
          <ChevronUp
            className="h-4 w-4 text-[#062018] transition group-hover:-translate-y-0.5 group-hover:text-emerald-700"
            strokeWidth={2.5}
          />
          <span className="font-mono text-xs font-bold text-[#062018]">
            {a.votes}
          </span>
        </button>
        <div className="flex items-center gap-2 font-mono text-[10px] text-[#9ca3af]">
          <span className="inline-flex items-center gap-0.5">
            <MessageCircle className="h-3 w-3" />
            {a.comments}
          </span>
          <Bookmark className="h-3 w-3 cursor-pointer transition hover:text-[#062018]" />
        </div>
      </div>
    </motion.article>
  );
}

function VisitorsCard() {
  return (
    <CardShell>
      <CardHeader
        label="Visitors"
        icon={<TrendingUp className="h-3 w-3 text-emerald-500" />}
        meta="DR 9"
      />
      <div className="px-4 py-4">
        <div className="flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-3xl font-bold tracking-tight text-[#062018]">
              1
            </span>
            <span className="inline-flex items-center gap-0.5 rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-200/60">
              ↗ live
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#9ca3af]">last 30d</span>
        </div>

        <svg
          viewBox="0 0 240 60"
          className="mt-3 h-14 w-full"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="visit-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 50 L40 50 L80 50 L120 50 L150 50 L170 12 L185 50 L210 50 L240 50 L240 60 L0 60 Z"
            fill="url(#visit-fill)"
          />
          <path
            d="M0 50 L40 50 L80 50 L120 50 L150 50 L170 12 L185 50 L210 50 L240 50"
            stroke="#10b981"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="170" cy="12" r="3" fill="#10b981" />
          <circle cx="170" cy="12" r="6" fill="#10b981" fillOpacity="0.18" />
        </svg>
      </div>
      <div className="flex items-center justify-between border-t border-black/[0.05] bg-[#fbfdfc] px-4 py-2 font-mono text-[9px] uppercase tracking-wider text-[#9ca3af]">
        <span className="inline-flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-orange-400" />
          Cloudflare
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-blue-400" />
          Ahrefs
        </span>
      </div>
    </CardShell>
  );
}

function LiveActivitiesCard() {
  return (
    <CardShell>
      <CardHeader
        label="Live Stream"
        icon={
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
        }
        meta="0 events"
      />
      <div className="relative px-4 pb-5 pt-6">
        {/* Radar visual */}
        <div className="relative mx-auto h-24 w-24">
          <div className="absolute inset-0 rounded-full border border-emerald-200/70" />
          <div className="absolute inset-3 rounded-full border border-emerald-200/50" />
          <div className="absolute inset-6 rounded-full border border-emerald-200/40" />
          <div className="absolute inset-9 rounded-full bg-emerald-100/40" />
          <div
            className="absolute inset-0 origin-center animate-spin rounded-full"
            style={{
              animationDuration: "4s",
              background:
                "conic-gradient(from 0deg, transparent 0deg, rgba(16,185,129,0.35) 60deg, transparent 90deg)",
              mask: "radial-gradient(circle, transparent 28%, black 30%)",
              WebkitMask: "radial-gradient(circle, transparent 28%, black 30%)",
            }}
          />
          <span className="absolute left-1/2 top-1/2 grid h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-emerald-500 text-white shadow-[0_0_0_4px_rgba(16,185,129,0.18)]">
            <Radar className="h-3 w-3" strokeWidth={2.4} />
          </span>
        </div>
        <p className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9ca3af]">
          Awaiting first activity
        </p>
      </div>
    </CardShell>
  );
}

function SponsorCard() {
  return (
    <CardShell className="group">
      <CardHeader label="Ad Slot" meta="SLOT-01" />
      <div className="relative px-5 py-5">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(16,185,129,0.05) 0px, rgba(16,185,129,0.05) 1px, transparent 1px, transparent 9px)",
          }}
        />
        <div className="relative flex flex-col items-center text-center">
          <div className="relative grid h-14 w-14 place-items-center rounded-xl bg-emerald-50 ring-1 ring-emerald-200/60 transition group-hover:scale-105">
            <Plus
              className="h-5 w-5 text-emerald-600 transition group-hover:rotate-90"
              strokeWidth={2.4}
            />
            {/* corner ticks */}
            <span className="absolute -left-px -top-px h-2 w-2 border-l border-t border-emerald-400" />
            <span className="absolute -right-px -top-px h-2 w-2 border-r border-t border-emerald-400" />
            <span className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-emerald-400" />
            <span className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-emerald-400" />
          </div>
          <h4 className="mt-3 text-sm font-bold tracking-tight text-[#062018]">
            YOUR BRAND HERE
          </h4>
          <p className="mt-1 text-xs leading-relaxed text-[#6b7280]">
            Reach our growing community of early adopters.
          </p>
        </div>
      </div>
      <div className="border-t border-black/[0.05] bg-[#fbfdfc] px-4 py-2.5">
        <button className="inline-flex w-full items-center justify-between gap-2 rounded-md px-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#062018] transition hover:text-emerald-700">
          Secure Slot
          <ArrowUpRight className="h-3 w-3" />
        </button>
      </div>
    </CardShell>
  );
}

function SearchCard() {
  return (
    <motion.div
      variants={item}
      className="group flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-3 ring-1 ring-black/[0.06] shadow-[0_4px_18px_-12px_rgba(15,30,60,0.18)] transition focus-within:ring-emerald-300/70 hover:ring-emerald-200"
    >
      <Search className="h-4 w-4 text-[#9ca3af] transition group-focus-within:text-emerald-600" />
      <input
        placeholder="Search URise..."
        className="flex-1 bg-transparent text-sm text-[#062018] placeholder:text-[#9ca3af] focus:outline-none"
      />
      <kbd className="inline-flex items-center gap-0.5 rounded-md border border-black/[0.06] bg-[#fbfdfc] px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[#6b7280]">
        <Command className="h-2.5 w-2.5" />K
      </kbd>
    </motion.div>
  );
}

function ReadyToRiseCard() {
  return (
    <motion.div
      variants={item}
      className="relative overflow-hidden rounded-2xl bg-[#062018] ring-1 ring-emerald-900/40 shadow-[0_16px_40px_-20px_rgba(5,40,30,0.5)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 0%, rgba(16,185,129,0.4) 0%, transparent 55%), radial-gradient(circle at 90% 100%, rgba(20,184,166,0.32) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.16) 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Top mini-header */}
      <div className="relative flex items-center justify-between border-b border-white/[0.08] px-4 py-2">
        <div className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
          <Rocket className="h-3 w-3" strokeWidth={2.4} />
          Launch
        </div>
        <span className="font-mono text-[10px] text-emerald-200/40">v1.0</span>
      </div>

      <div className="relative px-5 py-5">
        <h4 className="text-2xl font-bold tracking-tight text-white">
          Ready to Rise?
        </h4>
        <p className="mt-1 text-sm text-emerald-100/70">
          Launch your project today.
        </p>

        <button className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#062018] transition hover:bg-emerald-50">
          <Plus
            className="h-4 w-4 transition group-hover:rotate-90"
            strokeWidth={2.6}
          />
          Start Launching
          <ArrowUpRight className="ml-auto h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </motion.div>
  );
}

function NextBattleCard() {
  return (
    <CardShell>
      <CardHeader
        label="Next Battle"
        icon={<Trophy className="h-3 w-3 text-amber-500" />}
        meta="WK-22"
      />
      <div className="px-4 py-4">
        <div className="flex items-center justify-between gap-1.5">
          {[
            { v: "00", l: "Days" },
            { v: "00", l: "Hrs" },
            { v: "00", l: "Min" },
          ].map((t, i) => (
            <div key={t.l} className="flex items-center gap-1.5">
              <div className="flex flex-col items-center rounded-md bg-[#fbfdfc] px-2.5 py-1.5 ring-1 ring-black/[0.05]">
                <span className="font-mono text-lg font-bold tracking-tighter text-[#062018]">
                  {t.v}
                </span>
                <span className="text-[8px] font-semibold uppercase tracking-widest text-[#9ca3af]">
                  {t.l}
                </span>
              </div>
              {i < 2 && (
                <span className="font-mono text-base font-bold text-[#d1d5db]">
                  :
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs italic leading-relaxed text-[#6b7280]">
          Stay tuned! The next weekly showdown starts on Monday.
        </p>
      </div>
    </CardShell>
  );
}

function ActiveDiscussionsCard() {
  return (
    <CardShell>
      <CardHeader
        label="Discussions"
        icon={<MessageSquare className="h-3 w-3" />}
        meta="0 active"
      />
      <div className="px-4 py-4">
        {/* Empty avatar stack placeholder */}
        <div className="flex items-center -space-x-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="grid h-7 w-7 place-items-center rounded-full bg-[#f4faf6] ring-2 ring-white"
            >
              <span className="h-2 w-2 rounded-full bg-[#d1d5db]" />
            </span>
          ))}
        </div>
        <p className="mt-3 text-xs text-[#6b7280]">
          No active discussions yet.
        </p>
      </div>
      <div className="border-t border-black/[0.05] bg-[#fbfdfc] px-4 py-2.5">
        <a
          href="#"
          className="group inline-flex w-full items-center justify-between text-[11px] font-bold uppercase tracking-[0.14em] text-[#062018] transition hover:text-emerald-700"
        >
          Visit Forum
          <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
        </a>
      </div>
    </CardShell>
  );
}
