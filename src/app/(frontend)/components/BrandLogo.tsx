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
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Image
        src="/media/logo_white.png"
        alt="SmartConnect CRM Logo"
        width={34}
        height={34}
        priority={priority}
        style={{ objectFit: 'contain', flexShrink: 0 }}
      />

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
        <span style={{ color: '#2563eb' }}>SmartConnect</span>
        <span style={{ color: '#f59e0b' }}>CRM</span>
      </span>
    </div>
  )
}
