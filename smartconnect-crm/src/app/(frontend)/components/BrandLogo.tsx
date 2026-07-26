'use client'

import React from 'react'

export function BrandLogo({ priority = false }: { priority?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Official Interlocking Ring Mark (No PNG) */}
      <svg
        width="34"
        height="22"
        viewBox="0 0 40 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <path
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c3.822 0 7.14-2.148 8.84-5.31C19.14 19.852 15.822 22 12 22 6.477 22 2 17.523 2 12S6.477 2 12 2z"
          fill="#f59e0b"
        />
        <path
          d="M28 22c5.523 0 10-4.477 10-10S33.523 2 28 2c-3.822 0-7.14 2.148-8.84 5.31C20.86 4.148 24.178 2 28 2c5.523 0 10 4.477 10 10s-4.477 10-10 10z"
          fill="#2563eb"
        />
        <circle cx="12" cy="12" r="6" stroke="#f59e0b" strokeWidth="3" fill="none" />
        <circle cx="28" cy="12" r="6" stroke="#2563eb" strokeWidth="3" fill="none" />
      </svg>

      {/* Corporate Brand Name */}
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
