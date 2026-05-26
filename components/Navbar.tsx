"use client";

import { Box } from "lucide-react";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-6 pt-6">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-2xl bg-white/90 px-4 py-2 shadow-[0_8px_30px_-12px_rgba(15,30,60,0.15)] backdrop-blur-md ring-1 ring-black/[0.04]">
        <div className="flex items-center gap-2 pl-2">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-sky-300 to-sky-500 text-white shadow-sm">
            <Box className="h-4 w-4" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-[#0b1220]">
            Selly
          </span>
        </div>

        <ul className="hidden items-center gap-8 text-sm font-medium text-[#4b5563] md:flex">
          <li>
            <a href="#" className="hover:text-[#0b1220] transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#0b1220] transition">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#0b1220] transition">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="#waitlist"
          className="rounded-xl bg-[#0a1027] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#13193a]"
        >
          Join waitlist
        </a>
      </nav>
    </header>
  );
}
