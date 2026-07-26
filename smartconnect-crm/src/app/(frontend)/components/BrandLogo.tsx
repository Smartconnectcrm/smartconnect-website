import React from 'react'

export const BrandLogo = ({
  variant = 'light',
  priority = false,
}: {
  variant?: 'light' | 'dark'
  priority?: boolean
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {/* Official Mark / Icon */}
      <img
        src="/media/logo_white.png"
        alt="SmartConnect Logo"
        width={32}
        height={32}
        style={{ objectFit: 'contain' }}
      />

      {/* Brand Text styled strictly as requested */}
      <span
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontWeight: 900,
          fontSize: '18px',
          letterSpacing: '-0.02em',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        {/* SmartConnect -> Corporate Blue */}
        <span style={{ color: '#2563eb' }}>SmartConnect</span>

        {/* CRM -> Gold */}
        <span style={{ color: '#f59e0b' }}>CRM</span>
      </span>
    </div>
  )
}
