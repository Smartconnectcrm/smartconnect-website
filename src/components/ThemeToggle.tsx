"use client"

import { useEffect, useState } from "react"

type Theme = "dark" | "light"

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "dark"
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

function setTheme(theme: Theme) {
  const root = document.documentElement
  if (theme === "dark") root.classList.add("dark")
  else root.classList.remove("dark")

  document.cookie = `theme=${theme}; Path=/; Max-Age=31536000; SameSite=Lax`
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [theme, setThemeState] = useState<Theme>("dark")

  useEffect(() => {
    setMounted(true)
    setThemeState(getInitialTheme())
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={() => {
        const next: Theme = isDark ? "light" : "dark"
        setTheme(next)
        setThemeState(next)
      }}
      className={[
        // enterprise control
        "inline-flex items-center gap-2 rounded-full px-3 py-2",
        "border border-[color:var(--border)] bg-[color:var(--panel)]",
        "text-xs font-black uppercase tracking-[0.12em]",
        "text-[color:var(--text-muted)] shadow-[var(--shadow-xs)]",
        "transition-[transform,box-shadow,border-color] duration-150",
        "hover:border-[color:var(--border-strong)] hover:-translate-y-[1px]",
        "active:translate-y-0",
        "outline-none focus-visible:shadow-[0_0_0_6px_var(--ring)]",
      ].join(" ")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span
        className={[
          "inline-block h-2.5 w-2.5 rounded-full",
          // subtle status dot using your brand
          isDark ? "bg-[color:var(--brand)]" : "bg-[rgba(11,18,32,0.35)]",
        ].join(" ")}
        aria-hidden="true"
      />
      <span className="whitespace-nowrap">{isDark ? "Dark" : "Light"}</span>
    </button>
  )
}
