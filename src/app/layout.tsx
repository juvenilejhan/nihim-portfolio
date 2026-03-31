import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { SiteHeader } from "./navbar";

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
  { label: "Experience", href: "#clinical-volunteer" },
  { label: "Research", href: "#research" },
  { label: "Reflections", href: "#reflections" },
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
      <body className="min-h-screen">
        <ThemeProvider>
          <div className="min-h-screen">
            <SiteHeader navItems={navItems} />

            <main className="mx-auto max-w-6xl px-4 py-10 sm:py-16">
              {children}
            </main>

            <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-400">
              <p>
                &copy; {new Date().getFullYear()} Nihim&apos;s portfolio. All
                rights reserved.
              </p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
