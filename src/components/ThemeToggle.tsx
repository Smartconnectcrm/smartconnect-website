"use client"

import { useEffect, useState } from "react"

type Theme = "dark" | "light"

function getInitialTheme(): Theme {
  // Prefer current DOM state (server-rendered) to avoid mismatch
  if (typeof document === "undefined") return "dark"
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

function setTheme(theme: Theme) {
  const root = document.documentElement
  if (theme === "dark") root.classList.add("dark")
  else root.classList.remove("dark")

  // Persist via cookie (server can read it on next request)
  // SameSite=Lax is typical for preference cookies
  document.cookie = `theme=${theme}; Path=/; Max-Age=31536000; SameSite=Lax`
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [theme, setThemeState] = useState<Theme>("dark")

  useEffect(() => {
    setMounted(true)
    setThemeState(getInitialTheme())
  }, [])

  // Avoid hydration mismatch by rendering nothing until mounted
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
      className="
        inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm
        border-black/10 bg-white/70 text-slate-900
        dark:border-white/10 dark:bg-slate-950/55 dark:text-slate-100
        hover:bg-white/90 dark:hover:bg-slate-950/75
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
        focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950
      "
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span
        className="
          inline-block h-2.5 w-2.5 rounded-full
          bg-slate-900/70 dark:bg-sky-300
        "
        aria-hidden="true"
      />
      <span className="whitespace-nowrap">{isDark ? "Dark" : "Light"}</span>
    </button>
  )
}
