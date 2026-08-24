'use client'
import React from 'react'

export const SccrmLogo: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
      <h1
        style={{
          fontSize: '1.2rem',
          fontWeight: '800',
          margin: 0,
          color: 'var(--theme-text)',
          letterSpacing: '-0.01em',
        }}
      >
        SCCRM Admin
      </h1>
      <div
        style={{
          fontSize: '0.75rem',
          fontWeight: '700',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          color: 'var(--neon-blue, #38BDF8)',
        }}
      >
        SmartConnect CRM
      </div>
    </div>
  )
}

export default SccrmLogo
