"use client";

import Image from "next/image";

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
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9.75h4v11.25H3zM10 9.75h3.83v1.54h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13v6.64h-4v-5.89c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1v5.99h-4z" />
  </svg>
);

export default function Footer() {
  const links = {
    Product: ["Feed", "Forum", "Launches", "Blog"],
    Company: ["About", "Careers", "Press", "Contact"],
    Resources: ["Help Center", "Community", "Privacy", "Terms"],
  };

  return (
    <footer className="border-t border-[#dde7f0] bg-[#eaf3fb] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_2fr]">
          <div>
            <a href="#" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="URise logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="text-lg font-semibold tracking-tight text-[#0b1220]">
                URise
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-[#4b5563]">
              The stage for what&apos;s next. Discover, launch, and grow with a
              community of early adopters.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[TwitterIcon, GithubIcon, LinkedinIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-xl bg-white ring-1 ring-black/[0.05] text-[#4b5563] shadow-sm transition hover:text-[#0a1027]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <div className="mb-3 text-xs font-bold uppercase tracking-wider text-[#0b1220]">
                  {title}
                </div>
                <ul className="space-y-2 text-sm">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-[#4b5563] transition hover:text-[#0a1027]"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[#dde7f0] pt-6 text-xs text-[#6b7280] sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} URise. Built for makers.</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
