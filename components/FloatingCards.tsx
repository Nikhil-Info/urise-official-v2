"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import {
  TrendingUp,
  Rocket,
  ChevronUp,
  Flame,
  Users,
  Sparkles,
  CalendarCheck,
} from "lucide-react";
import { useRef } from "react";

type CardProps = {
  y: MotionValue<number>;
  x?: MotionValue<number>;
  rotate?: MotionValue<number>;
};

function PillCard({
  icon,
  label,
  y,
  x,
  rotate,
  className,
  delay = 0,
}: {
  icon: React.ReactNode;
  label: string;
  className: string;
  delay?: number;
} & CardProps) {
  return (
    <motion.div
      style={{ y, x, rotate }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05, y: -4 }}
      className={`absolute z-20 pointer-events-auto ${className}`}
    >
      <div className="glass-card flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#0b1220] ring-1 ring-black/[0.03]">
        {icon}
        <span>{label}</span>
      </div>
    </motion.div>
  );
}

export default function FloatingCards() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yMed = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const yReverse = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const rotateA = useTransform(scrollYProgress, [0, 1], [-6, -10]);
  const rotateB = useTransform(scrollYProgress, [0, 1], [5, 10]);
  const rotateC = useTransform(scrollYProgress, [0, 1], [-3, -6]);
  const rotateD = useTransform(scrollYProgress, [0, 1], [4, 8]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 z-10">
      <PillCard
        y={ySlow}
        x={xLeft}
        rotate={rotateA}
        delay={0.1}
        className="left-[5%] top-[26%] hidden md:block animate-float-slow"
        icon={<TrendingUp className="h-3.5 w-3.5 text-emerald-500" />}
        label="Community Upvote"
      />

      <PillCard
        y={yMed}
        x={xRight}
        rotate={rotateB}
        delay={0.15}
        className="right-[5%] top-[24%] hidden md:block animate-float-medium"
        icon={<Rocket className="h-3.5 w-3.5 text-amber-500" />}
        label="Product Launch"
      />

      <motion.div
        style={{ y: yFast, x: xLeft, rotate: rotateC }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.04, y: -4 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[3%] top-[54%] z-20 hidden lg:block animate-float-medium pointer-events-auto"
      >
        <div className="glass-card flex items-center gap-3 rounded-2xl px-3.5 py-3 ring-1 ring-black/[0.03] w-[210px]">
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
      </motion.div>

      <motion.div
        style={{ y: yReverse, x: xRight, rotate: rotateD }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.04, y: -4 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[3%] top-[50%] z-20 hidden lg:block animate-float-slow pointer-events-auto"
      >
        <div className="glass-card rounded-2xl px-3.5 py-3 ring-1 ring-black/[0.03] w-[210px]">
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
      </motion.div>

      <PillCard
        y={yMed}
        x={xLeft}
        rotate={rotateB}
        delay={0.35}
        className="left-[14%] bottom-[14%] hidden md:block animate-float-fast"
        icon={<TrendingUp className="h-3.5 w-3.5 text-emerald-500" />}
        label="Community Upvoted"
      />

      <PillCard
        y={ySlow}
        x={xRight}
        rotate={rotateA}
        delay={0.4}
        className="right-[14%] bottom-[12%] hidden md:block animate-float-medium"
        icon={<Users className="h-3.5 w-3.5 text-sky-500" />}
        label="Build in Public"
      />
    </div>
  );
}
