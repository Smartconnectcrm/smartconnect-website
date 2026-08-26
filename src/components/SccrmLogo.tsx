'use client'

import React from 'react'

export const SccrmLogo: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        background: 'transparent',
        padding: '4px 0',
      }}
    >
      <img
        src="/logo.png"
        alt="SmartConnect CRM Logo"
        style={{
          width: '56px',
          height: 'auto',
          display: 'block',
          objectFit: 'contain',
          background: 'transparent',
          filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4))',
        }}
      />
    </div>
  )
}

export const SccrmIcon: React.FC = () => (
  <img
    src="/logo.png"
    alt="SmartConnect CRM Icon"
    style={{
      width: '28px',
      height: 'auto',
      display: 'block',
      objectFit: 'contain',
      background: 'transparent',
    }}
  />
)

export default SccrmLogo
