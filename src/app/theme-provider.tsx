"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/* eslint-disable react-hooks/set-state-in-effect */

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getInitialTheme(): Theme {
  // During server render, we always fall back to dark to keep
  // markup consistent. The real preference is loaded on the client.
  return "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  // On mount, read the stored or system theme preference and sync state.
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const resolved: Theme = prefersDark ? "dark" : "light";
    setTheme(resolved);
  }, []);

  // Persist and apply theme when it changes
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem("theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR and the very first client render, avoid
  // depending on the theme value so the markup matches.
  if (!mounted) {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-100 shadow-sm shadow-black/40 transition hover:border-sky-300/70 hover:text-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
      >
        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-sky-300" />
        Toggle theme
      </button>
    );
  }

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-100 shadow-sm shadow-black/40 transition hover:border-sky-300/70 hover:text-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
    >
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-sky-300" />
      {theme === "dark" ? "Light theme" : "Dark theme"}
    </button>
  );
}

/* eslint-enable react-hooks/set-state-in-effect */
