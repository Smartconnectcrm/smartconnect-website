'use client'

import React from 'react'

export const SccrmLogo: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 'auto',
        maxHeight: '40px',
        backgroundColor: 'transparent',
        padding: '2px 0',
      }}
    >
      <img
        src="/logo.png"
        alt="SmartConnect CRM Logo"
        style={{
          height: '36px',
          width: 'auto',
          maxWidth: '100%',
          display: 'block',
          objectFit: 'contain',
          backgroundColor: 'transparent',
          filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4))',
        }}
      />
    </div>
  )
}

// Transparent rendering for collapsed sidebar and icon contexts
export const SccrmIcon: React.FC = () => (
  <img
    src="/logo.png"
    alt="SmartConnect CRM Icon"
    style={{
      width: '28px',
      height: '28px',
      display: 'block',
      objectFit: 'contain',
      backgroundColor: 'transparent',
    }}
  />
)

export default SccrmLogo
