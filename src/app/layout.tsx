import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medical Student Portfolio",
  description:
    "A modern academic portfolio for an early-stage medical student.",
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Publications", href: "#publications" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <div className="min-h-screen bg-gradient-to-b from-sky-950 via-slate-950 to-slate-950/90">
          <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.2em] text-sky-300/90">
                  Portfolio
                </span>
                <span className="text-sm font-semibold text-slate-50">
                  Medical Student
                </span>
              </div>
              <nav className="hidden gap-6 text-xs font-medium text-slate-200 sm:flex">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-sky-300"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </header>

          <main className="mx-auto max-w-6xl px-4 py-10 sm:py-16">
            {children}
          </main>

          <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Medical student portfolio. All
              rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
