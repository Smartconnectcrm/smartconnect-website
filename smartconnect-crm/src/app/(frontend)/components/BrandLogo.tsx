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
      <img
        src="https://i.postimg.cc/mkn4Ywn7/LOGO-Chain.png"
        alt="SmartConnect CRM Logo"
        width="38"
        height="38"
        style={{
          objectFit: 'contain',
          flexShrink: 0,
          borderRadius: '50%',
          display: 'block',
        }}
      />
      <span
        style={{
          fontSize: '20px',
          fontWeight: '900',
          color: 'var(--text-primary, #0f172a)',
          letterSpacing: '-0.02em',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          whiteSpace: 'nowrap',
        }}
      >
        SmartConnect <span style={{ color: '#fbbf24' }}>CRM</span>
      </span>
    </Link>
  )
}
