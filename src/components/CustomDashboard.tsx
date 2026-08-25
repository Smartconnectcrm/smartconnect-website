'use client'

import React, { useState, useEffect } from 'react'
import type { User } from '@/payload-types' // Adjust path if payload-types is located elsewhere, or use `any`

interface DashboardProps {
  user?: User | any
  metrics?: {
    tendersCount: number
    proposalsCount: number
  }
}

export const CustomDashboard: React.FC<DashboardProps> = ({ user, metrics }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const currentTheme =
        (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'dark'
      setTheme(currentTheme)
    }
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem('payload-theme', nextTheme)
    setTheme(nextTheme)
  }

  return (
    <div
      style={{
        padding: '32px',
        background: 'var(--theme-bg, #0b0f17)',
        color: 'var(--theme-text, #f8fafc)',
        minHeight: '100vh',
        transition: 'all 0.2s ease',
      }}
    >
      {/* Top Bar Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px',
          borderBottom: '1px solid var(--theme-border-color, #1e293b)',
          paddingBottom: '20px',
        }}
      >
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: '800', margin: 0, letterSpacing: '-0.02em' }}>
            SmartConnect Procurement Engine
          </h1>
          <p style={{ margin: '6px 0 0 0', opacity: 0.7, fontSize: '14px' }}>
            Enterprise Tenders, Proposals & Telemetry Overview
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {user?.email && (
            <span style={{ fontSize: '13px', opacity: 0.8, marginRight: '8px' }}>
              Logged in: <strong>{user.email}</strong>
            </span>
          )}

          <a
            href="/admin/collections/proposals/create"
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
              color: '#FFFFFF',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '700',
              textDecoration: 'none',
              boxShadow: '0 0 15px rgba(6, 182, 212, 0.35)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            ⚡ Quick Proposal
          </a>

          <button
            onClick={toggleTheme}
            type="button"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'var(--theme-text, #ffffff)',
              border: '1px solid var(--theme-border-color, #38BDF8)',
              padding: '10px 18px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '32px',
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid var(--theme-border-color, #1e293b)',
            borderLeft: '4px solid #06B6D4',
            padding: '24px',
            borderRadius: '12px',
          }}
        >
          <span
            style={{
              fontSize: '11px',
              opacity: 0.6,
              fontWeight: '700',
              textTransform: 'uppercase',
            }}
          >
            Active Tenders
          </span>
          <div
            style={{
              fontSize: '36px',
              fontWeight: '800',
              margin: '12px 0 4px 0',
              color: '#06B6D4',
            }}
          >
            {metrics?.tendersCount ?? 0}
          </div>
          <span style={{ fontSize: '12px', color: '#10B981', fontWeight: '600' }}>
            ● Live Collection Docs
          </span>
        </div>

        <div
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid var(--theme-border-color, #1e293b)',
            borderLeft: '4px solid #A855F7',
            padding: '24px',
            borderRadius: '12px',
          }}
        >
          <span
            style={{
              fontSize: '11px',
              opacity: 0.6,
              fontWeight: '700',
              textTransform: 'uppercase',
            }}
          >
            Draft Proposals
          </span>
          <div
            style={{
              fontSize: '36px',
              fontWeight: '800',
              margin: '12px 0 4px 0',
              color: '#A855F7',
            }}
          >
            {metrics?.proposalsCount ?? 0}
          </div>
          <span style={{ fontSize: '12px', color: '#A855F7', fontWeight: '600' }}>
            ✦ Live Collection Docs
          </span>
        </div>
      </div>
    </div>
  )
}

export default CustomDashboard
