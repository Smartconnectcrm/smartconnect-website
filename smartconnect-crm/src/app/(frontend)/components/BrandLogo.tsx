'use client'

import React from 'react'

export function BrandLogo({ priority = false }: { priority?: boolean }) {
  return (
<<<<<<< Updated upstream
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
=======
    <Link
      href="/"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none',
      }}
      title="SmartConnect CRM - Home"
    >
      {/* 3D Logo Image */}
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

      {/* Brand Company Name */}
      <span
        style={{
          fontSize: '20px',
          fontWeight: '900',
          color: 'var(--text-primary, #0f172a)',
          letterSpacing: '-0.02em',
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        <span style={{ color: '#2563eb' }}>SmartConnect</span>
        <span style={{ color: '#f59e0b' }}>CRM</span>
=======
        SmartConnect <span style={{ color: '#fbbf24' }}>CRM</span>
>>>>>>> Stashed changes
      </span>
    </div>
  )
}
