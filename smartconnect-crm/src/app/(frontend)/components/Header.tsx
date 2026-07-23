'use client'

import React, { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { BrandLogo } from './BrandLogo'

function HeaderNav() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [lang, setLang] = useState('DE')

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
    setTheme(savedTheme)
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    const urlLang = searchParams.get('lang')
    const savedLang = localStorage.getItem('preferred_lang') || 'DE'
    const activeLang = urlLang || savedLang
    setLang(activeLang)
  }, [searchParams])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark')
    const nextTheme = isDark ? 'light' : 'dark'

    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)

    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value
    setLang(selectedLang)
    localStorage.setItem('preferred_lang', selectedLang)

    const params = new URLSearchParams(searchParams.toString())
    params.set('lang', selectedLang)
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <>
      {/* Absolute Top-Right Toggle */}
      <div className="absolute top-1.5 right-4 z-10">
        <button
          onClick={toggleTheme}
          className="inline-flex items-center justify-center w-7 h-7 rounded border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 text-xs cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      {/* Main Header Container */}
      <div className="max-w-[1240px] mx-auto px-5 h-[80px] flex items-center justify-between">
        {/* Brand Section */}
        <div className="flex items-center gap-3.5">
          <BrandLogo variant={theme === 'dark' ? 'dark' : 'light'} priority={true} />

          <div className="border-l border-slate-300 dark:border-slate-700 pl-3 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase leading-snug">
            Enterprise &<br />
            Public Sector
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm font-bold text-slate-900 dark:text-slate-100 no-underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            Leistungskatalog
          </Link>

          <Link
            href="/procurement"
            className="text-sm font-bold text-slate-900 dark:text-slate-100 no-underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            Procurement-Profil
          </Link>

          {/* CMS Admin Link */}
          <Link
            href="/admin"
            className="no-underline text-blue-600 dark:text-blue-400 font-bold text-xs inline-flex items-center gap-1 px-2.5 py-1.5 rounded bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-blue-900 hover:bg-blue-100 dark:hover:bg-slate-700"
            title="Payload CMS Portal"
          >
            <span>🔒</span> CMS Login
          </Link>

          {/* Language Dropdown */}
          <div className="relative inline-block">
            <select
              value={lang}
              onChange={handleLanguageChange}
              className="appearance-none bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded py-1.5 pl-2.5 pr-6 text-xs font-extrabold text-slate-900 dark:text-slate-100 cursor-pointer outline-none"
            >
              <option value="DE">🇩🇪 DE (Deutsch)</option>
              <option value="EN">🇪🇺 EN (English)</option>
              <option value="HU">🇭🇺 HU (Magyar)</option>
              <option value="FR">🇫🇷 FR (Français)</option>
              <option value="ES">🇪🇸 ES (Español)</option>
              <option value="IT">🇮🇹 IT (Italiano)</option>
              <option value="NL">🇳🇱 NL (Nederlands)</option>
              <option value="PL">🇵🇱 PL (Polski)</option>
            </select>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] pointer-events-none text-slate-500">
              ▼
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 ml-1">
            <Link
              href="/procurement#tender"
              className="no-underline text-white bg-slate-900 dark:bg-slate-800 px-3.5 py-2 rounded border border-slate-900 dark:border-slate-700 font-extrabold text-[11.5px] uppercase tracking-wide shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]"
            >
              RFP / Tender
            </Link>

            <Link
              href="/contact"
              className="no-underline text-black bg-amber-400 px-4 py-2 rounded border border-black font-extrabold text-[11.5px] uppercase tracking-wide shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-amber-300 transition-colors"
            >
              Kontakt
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default function Header() {
  return (
    <header
      className="sticky top-0 z-[9999] w-full border-b-2 border-black bg-white dark:bg-slate-900 dark:border-slate-700 dark:text-white transition-colors duration-200"
      style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}
    >
      <Suspense fallback={<div className="h-[80px]" />}>
        <HeaderNav />
      </Suspense>
    </header>
  )
}
