"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  ArrowRight,
  Bookmark,
  Calendar,
  ChevronUp,
  Filter,
  History,
  MessageCircle,
  MessageSquare,
  Plus,
  Rocket,
  Search,
  TrendingUp,
  Zap,
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

// Cool scroll-driven reveal — each column tilts in from its side as the
// section enters view. We stagger children with a parent variants chain.
const columnLeft: Variants = {
  hidden: { opacity: 0, x: -40, rotateY: 8 },
  show: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.08 },
  },
};
const columnCenter: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};
const columnRight: Variants = {
  hidden: { opacity: 0, x: 40, rotateY: -8 },
  show: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24, rotateX: 12 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function RecentLaunches() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Subtle floating background — not full parallax, just a gentle drift
  const blobY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      id="launches"
      ref={ref}
      className="relative isolate overflow-hidden py-20 sm:py-24"
      style={{ perspective: 1400 }}
    >
      {/* Top fade — wipes any blob/color from the seam with the hero */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,var(--background)_0%,rgba(245,251,248,0.8)_55%,rgba(245,251,248,0)_100%)] z-[1]" />
      {/* Bottom fade — same idea for the next section seam */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,var(--background)_0%,rgba(245,251,248,0.8)_55%,rgba(245,251,248,0)_100%)] z-[1]" />

      {/* Soft drifting blobs — kept well clear of section edges */}
      <motion.div
        style={{ y: blobY }}
        className="pointer-events-none absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl"
      />
      <motion.div
        style={{ y: blob2Y }}
        className="pointer-events-none absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl"
      />

      <div
        className="relative mx-auto max-w-7xl px-4 sm:px-6"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr_300px]">
          {/* ===== LEFT COLUMN ===== */}
          <motion.aside
            variants={columnLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
            style={{ transformStyle: "preserve-3d" }}
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
            <motion.div variants={item} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Rocket className="h-6 w-6 text-emerald-600" strokeWidth={2.2} />
                <h2 className="text-2xl font-bold tracking-tight text-[#062018] sm:text-3xl">
                  Recent Launches
                </h2>
              </div>
              <button className="grid h-10 w-10 place-items-center rounded-xl bg-white ring-1 ring-black/[0.05] text-[#4b5563] shadow-sm transition hover:text-[#062018] hover:shadow-md">
                <Filter className="h-4 w-4" />
              </button>
            </motion.div>

            {/* Today (empty) */}
            <motion.div variants={item} className="space-y-3">
              <p className="text-sm text-[#6b7280]">
                no products have been launched yet
              </p>
            </motion.div>

            {/* Yesterday */}
            <motion.div variants={item} className="space-y-3">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#062018]" strokeWidth={2} />
                <h3 className="text-xl font-bold text-[#062018]">Yesterday</h3>
              </div>
              <p className="text-sm text-[#6b7280]">
                no products have been launched yet
              </p>
            </motion.div>

            {/* This Week */}
            <motion.div variants={item} className="space-y-3">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#062018]" strokeWidth={2} />
                <h3 className="text-xl font-bold text-[#062018]">This Week</h3>
              </div>
              <p className="text-sm text-[#6b7280]">
                earlier launches from this week show up here
              </p>
            </motion.div>

            {/* Archive */}
            <motion.div variants={item} className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <History className="h-5 w-5 text-[#062018]" strokeWidth={2} />
                  <h3 className="text-xl font-bold text-[#062018]">Archive</h3>
                </div>
                <a
                  href="#"
                  className="group inline-flex items-center gap-1 text-sm font-medium text-[#062018] transition hover:text-emerald-600"
                >
                  Browse all
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
              </div>
              <div className="space-y-3">
                {archive.map((a) => (
                  <ArchiveCard key={a.name} item={a} />
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
            style={{ transformStyle: "preserve-3d" }}
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

/* ============================== CARDS ============================== */

function ArchiveCard({ item: a }: { item: ArchiveItem }) {
  return (
    <motion.article
      variants={item}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex items-start gap-4 rounded-2xl bg-white p-4 ring-1 ring-black/[0.05] shadow-[0_8px_24px_-18px_rgba(15,30,60,0.25)] transition hover:shadow-[0_18px_36px_-20px_rgba(15,30,60,0.3)]"
    >
      <div
        className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${a.gradient} text-2xl font-bold text-white shadow-[0_8px_20px_-8px_rgba(15,30,60,0.3)]`}
      >
        {a.initial}
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm font-semibold text-[#062018] sm:text-base">
          {a.name}
        </h4>
        <p className="mt-0.5 line-clamp-2 text-xs text-[#6b7280] sm:text-sm">
          {a.tagline}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          {a.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-[#e6f1ea] px-2 py-0.5 text-[10px] font-semibold text-[#4b5563]"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-2">
        <button className="flex flex-col items-center rounded-xl bg-[#edf6f0] px-2.5 py-1.5 ring-1 ring-black/[0.04] transition group-hover:bg-emerald-50">
          <ChevronUp className="h-4 w-4 text-[#062018]" />
          <span className="text-xs font-bold text-[#062018]">{a.votes}</span>
        </button>
        <div className="flex items-center gap-2 text-[11px] text-[#6b7280]">
          <span className="flex items-center gap-0.5">
            <MessageCircle className="h-3.5 w-3.5" />
            {a.comments}
          </span>
          <Bookmark className="h-3.5 w-3.5 cursor-pointer transition hover:text-[#062018]" />
        </div>
      </div>
    </motion.article>
  );
}

function VisitorsCard() {
  return (
    <motion.div
      variants={item}
      className="rounded-2xl bg-white p-4 ring-1 ring-black/[0.05] shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#6b7280]">
          <TrendingUp className="h-3 w-3 text-emerald-500" />
          Visitors
        </div>
        <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">
          DR 9
        </span>
      </div>

      <div className="mt-1.5 text-2xl font-bold text-[#062018]">1</div>

      <svg
        viewBox="0 0 240 80"
        className="mt-2 h-20 w-full"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="visit-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 70 L40 70 L80 70 L120 70 L150 70 L170 20 L185 70 L210 70 L240 70 L240 80 L0 80 Z"
          fill="url(#visit-fill)"
        />
        <path
          d="M0 70 L40 70 L80 70 L120 70 L150 70 L170 20 L185 70 L210 70 L240 70"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="mt-2 flex items-center justify-between border-t border-black/[0.04] pt-2 text-[9px] text-[#9ca3af]">
        <span>
          Powered by{" "}
          <span className="font-semibold text-[#6b7280]">Cloudflare</span>
        </span>
        <span>
          Powered by{" "}
          <span className="font-semibold text-[#6b7280]">Ahrefs</span>
        </span>
      </div>
    </motion.div>
  );
}

function LiveActivitiesCard() {
  return (
    <motion.div
      variants={item}
      className="rounded-2xl bg-white p-4 ring-1 ring-black/[0.05] shadow-sm"
    >
      <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-600">
        <Zap className="h-3 w-3 fill-emerald-500 text-emerald-500" />
        Live Activities
      </div>
      <div className="mt-12 mb-4 text-center text-[11px] font-medium uppercase tracking-wider text-[#9ca3af]">
        Awaiting first activity...
      </div>
    </motion.div>
  );
}

function SponsorCard() {
  return (
    <motion.div
      variants={item}
      className="rounded-2xl bg-white p-5 ring-1 ring-black/[0.05] shadow-sm"
    >
      <span className="inline-block rounded-full bg-[#edf6f0] px-2.5 py-0.5 text-[10px] font-semibold text-[#4b5563] ring-1 ring-black/[0.04]">
        SPONSOR
      </span>

      <div className="mt-6 flex flex-col items-center text-center">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
          <Plus className="h-6 w-6 text-emerald-600" strokeWidth={2.5} />
        </div>
        <h4 className="mt-3 text-sm font-bold text-[#062018]">YOUR BRAND HERE</h4>
        <p className="mt-1 text-xs text-[#6b7280]">
          Reach our growing community of early adopters.
        </p>
      </div>

      <button className="mt-5 w-full rounded-xl bg-[#edf6f0] py-2.5 text-xs font-semibold text-[#062018] ring-1 ring-black/[0.04] transition hover:bg-[#e9eef5]">
        Secure Slot
      </button>
    </motion.div>
  );
}

function SearchCard() {
  return (
    <motion.div
      variants={item}
      className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 ring-1 ring-black/[0.05] shadow-sm"
    >
      <Search className="h-4 w-4 text-[#9ca3af]" />
      <input
        placeholder="Search URise..."
        className="flex-1 bg-transparent text-sm text-[#062018] placeholder:text-[#9ca3af] focus:outline-none"
      />
    </motion.div>
  );
}

function ReadyToRiseCard() {
  return (
    <motion.div
      variants={item}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100 via-white to-emerald-50 p-5 ring-1 ring-emerald-200/60 shadow-sm"
    >
      <div className="flex items-center gap-2">
        <Rocket className="h-5 w-5 text-emerald-600" strokeWidth={2.2} />
        <h4 className="text-lg font-bold text-[#062018]">Ready to Rise?</h4>
      </div>
      <p className="mt-1 text-sm text-[#4b5563]">Launch your project today.</p>
      <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(5,150,105,0.6)] transition hover:bg-emerald-700">
        <Plus className="h-4 w-4" strokeWidth={2.5} />
        Start Launching
      </button>
    </motion.div>
  );
}

function NextBattleCard() {
  return (
    <motion.div
      variants={item}
      className="rounded-2xl bg-white p-4 ring-1 ring-black/[0.05] shadow-sm"
    >
      <span className="inline-block rounded-full bg-[#edf6f0] px-2.5 py-0.5 text-[10px] font-semibold text-[#4b5563] ring-1 ring-black/[0.04]">
        NEXT BATTLE
      </span>
      <p className="mt-6 text-xs italic text-[#6b7280]">
        Stay tuned! The next weekly showdown starts on Monday.
      </p>
    </motion.div>
  );
}

function ActiveDiscussionsCard() {
  return (
    <motion.div
      variants={item}
      className="rounded-2xl bg-white p-4 ring-1 ring-black/[0.05] shadow-sm"
    >
      <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#6b7280]">
        <MessageSquare className="h-3 w-3" />
        Active Discussions
      </div>
      <p className="mt-3 text-xs text-[#6b7280]">No active discussions.</p>
      <a
        href="#"
        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 transition hover:text-emerald-700"
      >
        Visit Community Forum
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </motion.div>
  );
}
