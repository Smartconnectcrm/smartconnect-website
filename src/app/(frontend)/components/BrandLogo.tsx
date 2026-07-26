'use client'

import React from 'react'
import Image from 'next/image'

export function BrandLogo({
  variant = 'light',
  priority = false,
}: {
  variant?: 'light' | 'dark'
  priority?: boolean
}) {
  const isDark = variant === 'dark'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Brand Mark Image */}
      <Image
        src="/media/logo_white.png"
        alt="SmartConnect CRM Logo"
        width={34}
        height={34}
        priority={priority}
        style={{ objectFit: 'contain', flexShrink: 0 }}
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
        {/* SmartConnect: Bright blue on dark/blue/neon themes, corporate blue on light themes */}
        <span
          style={{
            color: isDark ? '#60a5fa' : '#2563eb',
            transition: 'color 0.2s ease',
          }}
        >
          SmartConnect
        </span>

        {/* CRM: Gold across all themes */}
        <span style={{ color: '#fbbf24' }}>CRM</span>
      </span>
    </div>
  )
}
