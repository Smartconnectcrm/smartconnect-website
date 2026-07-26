'use client'

import React from 'react'

export function BrandLogo({
  variant = 'light',
  priority,
}: {
  variant?: 'light' | 'dark'
  priority?: boolean
}) {
  const isDark = variant === 'dark'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Exact Vector Recreation of the Interlocking Loop Logo */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          {/* Brushed Blue Metallic Gradient */}
          <linearGradient
            id="scBlueGrad"
            x1="30"
            y1="30"
            x2="170"
            y2="170"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>

          {/* Brushed Gold/Bronze Metallic Gradient */}
          <linearGradient
            id="scGoldGrad"
            x1="170"
            y1="30"
            x2="30"
            y2="170"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>

          {/* Bevel Shadow Filter */}
          <filter id="scShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.3" />
          </filter>
        </defs>

        <g filter="url(#scShadow)">
          {/* Gold Interlocking Loop Component */}
          <path
            d="M 60 70 
               C 45 85, 45 115, 60 130 
               L 80 150 
               C 95 165, 120 165, 135 150 
               L 145 140 
               C 152 133, 152 122, 145 115 
               L 130 100 
               L 115 115 
               L 125 125 
               C 128 128, 128 132, 125 135 
               C 118 142, 107 142, 100 135 
               L 80 115 
               C 72 107, 72 93, 80 85 
               L 90 75 
               L 75 60 
               Z"
            fill="url(#scGoldGrad)"
          />

          {/* Blue Interlocking Loop Component */}
          <path
            d="M 140 130 
               C 155 115, 155 85, 140 70 
               L 120 50 
               C 105 35, 80 35, 65 50 
               L 55 60 
               C 48 67, 48 78, 55 85 
               L 70 100 
               L 85 85 
               L 75 75 
               C 72 72, 72 68, 75 65 
               C 82 58, 93 58, 100 65 
               L 120 85 
               C 128 93, 128 107, 120 115 
               L 110 125 
               L 125 140 
               Z"
            fill="url(#scBlueGrad)"
          />

          {/* Central Intersecting Joint Overlap */}
          <path d="M 85 85 L 115 115 L 100 130 L 70 100 Z" fill="url(#scBlueGrad)" />
        </g>
      </svg>

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
        <span
          style={{
            color: isDark ? '#38bdf8' : '#2563eb',
            transition: 'color 0.2s ease',
          }}
        >
          SmartConnect
        </span>
        <span style={{ color: '#fbbf24' }}>CRM</span>
      </span>
    </div>
  )
}
