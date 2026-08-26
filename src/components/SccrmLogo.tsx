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
        backgroundColor: 'transparent',
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
          backgroundColor: 'transparent',
          filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5))',
        }}
      />
    </div>
  )
}

// Return transparent rendering for sidebar/icon contexts
export const SccrmIcon: React.FC = () => (
  <img
    src="/logo.png"
    alt="SmartConnect CRM Icon"
    style={{
      width: '24px',
      height: 'auto',
      display: 'block',
      objectFit: 'contain',
      backgroundColor: 'transparent',
    }}
  />
)

export default SccrmLogo
