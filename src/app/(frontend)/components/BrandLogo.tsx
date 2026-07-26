'use client'

import React from 'react'

export function BrandLogo({
  variant = 'light',
  priority, // Destructure priority to prevent prop bleed warning
}: {
  variant?: 'light' | 'dark'
  priority?: boolean
}) {
  const isDark = variant === 'dark'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Precision 3D Interlocking Ribbon Emblem */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          {/* Blue Loop Metallic Gradient */}
          <linearGradient
            id="scBlueMetallic"
            x1="20"
            y1="20"
            x2="140"
            y2="180"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="35%" stopColor="#3b82f6" />
            <stop offset="70%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          {/* Gold Loop Metallic Gradient */}
          <linearGradient
            id="scGoldMetallic"
            x1="80"
            y1="20"
            x2="180"
            y2="180"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="30%" stopColor="#f59e0b" />
            <stop offset="70%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>

          {/* Soft Emboss Drop Shadow */}
          <filter id="sc3dShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.4" />
          </filter>
        </defs>

        <g filter="url(#sc3dShadow)">
          {/* Bottom Layer: Full Gold Loop */}
          <path
            d="M 100 55
               C 120 30, 160 30, 175 50
               C 190 70, 190 100, 175 120
               L 145 150
               C 130 165, 110 165, 95 150
               L 80 135
               C 70 125, 70 110, 80 100
               L 100 80
               C 110 70, 125 70, 135 80
               C 145 90, 145 105, 135 115
               L 125 125
               L 110 110
               L 120 100
               C 122 98, 122 94, 120 92
               C 118 90, 114 90, 112 92
               L 95 110
               C 88 117, 88 128, 95 135
               C 102 142, 113 142, 120 135
               L 155 100
               C 165 90, 165 75, 155 65
               C 145 55, 130 55, 120 65
               Z"
            fill="url(#scGoldMetallic)"
          />

          {/* Middle Layer: Blue Interlocking Loop */}
          <path
            d="M 100 145
               C 80 170, 40 170, 25 150
               C 10 130, 10 100, 25 80
               L 55 50
               C 70 35, 90 35, 105 50
               L 120 65
               C 130 75, 130 90, 120 100
               L 100 120
               C 90 130, 75 130, 65 120
               C 55 110, 55 95, 65 85
               L 75 75
               L 90 90
               L 80 100
               C 78 102, 78 106, 80 108
               C 82 110, 86 110, 88 108
               L 105 90
               C 112 83, 112 72, 105 65
               C 98 58, 87 58, 80 65
               L 45 100
               C 35 110, 35 125, 45 135
               C 55 145, 70 145, 80 135
               Z"
            fill="url(#scBlueMetallic)"
          />

          {/* Top Layer: Overlap Bridge for the 3D Weave Effect */}
          <path d="M 85 70 L 115 100 L 100 115 L 70 85 Z" fill="url(#scBlueMetallic)" />
        </g>
      </svg>

      {/* Dynamic Contrast Text */}
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
            color: isDark ? '#38bdf8' : '#2563eb', // Light cyan on dark/neon, blue on light
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
