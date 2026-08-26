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
        height: '100%',
      }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '48px', height: '48px' }}
      >
        <rect width="100" height="100" rx="20" fill="url(#sccrm_grad)" />
        <path
          d="M30 50 L45 65 L70 35"
          stroke="#FFFFFF"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="sccrm_grad" x1="0" y1="0" x2="100" y2="100">
            <stop stopColor="#06B6D4" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export const SccrmIcon: React.FC = () => <SccrmLogo />

export default SccrmLogo
