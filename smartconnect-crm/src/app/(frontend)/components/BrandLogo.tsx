import React from 'react'
import Link from 'next/link'

interface BrandLogoProps {
  variant?: 'light' | 'dark'
  priority?: boolean
}

export const BrandLogo: React.FC<BrandLogoProps> = () => {
  return (
    <Link
      href="/"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none',
      }}
      title="SmartConnect CRM - Home"
    >
      {/* Interconnected Metallic Infinity Mark */}
      <div
        style={{
          width: '38px',
          height: '38px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <svg
          viewBox="0 0 100 100"
          width="38"
          height="38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>

          {/* Left Loop (Blue) */}
          <path
            d="M 32,25 C 18,25 10,36 10,50 C 10,64 18,75 32,75 C 44,75 52,63 60,50 C 52,37 44,25 32,25 Z"
            stroke="url(#blueGrad)"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right Loop (Gold) */}
          <path
            d="M 68,25 C 82,25 90,36 90,50 C 90,64 82,75 68,75 C 56,75 48,63 40,50 C 48,37 56,25 68,25 Z"
            stroke="url(#goldGrad)"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand Company Name */}
      <span
        style={{
          fontSize: '20px',
          fontWeight: '900',
          color: '#0f172a',
          letterSpacing: '-0.02em',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          whiteSpace: 'nowrap',
        }}
      >
        SmartConnect <span style={{ color: '#2563eb' }}>CRM</span>
      </span>
    </Link>
  )
}
