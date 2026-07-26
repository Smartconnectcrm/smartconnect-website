'use client'

import React from 'react'

export function BrandLogo({
  variant = 'light',
}: {
  variant?: 'light' | 'dark'
  priority?: boolean
}) {
  const isDark = variant === 'dark'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Restored Original Metallic Ribbon Mark from logo_white.png */}
      <img
        src="/media/logo_white.png?v=2"
        alt="SmartConnect CRM Logo"
        width="34"
        height="34"
        style={{ objectFit: 'contain', flexShrink: 0 }}
      />

      {/* High-Contrast Brand Text */}
      <span
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontWeight: 900,
          fontSize: '18px',
          letterSpacing: '-0.02em',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          whiteSpace: 'nowrap',
        }}
      >
        <span
          style={{
            color: isDark ? '#38bdf8' : '#2563eb',
            transition: 'color 0.2s ease',
          }}
        >
          SmartConnect
        </span>
        <span style={{ color: '#fbbf24' }}>CRM</span>
      </span>
    </div>
  )
}
