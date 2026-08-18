'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

export type ThemeMode = 'light' | 'dark' | 'neon' | 'blue'
export type Theme = ThemeMode // Alias for Header.tsx

interface ThemeContextType {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeMode>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
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
    root.classList.remove('theme-light', 'theme-dark', 'theme-neon', 'theme-blue')
    root.classList.add(`theme-${mode}`)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
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

export const useCustomTheme = useTheme // Alias for Header.tsx
