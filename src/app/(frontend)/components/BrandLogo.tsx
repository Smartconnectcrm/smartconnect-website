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
      {/* Direct 3D Logo Asset with standard img element */}
      <img
        src="https://i.postimg.cc/cHXm12qd/3D-Smart-Connect-LOGO.png"
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

      {/* Brand Text */}
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
