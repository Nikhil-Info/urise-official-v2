"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.57.11.78-.25.78-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.69 1.24 3.35.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.79.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
  </svg>
);

type FooterLink = { label: string; soon?: boolean };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "Community Feed" },
      { label: "Discover Products" },
      { label: "Weekly Battles" },
      { label: "Launch a Product" },
      { label: "Forums" },
      { label: "Events" },
      { label: "Changelog" },
      { label: "Roadmap" },
      { label: "Advertise", soon: true },
      { label: "About Us" },
    ],
  },
  {
    title: "Top Rankings",
    links: [
      { label: "Best AI Tools" },
      { label: "Best Productivity" },
      { label: "Best DevTools" },
      { label: "Best SaaS" },
      { label: "Best Design" },
    ],
  },
  {
    title: "Free Tools",
    links: [
      { label: "App Icon Generator" },
      { label: "Favicon Generator" },
      { label: "Startup Name Generator" },
      { label: "Fake Analytics" },
      { label: "Tagline Generator" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Affiliate Program", soon: true },
      { label: "How it Works" },
      { label: "Launch Guidance" },
      { label: "Growth Badges" },
      { label: "Success Stories" },
      { label: "Hall of Fame" },
      { label: "Post Mortem" },
      { label: "Documentation" },
      { label: "Privacy Policy" },
      { label: "Terms of Service" },
    ],
  },
];

const featuredOn = [
  { name: "LaunchIgniter", tag: "Featured on" },
  { name: "Fazier", tag: "Featured on" },
  { name: "OpenAlternative", tag: "Featured on" },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-emerald-100/80 bg-white pt-20 pb-0">
      {/* Subtle dotted background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_80%)]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(6,32,24,0.1) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[60%] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        {/* ===== Top grid ===== */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)]">
          {/* ===== LEFT — brand + newsletter + featured-on ===== */}
          <div className="relative">
            <a href="#" className="group inline-flex items-center gap-2.5">
              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-xl bg-emerald-200/40 blur-md transition group-hover:bg-emerald-300/50" />
                <Image
                  src="/logo.png"
                  alt="URise logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain transition group-hover:-rotate-6"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#062018]">
                URise
              </span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#4b6b5c]">
              Discover, launch, and grow next-generation digital products.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2.5">
              {[
                { Icon: TwitterIcon, label: "Twitter" },
                { Icon: GithubIcon, label: "GitHub" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="group grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-b from-white to-[#f4faf6] ring-1 ring-emerald-900/[0.08] text-[#062018] shadow-[0_4px_14px_-6px_rgba(6,32,24,0.12)] transition hover:-translate-y-0.5 hover:ring-emerald-300/60 hover:text-emerald-700 hover:shadow-[0_10px_24px_-10px_rgba(5,150,105,0.3)]"
                >
                  <Icon className="h-4 w-4 transition group-hover:scale-110" />
                </a>
              ))}
            </div>

            {/* Newsletter — premium card */}
            <div className="relative mt-10 overflow-hidden rounded-2xl bg-gradient-to-br from-[#062018] via-[#08261c] to-[#0a2d22] p-6 ring-1 ring-emerald-900/40 shadow-[0_20px_44px_-20px_rgba(5,40,30,0.55)]">
              {/* mesh glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 100% 0%, rgba(16,185,129,0.45) 0%, transparent 55%), radial-gradient(circle at 0% 100%, rgba(20,184,166,0.25) 0%, transparent 55%)",
                }}
              />
              {/* dotted texture */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)",
                  backgroundSize: "16px 16px",
                }}
              />

              <div className="relative">
                {/* Top meta row */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-0.5 ring-1 ring-emerald-400/30">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                      Weekly Drop
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-200/40">
                    1.2k readers
                  </span>
                </div>

                <h4 className="mt-4 text-lg font-bold tracking-tight text-white">
                  Stay in the loop.
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-emerald-50/70">
                  Get the best new products delivered to your inbox every week.
                </p>

                {/* Input with inline arrow button */}
                <form onSubmit={(e) => e.preventDefault()} className="relative mt-5">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-4 pr-12 text-sm text-white placeholder:text-white/40 backdrop-blur transition focus:border-emerald-400/50 focus:bg-white/[0.07] focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="group absolute right-1.5 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg bg-white text-[#062018] shadow-[0_4px_14px_-4px_rgba(0,0,0,0.3)] transition hover:bg-emerald-50"
                  >
                    <ArrowRight
                      className="h-3.5 w-3.5 transition group-hover:translate-x-0.5"
                      strokeWidth={2.4}
                    />
                  </button>
                </form>

                <p className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-200/40">
                  <span className="h-1 w-1 rounded-full bg-emerald-300/50" />
                  No spam · Unsubscribe anytime
                </p>
              </div>
            </div>

            {/* Featured on */}
            <div className="mt-10">
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4b6b5c]">
                <span className="h-px w-6 bg-emerald-300/60" />
                Featured on
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                {featuredOn.map((f) => (
                  <a
                    key={f.name}
                    href="#"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-[#0a1410] px-3 py-2 ring-1 ring-emerald-900/30 transition hover:-translate-y-0.5 hover:bg-[#0f1f18] hover:ring-emerald-500/30 hover:shadow-[0_10px_24px_-10px_rgba(5,150,105,0.4)]"
                  >
                    <span className="grid h-5 w-5 place-items-center rounded-md bg-emerald-500/90 shadow-[inset_0_-2px_0_rgba(0,0,0,0.1)]">
                      <span className="text-[10px] font-bold text-[#062018]">
                        {f.name.charAt(0)}
                      </span>
                    </span>
                    <span className="flex flex-col leading-none">
                      <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-white/60">
                        {f.tag}
                      </span>
                      <span className="mt-0.5 text-xs font-semibold text-white">
                        {f.name}
                      </span>
                    </span>
                    <ArrowUpRight className="ml-1 h-3 w-3 -translate-x-1 text-emerald-300/0 transition group-hover:translate-x-0 group-hover:text-emerald-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ===== RIGHT — 4 link columns ===== */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
            {columns.map((col, idx) => (
              <div key={col.title} className="relative">
                {/* Subtle column divider line (between, not after last) */}
                {idx < columns.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-emerald-100 to-transparent sm:block"
                  />
                )}

                <h4 className="mb-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#062018]">
                  <span className="h-1 w-1 rounded-full bg-emerald-500" />
                  {col.title}
                </h4>
                <ul className="space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href="#"
                        className={`group relative inline-flex items-center gap-2 transition ${
                          link.soon
                            ? "text-[#9ca3af]"
                            : "text-[#4b6b5c] hover:text-emerald-700"
                        }`}
                      >
                        <span className="relative">
                          {link.label}
                          {!link.soon && (
                            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" />
                          )}
                        </span>
                        {link.soon && (
                          <span className="rounded-md bg-gradient-to-br from-[#f4faf6] to-white px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#4b6b5c] ring-1 ring-emerald-900/[0.08]">
                            Soon
                          </span>
                        )}
                        {!link.soon && (
                          <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Divider + bottom row ===== */}
        <div className="relative mt-20 pt-8">
          {/* Gradient divider */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"
          />

          <div className="flex flex-col items-start justify-between gap-4 text-sm sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#4b6b5c]">
                URise ©{new Date().getFullYear()}
              </span>
              <span className="hidden h-3 w-px bg-emerald-200 sm:block" />
              <span className="hidden items-center gap-1.5 text-xs text-[#4b6b5c] sm:inline-flex">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                All systems operational
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-[#4b6b5c]">Launched From</span>
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-white to-[#f4faf6] px-3 py-1.5 text-xs font-semibold text-[#062018] ring-1 ring-emerald-900/[0.08] shadow-[0_4px_14px_-8px_rgba(6,32,24,0.15)] transition hover:-translate-y-0.5 hover:ring-emerald-300/60"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.18)]" />
                San Francisco, USA
                <ArrowRight className="h-3 w-3 text-[#4b6b5c] transition group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Giant URISE wordmark ===== */}
      <div
        aria-hidden
        className="relative mt-16 select-none overflow-hidden px-4"
      >
        <h2 className="bg-gradient-to-b from-emerald-200/80 via-emerald-300/40 to-transparent bg-clip-text text-center font-black uppercase leading-[0.85] tracking-[-0.04em] text-transparent text-[clamp(6rem,22vw,22rem)]">
          URISE
        </h2>
      </div>
    </footer>
  );
}
