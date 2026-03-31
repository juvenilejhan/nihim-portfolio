"use client";

import { useState } from "react";
import { ThemeToggle } from "./theme-provider";

type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  navItems: NavItem[];
};

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:py-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.2em] text-sky-300/90">
                Portfolio
              </span>
              <span className="text-sm font-semibold text-slate-50">
                Hossain Nihim
              </span>
            </div>
            <div className="flex items-center gap-2">
              <nav className="hidden flex-wrap items-center gap-2 text-xs font-medium text-slate-200 sm:flex sm:justify-end sm:gap-4 md:gap-6 md:text-sm">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="whitespace-nowrap rounded-full px-3 py-1 transition-colors hover:bg-sky-500/10 hover:text-sky-300"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <ThemeToggle />
              <button
                type="button"
                aria-label="Toggle navigation menu"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-slate-100 sm:hidden"
                onClick={() => setOpen((prev) => !prev)}
              >
                <span className="sr-only">Toggle navigation menu</span>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                  {open ? (
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  ) : (
                    <path
                      d="M4 7h16M4 12h16M4 17h16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {open ? (
            <nav className="flex flex-col gap-1 pt-2 text-sm font-medium text-slate-200 sm:hidden">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1.5 transition-colors hover:bg-sky-500/10 hover:text-sky-300"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
