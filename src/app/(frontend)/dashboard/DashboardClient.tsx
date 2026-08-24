'use client'

import React, { useState } from 'react'
import {
  FileText,
  FolderKanban,
  TrendingUp,
  Users,
  PlusCircle,
  Moon,
  Sun,
  LogOut,
  ShieldCheck,
  Activity,
} from 'lucide-react'

type DashboardClientProps = {
  user: any
  telemetry: {
    proposalsCount: number
    tendersCount: number
    usersCount: number
    recentTenders: Array<{
      id: string
      title: string
      status: string
      createdAt: string
    }>
  }
}

export default function DashboardClient({ user, telemetry }: DashboardClientProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', nextTheme)
    setTheme(nextTheme)
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/users/logout', {
        method: 'POST',
        credentials: 'include',
      })
    } catch (err) {
      console.error('Logout failed:', err)
    } finally {
      window.location.href = '/login'
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: theme === 'dark' ? '#0b0f17' : '#f8fafc',
        color: theme === 'dark' ? '#f8fafc' : '#0f172a',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        transition: 'background-color 0.2s ease, color 0.2s ease',
      }}
    >
      {/* Header Bar */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 32px',
          borderBottom: `1px solid ${theme === 'dark' ? '#1e293b' : '#e2e8f0'}`,
          backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.8)' : '#ffffff',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #06B6D4 0%, #2563EB 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 12px rgba(6, 182, 212, 0.4)',
            }}
          >
            <ShieldCheck color="#ffffff" size={22} />
          </div>
          <div>
            <span style={{ fontSize: '18px', fontWeight: '800', letterSpacing: '-0.02em' }}>
              SmartConnect <span style={{ color: '#06B6D4' }}>CRM</span>
            </span>
            <span style={{ fontSize: '11px', display: 'block', opacity: 0.6, fontWeight: '600' }}>
              OPERATOR: {user?.email || 'Authenticated User'}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              border: `1px solid ${theme === 'dark' ? '#334155' : '#cbd5e1'}`,
              color: 'inherit',
              padding: '8px 14px',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: '600',
            }}
          >
            {theme === 'dark' ? (
              <Sun size={15} color="#FBBF24" />
            ) : (
              <Moon size={15} color="#475569" />
            )}
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>

          <a
            href="/admin/collections/proposals/create"
            style={{
              backgroundColor: '#06B6D4',
              color: '#ffffff',
              padding: '8px 16px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 0 12px rgba(6, 182, 212, 0.35)',
            }}
          >
            <PlusCircle size={15} /> New Proposal
          </a>

          <button
            onClick={handleLogout}
            style={{
              backgroundColor: 'transparent',
              border: `1px solid ${theme === 'dark' ? '#334155' : '#cbd5e1'}`,
              color: 'inherit',
              padding: '8px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <LogOut size={15} /> Sign Out
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '800', margin: 0, letterSpacing: '-0.02em' }}>
            Live Database Telemetry
          </h1>
          <p style={{ margin: '6px 0 0 0', opacity: 0.7, fontSize: '14px' }}>
            Direct PostgreSQL query statistics from your Payload 3 backend engine.
          </p>
        </div>

        {/* Live Metric Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '32px',
          }}
        >
          {/* Active Tenders Card */}
          <div
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : '#ffffff',
              border: `1px solid ${theme === 'dark' ? '#334155' : '#e2e8f0'}`,
              borderLeft: '4px solid #06B6D4',
              padding: '24px',
              borderRadius: '12px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={{
                  fontSize: '12px',
                  opacity: 0.7,
                  fontWeight: '700',
                  textTransform: 'uppercase',
                }}
              >
                Total Tenders
              </span>
              <FolderKanban color="#06B6D4" size={20} />
            </div>
            <div
              style={{
                fontSize: '36px',
                fontWeight: '800',
                margin: '12px 0 4px 0',
                color: '#06B6D4',
              }}
            >
              {telemetry.tendersCount}
            </div>
            <span style={{ fontSize: '12px', color: '#10B981', fontWeight: '600' }}>
              ● Live PostgreSQL Query
            </span>
          </div>

          {/* Proposals Generated Card */}
          <div
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : '#ffffff',
              border: `1px solid ${theme === 'dark' ? '#334155' : '#e2e8f0'}`,
              borderLeft: '4px solid #A855F7',
              padding: '24px',
              borderRadius: '12px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={{
                  fontSize: '12px',
                  opacity: 0.7,
                  fontWeight: '700',
                  textTransform: 'uppercase',
                }}
              >
                Proposals Built
              </span>
              <FileText color="#A855F7" size={20} />
            </div>
            <div
              style={{
                fontSize: '36px',
                fontWeight: '800',
                margin: '12px 0 4px 0',
                color: '#A855F7',
              }}
            >
              {telemetry.proposalsCount}
            </div>
            <span style={{ fontSize: '12px', color: '#A855F7', fontWeight: '600' }}>
              ✦ Synchronized Record Count
            </span>
          </div>

          {/* System Users Card */}
          <div
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : '#ffffff',
              border: `1px solid ${theme === 'dark' ? '#334155' : '#e2e8f0'}`,
              borderLeft: '4px solid #10B981',
              padding: '24px',
              borderRadius: '12px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={{
                  fontSize: '12px',
                  opacity: 0.7,
                  fontWeight: '700',
                  textTransform: 'uppercase',
                }}
              >
                System Accounts
              </span>
              <Users color="#10B981" size={20} />
            </div>
            <div
              style={{
                fontSize: '36px',
                fontWeight: '800',
                margin: '12px 0 4px 0',
                color: '#10B981',
              }}
            >
              {telemetry.usersCount}
            </div>
            <span style={{ fontSize: '12px', color: '#10B981', fontWeight: '600' }}>
              ● Registered Admin Users
            </span>
          </div>
        </div>

        {/* Live Tender Activity Table */}
        <div
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.3)' : '#ffffff',
            border: `1px solid ${theme === 'dark' ? '#334155' : '#e2e8f0'}`,
            borderRadius: '12px',
            padding: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Activity size={18} color="#06B6D4" />
            <h2 style={{ fontSize: '18px', fontWeight: '700', margin: 0 }}>Recent Tenders Feed</h2>
          </div>

          {telemetry.recentTenders.length === 0 ? (
            <p style={{ opacity: 0.6, fontSize: '14px', margin: 0 }}>No tenders registered yet.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {telemetry.recentTenders.map((tender) => (
                <div
                  key={tender.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    backgroundColor: theme === 'dark' ? '#0f172a' : '#f1f5f9',
                    border: `1px solid ${theme === 'dark' ? '#1e293b' : '#cbd5e1'}`,
                  }}
                >
                  <div>
                    <span style={{ fontWeight: '700', fontSize: '14px', display: 'block' }}>
                      {tender.title}
                    </span>
                    <span style={{ fontSize: '11px', opacity: 0.5 }}>ID: {tender.id}</span>
                  </div>
                  <a
                    href={`/admin/collections/tenders/${tender.id}`}
                    style={{
                      color: '#06B6D4',
                      fontSize: '12px',
                      fontWeight: '700',
                      textDecoration: 'none',
                    }}
                  >
                    View in CMS →
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
