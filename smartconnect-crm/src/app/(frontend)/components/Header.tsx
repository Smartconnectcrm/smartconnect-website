import React from 'react'
import Link from 'next/link'
import { BrandLogo } from './BrandLogo'

export default function Header() {
  return (
    <header
      style={{
        width: '100%',
        borderBottom: '2px solid black',
        backgroundColor: '#ffffff',
        position: 'sticky',
        top: 0,
        zIndex: 100, // Elevated layer so cards don't bleed through
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
        }}
      >
        {/* Brand Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <BrandLogo variant="light" priority={true} />

          <div
            style={{
              borderLeft: '1px solid #ccc',
              paddingLeft: '12px',
              fontSize: '11px',
              fontWeight: '700',
              color: '#555',
              textTransform: 'uppercase',
              lineHeight: '1.3',
            }}
          >
            Enterprise &<br />
            Public Sector
          </div>
        </div>

        {/* Navigation Section */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              color: '#000000',
              fontWeight: '700',
              fontSize: '14px',
            }}
          >
            Leistungskatalog
          </Link>
          <Link
            href="/procurement"
            style={{
              textDecoration: 'none',
              color: '#000000',
              fontWeight: '700',
              fontSize: '14px',
            }}
          >
            Procurement-Profil
          </Link>
          <Link
            href="/contact"
            style={{
              textDecoration: 'none',
              color: '#000000',
              backgroundColor: '#fbbf24',
              padding: '10px 20px',
              borderRadius: '4px',
              border: '1px solid #000000',
              fontWeight: '800',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              boxShadow: '2px 2px 0px 0px #000000',
            }}
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  )
}
