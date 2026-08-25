'use client'

import React, { useState, useEffect } from 'react'

interface DashboardProps {
  user?: any
  metrics?: {
    tendersCount: number
    openRfpsCount: number
    proposalsCount: number
    aiProposalsCount: number
  }
  recentProposals?: any[]
}

export const CustomDashboard: React.FC<DashboardProps> = ({
  user,
  metrics,
  recentProposals = [],
}) => {
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
      {/* Header */}
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

      {/* Metrics Grid */}
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
            ● {metrics?.openRfpsCount ?? 0} Open RFPs
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
            ✦ {metrics?.aiProposalsCount ?? 0} AI Generated
          </span>
        </div>
      </div>

      {/* Recent Activity Feed */}
      <div
        style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid var(--theme-border-color, #1e293b)',
          borderRadius: '12px',
          padding: '24px',
        }}
      >
        <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>
          Recent Proposals
        </h2>

        {recentProposals.length === 0 ? (
          <p style={{ opacity: 0.6, fontSize: '14px', margin: 0 }}>
            No recent proposals recorded yet.
          </p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                fontSize: '14px',
              }}
            >
              <thead>
                <tr
                  style={{
                    borderBottom: '1px solid var(--theme-border-color, #334155)',
                    opacity: 0.7,
                  }}
                >
                  <th style={{ padding: '12px 8px' }}>Tender Name</th>
                  <th style={{ padding: '12px 8px' }}>Status</th>
                  <th style={{ padding: '12px 8px' }}>Updated At</th>
                  <th style={{ padding: '12px 8px', textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {recentProposals.map((item) => (
                  <tr key={item.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '12px 8px', fontWeight: '600' }}>
                      {item.tenderName || 'Untitled Proposal'}
                    </td>
                    <td style={{ padding: '12px 8px' }}>
                      <span
                        style={{
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: '700',
                          background:
                            item.status === 'draft'
                              ? 'rgba(168, 85, 247, 0.2)'
                              : 'rgba(6, 182, 212, 0.2)',
                          color: item.status === 'draft' ? '#C084FC' : '#22D3EE',
                        }}
                      >
                        {item.status || 'Draft'}
                      </span>
                    </td>
                    <td style={{ padding: '12px 8px', opacity: 0.7, fontSize: '13px' }}>
                      {new Date(item.updatedAt).toLocaleDateString()}
                    </td>
                    <td style={{ padding: '12px 8px', textAlign: 'right' }}>
                      <a
                        href={`/admin/collections/proposals/${item.id}`}
                        style={{ color: '#38BDF8', textDecoration: 'none', fontWeight: '600' }}
                      >
                        Edit →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomDashboard
