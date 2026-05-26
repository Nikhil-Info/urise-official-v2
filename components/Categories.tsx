"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Brain,
  Code2,
  Palette,
  ShoppingBag,
  TrendingUp,
  Wrench,
  Zap,
  Briefcase,
} from "lucide-react";
import { useRef } from "react";

const categories = [
  { name: "AI & ML", count: 1284, icon: Brain, gradient: "from-sky-500 to-indigo-600" },
  { name: "DevTools", count: 962, icon: Code2, gradient: "from-indigo-500 to-blue-600" },
  { name: "Design", count: 743, icon: Palette, gradient: "from-cyan-500 to-sky-600" },
  { name: "E-commerce", count: 681, icon: ShoppingBag, gradient: "from-amber-500 to-orange-600" },
  { name: "Marketing", count: 528, icon: TrendingUp, gradient: "from-emerald-500 to-teal-600" },
  { name: "Productivity", count: 504, icon: Zap, gradient: "from-yellow-500 to-amber-600" },
  { name: "No-Code", count: 412, icon: Wrench, gradient: "from-violet-500 to-purple-600" },
  { name: "SaaS", count: 389, icon: Briefcase, gradient: "from-blue-500 to-sky-600" },
];

export default function Categories() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 0.5], [40, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={ref}
      id="forum"
      className="relative isolate overflow-hidden bg-white py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(125,180,225,0.18),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#f3f6fb] px-3.5 py-1.5 text-xs font-medium text-[#0b1220] ring-1 ring-black/[0.04]">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            Explore by category
          </div>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.02em] text-[#0a1027] sm:text-5xl">
            Find your tribe.
          </h2>
          <p className="mt-4 text-balance text-[#4b5563]">
            Browse thousands of products by category, ranked by the community
            in real time.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.name} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  category,
  index,
}: {
  category: (typeof categories)[number];
  index: number;
}) {
  const Icon = category.icon;
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl bg-white p-5 ring-1 ring-black/[0.05] shadow-[0_10px_30px_-20px_rgba(15,30,60,0.2)] transition hover:shadow-[0_20px_40px_-20px_rgba(15,30,60,0.25)]"
    >
      <div
        className={`mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${category.gradient} text-white shadow-[0_8px_18px_-8px_rgba(15,30,60,0.4)]`}
      >
        <Icon className="h-5 w-5" strokeWidth={2.2} />
      </div>
      <div className="text-base font-semibold text-[#0a1027]">{category.name}</div>
      <div className="mt-1 text-xs text-[#6b7280]">
        {category.count.toLocaleString()} products
      </div>
      <div className="pointer-events-none absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-sky-300/0 blur-2xl transition-all duration-500 group-hover:bg-sky-300/40" />
    </motion.a>
  );
}
