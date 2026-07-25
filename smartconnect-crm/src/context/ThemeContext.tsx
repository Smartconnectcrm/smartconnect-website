'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'neon' | 'blue'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ALL_THEMES: Theme[] = ['light', 'dark', 'neon', 'blue']

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function applyThemeToDOM(theme: Theme) {
  if (typeof document === 'undefined') return
  const root = document.documentElement

  // 1. Set data-theme attribute on <html> tag
  root.setAttribute('data-theme', theme)

  // 2. Clear theme classes on <html> tag to prevent collisions
  root.classList.remove(...ALL_THEMES)
  root.classList.add(theme)
}

export function CustomThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')

  useEffect(() => {
    // Read saved theme preference from localStorage or fallback to default
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme && ALL_THEMES.includes(savedTheme)) {
      setThemeState(savedTheme)
      applyThemeToDOM(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThemeState('dark')
      applyThemeToDOM('dark')
    } else {
      applyThemeToDOM('light')
    }
  }, [])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
    applyThemeToDOM(newTheme)
  }

  const toggleTheme = () => {
    const nextThemeMap: Record<Theme, Theme> = {
      light: 'dark',
      dark: 'neon',
      neon: 'blue',
      blue: 'light',
    }
    const nextTheme = nextThemeMap[theme] || 'light'
    setTheme(nextTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a CustomThemeProvider')
  }
  return context
}
