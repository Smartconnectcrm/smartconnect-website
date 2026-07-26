'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

export type ThemeMode = 'light' | 'dark' | 'neon' | 'blue'

interface ThemeContextType {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeMode>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Load saved theme or fall back to 'light'
    const savedTheme = (localStorage.getItem('sc_theme') as ThemeMode) || 'light'
    setThemeState(savedTheme)
    applyTheme(savedTheme)
    setMounted(true)
  }, [])

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme)
    localStorage.setItem('sc_theme', newTheme)
    applyTheme(newTheme)
  }

  const applyTheme = (mode: ThemeMode) => {
    const root = document.documentElement
    // Remove previous theme classes
    root.classList.remove('theme-light', 'theme-dark', 'theme-neon', 'theme-blue')
    // Add current theme class
    root.classList.add(`theme-${mode}`)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* Prevent hydration mismatch flash before mounted */}
      <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>{children}</div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a CustomThemeProvider')
  }
  return context
}
