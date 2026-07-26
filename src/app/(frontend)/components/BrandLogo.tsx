'use client'

import React from 'react'

export function BrandLogo({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const isDark = variant === 'dark'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* 100% Self-Contained Inline Vector Emblem (Never Breaks or Fails to Load) */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient
            id="scBlueGrad"
            x1="20"
            y1="20"
            x2="120"
            y2="220"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <linearGradient
            id="scGoldGrad"
            x1="100"
            y1="20"
            x2="220"
            y2="220"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>

          <filter id="scDropShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.3" />
          </filter>
        </defs>

        <g filter="url(#scDropShadow)">
          {/* Gold Ribbon Loop */}
          <path
            d="M 115 50 C 135 25, 175 25, 195 50 C 215 75, 215 115, 195 140 L 155 180 C 135 200, 105 200, 85 180 L 70 165 C 60 155, 60 140, 70 130 L 100 100 Z"
            fill="url(#scGoldGrad)"
          />

          {/* Blue Ribbon Loop */}
          <path
            d="M 125 190 C 105 215, 65 215, 45 190 C 25 165, 25 125, 45 100 L 85 60 C 105 40, 135 40, 155 60 L 170 75 C 180 85, 180 100, 170 110 L 140 140 Z"
            fill="url(#scBlueGrad)"
          />

          {/* Interlocking Joint */}
          <path
            d="M 105 95 C 115 85, 130 85, 140 95 L 150 105 C 160 115, 160 130, 150 140 Z"
            fill="url(#scGoldGrad)"
          />
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
