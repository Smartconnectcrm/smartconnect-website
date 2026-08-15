// src/components/SccrmLogo.tsx
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

export const SccrmLogo: React.FC = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {/* 🖼️ Full-screen fixed background watermark */}
      {mounted &&
        ReactDOM.createPortal(
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundImage: "url('/smartconnect.logo.png')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'min(700px, 80vw) auto', // Broad, responsive sizing
              opacity: 0.18, // Clean contrast balance
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />,
          document.body,
        )}

      {/* 🏷️ Header Branding */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: '1.4rem',
            fontWeight: 'bold',
            margin: 0,
            color: 'var(--theme-elevation-800, #1E293B)',
          }}
        >
          SCCRM Admin
        </h1>

        <div
          style={{
            fontSize: '0.85rem',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: 'var(--theme-elevation-500, #64748B)',
          }}
        >
          SmartConnect CRM
        </div>
      </div>
    </>
  )
}

export const SccrmIcon: React.FC = () => {
  return <div style={{ fontWeight: 'bold', fontSize: '1rem', color: '#1E293B' }}>SCCRM</div>
}

export default SccrmLogo
