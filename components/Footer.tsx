"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
    <footer className="relative isolate overflow-hidden border-t border-emerald-100/80 bg-white pt-16 pb-0">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* ===== Top grid ===== */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)]">
          {/* ===== LEFT — brand + newsletter + featured-on ===== */}
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="URise logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="text-2xl font-bold tracking-tight text-[#062018]">
                URise
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#4b6b5c]">
              Discover, launch, and grow next-generation digital products.
            </p>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-2.5">
              {[TwitterIcon, GithubIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-xl bg-[#f4faf6] ring-1 ring-emerald-900/[0.06] text-[#062018] transition hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <p className="mt-8 text-sm text-[#4b6b5c]">
              Get the best new products delivered to your inbox every week.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex max-w-md items-center gap-2 rounded-2xl bg-[#f4faf6] p-1.5 ring-1 ring-emerald-900/[0.06]"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-3 py-2 text-sm text-[#062018] placeholder:text-[#9ca3af] focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-xl bg-[#062018] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-emerald-800"
              >
                Subscribe
              </button>
            </form>

            {/* Featured on */}
            <div className="mt-10">
              <p className="text-sm text-[#4b6b5c]">Featured on</p>
              <div className="mt-3 flex flex-wrap items-center gap-2.5">
                {featuredOn.map((f) => (
                  <a
                    key={f.name}
                    href="#"
                    className="group inline-flex items-center gap-2 rounded-xl bg-[#0a1410] px-3 py-2 ring-1 ring-emerald-900/10 transition hover:bg-[#0f1f18]"
                  >
                    <span className="grid h-5 w-5 place-items-center rounded-md bg-emerald-500/90">
                      <span className="text-[10px] font-bold text-[#062018]">
                        {f.name.charAt(0)}
                      </span>
                    </span>
                    <span className="flex flex-col leading-none">
                      <span className="text-[8px] font-medium uppercase tracking-wider text-white/60">
                        {f.tag}
                      </span>
                      <span className="mt-0.5 text-xs font-semibold text-white">
                        {f.name}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ===== RIGHT — 4 link columns ===== */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#062018]">
                  {col.title}
                </h4>
                <ul className="space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href="#"
                        className={`inline-flex items-center gap-2 transition hover:text-emerald-700 ${
                          link.soon ? "text-[#9ca3af]" : "text-[#4b6b5c]"
                        }`}
                      >
                        {link.label}
                        {link.soon && (
                          <span className="rounded-md bg-[#f4faf6] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#4b6b5c] ring-1 ring-emerald-900/[0.06]">
                            Soon
                          </span>
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
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-emerald-100/80 pt-6 text-sm sm:flex-row sm:items-center">
          <span className="text-[#4b6b5c]">
            URise ©{new Date().getFullYear()}.
          </span>
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#4b6b5c]">Launched From</span>
            <span className="inline-flex items-center gap-2 rounded-xl bg-[#f4faf6] px-3 py-1.5 text-xs font-semibold text-[#062018] ring-1 ring-emerald-900/[0.06]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              San Francisco, USA
              <ArrowRight className="h-3 w-3 text-[#4b6b5c]" />
            </span>
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
