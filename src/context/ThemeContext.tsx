'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'neon' | 'blue'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const ALL_THEMES: Theme[] = ['light', 'dark', 'neon', 'blue']

function applyThemeToDOM(theme: Theme) {
  const root = document.documentElement

  // 1. Set data-theme attribute
  root.setAttribute('data-theme', theme)

  // 2. Clear all theme classes first to prevent layout collisions
  root.classList.remove(...ALL_THEMES)

  // 3. Add active theme class (e.g. html.neon, html.blue, html.dark)
  root.classList.add(theme)
}

export function CustomThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')

  useEffect(() => {
    // Read stored theme or default to light
    const savedTheme = (localStorage.getItem('app-theme') as Theme) || 'light'
    setThemeState(savedTheme)
    applyThemeToDOM(savedTheme)
  }, [])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('app-theme', newTheme)
    applyThemeToDOM(newTheme)
  }

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useCustomTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useCustomTheme must be used within CustomThemeProvider')
  }
  return context
}
