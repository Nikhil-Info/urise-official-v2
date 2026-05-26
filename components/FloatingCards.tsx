"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Rocket,
  ChevronUp,
  Flame,
  Users,
  Sparkles,
  CalendarCheck,
} from "lucide-react";

function PillCard({
  icon,
  label,
  className,
  rotate = 0,
  floatClass = "animate-float-medium",
  delay = 0,
}: {
  icon: React.ReactNode;
  label: string;
  className: string;
  rotate?: number;
  floatClass?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05, rotate: rotate * 0.4 }}
      className={`absolute z-20 pointer-events-auto ${className}`}
    >
      <div className={floatClass}>
        <div className="glass-card flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#0b1220] ring-1 ring-black/[0.04]">
          {icon}
          <span>{label}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function FloatingCards() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <PillCard
        delay={0.1}
        rotate={-9}
        floatClass="animate-float-slow"
        className="left-[6%] top-[28%] hidden md:block"
        icon={<TrendingUp className="h-3.5 w-3.5 text-emerald-500" />}
        label="Community Upvote"
      />

      <PillCard
        delay={0.15}
        rotate={8}
        floatClass="animate-float-medium"
        className="right-[6%] top-[26%] hidden md:block"
        icon={<Rocket className="h-3.5 w-3.5 text-amber-500" />}
        label="Product Launch"
      />

      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: -5 }}
        whileHover={{ scale: 1.04, rotate: -2 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[4%] top-[55%] z-20 hidden lg:block pointer-events-auto"
      >
        <div className="animate-float-medium">
          <div className="glass-card flex items-center gap-3 rounded-2xl px-3.5 py-3 ring-1 ring-black/[0.04] w-[210px]">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-indigo-400 to-purple-500 text-white">
                <CalendarCheck className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1 text-[10px] font-medium text-amber-600">
                  <Sparkles className="h-2.5 w-2.5" />
                  Today&apos;s Pick
                </div>
                <div className="text-sm font-semibold leading-tight text-[#0b1220]">
                  FlowZen
                </div>
                <div className="text-[10px] text-[#6b7280] truncate">
                  Smart calendar
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-[#f3f6fb] px-2 py-1">
              <ChevronUp className="h-3 w-3 text-[#0b1220]" />
              <span className="text-[11px] font-semibold text-[#0b1220]">
                432
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 5 }}
        animate={{ opacity: 1, y: 0, rotate: 5 }}
        whileHover={{ scale: 1.04, rotate: 2 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[4%] top-[51%] z-20 hidden lg:block pointer-events-auto"
      >
        <div className="animate-float-slow">
          <div className="glass-card rounded-2xl px-3.5 py-3 ring-1 ring-black/[0.04] w-[210px]">
            <div className="flex items-center gap-1.5 mb-2">
              <Flame className="h-3.5 w-3.5 text-orange-500" />
              <span className="text-xs font-semibold text-[#0b1220]">
                Trending Now
              </span>
            </div>
            <ul className="space-y-1.5">
              {[
                { rank: 1, name: "Taskly", votes: 432 },
                { rank: 2, name: "Shoply", votes: 621 },
                { rank: 3, name: "Playflow", votes: 512 },
              ].map((item) => (
                <li
                  key={item.rank}
                  className="flex items-center justify-between text-xs"
                >
                  <span className="text-[#0b1220]">
                    <span className="text-[#9ca3af] mr-1.5">{item.rank}.</span>
                    {item.name}
                  </span>
                  <span className="flex items-center gap-0.5 text-[10px] font-medium text-emerald-600">
                    <ChevronUp className="h-3 w-3" />
                    {item.votes}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <PillCard
        delay={0.35}
        rotate={-7}
        floatClass="animate-float-fast"
        className="left-[15%] bottom-[22%] hidden md:block"
        icon={<TrendingUp className="h-3.5 w-3.5 text-emerald-500" />}
        label="Community Upvoted"
      />

      <PillCard
        delay={0.4}
        rotate={6}
        floatClass="animate-float-medium"
        className="right-[15%] bottom-[20%] hidden md:block"
        icon={<Users className="h-3.5 w-3.5 text-sky-500" />}
        label="Build in Public"
      />
    </div>
  );
}
