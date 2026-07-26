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
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {/* Exact 3D Circular Coin Emblem SVG */}
      <svg
        width="42"
        height="42"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          {/* Metallic Gold / Bronze Ring Gradient */}
          <linearGradient id="scCoinGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="25%" stopColor="#d97706" />
            <stop offset="50%" stopColor="#b45309" />
            <stop offset="75%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>

          {/* Brushed Blue Interlocking Loop Gradient */}
          <linearGradient id="scLoopBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          {/* Brushed Gold Interlocking Loop Gradient */}
          <linearGradient id="scLoopGold" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>

          {/* Circular Path for Top Outer Text */}
          <path id="scTopTextPath" d="M 65 250 A 185 185 0 1 1 435 250" />

          {/* Circular Path for Bottom Outer Text */}
          <path id="scBottomTextPath" d="M 435 250 A 185 185 0 0 1 65 250" />

          {/* Soft 3D Drop Shadow */}
          <filter id="sc3dDepth" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.45" />
          </filter>
        </defs>

        <g filter="url(#sc3dDepth)">
          {/* Outer Gold Coin Bevel Rim */}
          <circle
            cx="250"
            cy="250"
            r="240"
            fill="url(#scCoinGold)"
            stroke="#fef08a"
            strokeWidth="3"
          />

          {/* Inner Dark Rim Recess */}
          <circle
            cx="250"
            cy="250"
            r="215"
            fill="#1e1810"
            stroke="url(#scCoinGold)"
            strokeWidth="4"
          />

          {/* Inner Transparent Glass Core Background */}
          <circle
            cx="250"
            cy="250"
            r="160"
            fill="var(--bg-card, #0f172a)"
            fillOpacity="0.85"
            stroke="url(#scCoinGold)"
            strokeWidth="3"
          />

          {/* Outer Engraved Top Arch Text */}
          <text fill="#fef08a" fontSize="21" fontWeight="800" letterSpacing="2.5">
            <textPath href="#scTopTextPath" startOffset="50%" textAnchor="middle">
              SMARTCONNECT CRM UG (HAFTUNGSBESCHRÄNKT)
            </textPath>
          </text>

          {/* Outer Engraved Bottom Arch Text */}
          <text fill="#fef08a" fontSize="19" fontWeight="800" letterSpacing="2">
            <textPath href="#scBottomTextPath" startOffset="50%" textAnchor="middle">
              • HRB 110351 • AMTSGERICHT DÜSSELDORF
            </textPath>
          </text>

          {/* Center Interlocking Blue/Gold Mark */}
          <g transform="translate(130, 125) scale(0.95)">
            {/* Gold Interlocking Loop */}
            <path
              d="M 80 80 C 60 100, 60 140, 80 160 L 110 190 C 130 210, 170 210, 190 190 L 205 175 C 215 165, 215 150, 205 140 L 180 115 L 160 135 L 175 150 C 180 155, 180 160, 175 165 C 165 175, 150 175, 140 165 L 110 135 C 100 125, 100 105, 110 95 L 125 80 L 105 60 Z"
              fill="url(#scLoopGold)"
              stroke="#78350f"
              strokeWidth="2"
            />

            {/* Blue Interlocking Loop */}
            <path
              d="M 170 170 C 190 150, 190 110, 170 90 L 140 60 C 120 40, 80 40, 60 60 L 45 75 C 35 85, 35 100, 45 110 L 70 135 L 90 115 L 75 100 C 70 95, 70 90, 75 85 C 85 75, 100 75, 110 85 L 140 115 C 150 125, 150 145, 140 155 L 125 170 L 145 190 Z"
              fill="url(#scLoopBlue)"
              stroke="#0f172a"
              strokeWidth="2"
            />

            {/* Overlap Intersect Joint */}
            <path d="M 120 115 L 150 145 L 135 160 L 105 130 Z" fill="url(#scLoopBlue)" />
          </g>

          {/* Bottom City Accent Text */}
          <text
            x="250"
            y="350"
            fill="url(#scCoinGold)"
            fontSize="18"
            fontWeight="900"
            letterSpacing="3"
            textAnchor="middle"
          >
            DÜSSELDORF • GERMANY
          </text>
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
            color: isDark ? '#38bdf8' : '#2563eb', // High contrast cyan on dark/blue/neon themes
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
