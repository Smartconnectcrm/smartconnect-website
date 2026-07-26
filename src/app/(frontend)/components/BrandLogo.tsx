'use client'

import React from 'react'

export function BrandLogo({
  variant = 'light',
  priority,
}: {
  variant?: 'light' | 'dark'
  priority?: boolean
}) {
  const isDark = variant === 'dark'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Self-contained 3D Logo (Handles primary image + CDN fallback gracefully) */}
      <img
        src="https://i.postimg.cc/cHXm12qd/3D-Smart-Connect-LOGO.png"
        onError={(e) => {
          // Fallback to local media path if CDN is blocked
          e.currentTarget.src = '/media/logo_white.png'
        }}
        alt="SmartConnect CRM Logo"
        width="38"
        height="38"
        style={{
          objectFit: 'contain',
          flexShrink: 0,
          borderRadius: '50%',
          display: 'block',
        }}
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
            color: isDark ? '#38bdf8' : '#2563eb', // Light cyan on dark/neon, blue on light
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
