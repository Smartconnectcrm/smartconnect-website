'use client'

import React from 'react'
import { useTheme, ThemeMode } from '../../../context/ThemeContext'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  const modes: { id: ThemeMode; label: string; icon: string }[] = [
    { id: 'light', label: 'Light', icon: '☀️' },
    { id: 'dark', label: 'Dark', icon: '🌙' },
    { id: 'neon', label: 'Neon', icon: '⚡' },
    { id: 'blue', label: 'Blue', icon: '🌊' },
  ]

  return (
    <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
      {modes.map((mode) => {
        const isActive = theme === mode.id
        return (
          <button
            key={mode.id}
            onClick={() => setTheme(mode.id)}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
              isActive
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
            title={`Switch to ${mode.label} mode`}
          >
            <span>{mode.icon}</span>
            <span className="hidden sm:inline">{mode.label}</span>
          </button>
        )
      })}
    </div>
  )
}
