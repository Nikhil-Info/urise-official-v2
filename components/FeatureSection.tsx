"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  BarChart3,
  HandshakeIcon,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Rocket,
    title: "Launch in minutes",
    desc: "Spin up a polished launch page, share assets, and ship to the feed in under five minutes.",
    accent: "from-sky-100 to-sky-50",
    iconColor: "text-sky-600",
  },
  {
    icon: HandshakeIcon,
    title: "Reach early adopters",
    desc: "Get in front of the founders, makers, and curious users who actually try new things.",
    accent: "from-indigo-100 to-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: MessageSquare,
    title: "Honest feedback",
    desc: "Real comments from real builders — not vanity upvotes from bot accounts.",
    accent: "from-cyan-100 to-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: BarChart3,
    title: "Built-in analytics",
    desc: "Track visitors, votes, and conversions in one dashboard that updates as you grow.",
    accent: "from-emerald-100 to-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: ShieldCheck,
    title: "Spam-free community",
    desc: "Verified makers and a strong moderation team keep the signal high and the noise low.",
    accent: "from-amber-100 to-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Sparkles,
    title: "Smart discovery",
    desc: "Algorithmic + curated feeds surface the products you should actually be paying attention to.",
    accent: "from-violet-100 to-violet-50",
    iconColor: "text-violet-600",
  },
];

export default function FeatureSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const blobY1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [80, -120]);
  const headingY = useTransform(scrollYProgress, [0, 0.5], [40, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-[#eaf3fb] py-28"
    >
      <motion.div
        style={{ y: blobY1 }}
        className="pointer-events-none absolute -top-20 -left-32 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl"
      />
      <motion.div
        style={{ y: blobY2 }}
        className="pointer-events-none absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-medium text-[#0b1220] ring-1 ring-black/[0.04] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            Why founders pick us
          </div>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.02em] text-[#0a1027] sm:text-5xl">
            Built for the moment you go live.
          </h2>
          <p className="mt-4 text-balance text-[#4b5563]">
            Everything you need to take a launch from quiet to loud — with a
            community of early adopters along for the ride.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const Icon = feature.icon;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const direction = index % 2 === 0 ? 1 : -1;
  const y = useTransform(scrollYProgress, [0, 1], [30 * direction, -30 * direction]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-black/[0.04] shadow-[0_10px_30px_-20px_rgba(15,30,60,0.25)] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(15,30,60,0.3)]"
    >
      <div
        className={`mb-5 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${feature.accent} ring-1 ring-black/[0.04]`}
      >
        <Icon className={`h-5 w-5 ${feature.iconColor}`} strokeWidth={2.2} />
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-[#0a1027]">
        {feature.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#4b5563]">{feature.desc}</p>
    </motion.div>
  );
}
