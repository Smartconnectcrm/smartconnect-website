'use client'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

export const SccrmLogo: React.FC = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {/* 🖼️ Full-screen fixed background watermark injected via Portal */}
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
              backgroundSize: 'min(700px, 80vw) auto',
              opacity: 0.15,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />,
          document.body,
        )}

      {/* 🏷️ Header Logo Graphic */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <img
          src="/smartconnect.logo.png"
          alt="SmartConnect Logo"
          style={{ width: '64px', height: 'auto', display: 'block' }}
        />
        <h1
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            margin: 0,
            color: 'var(--theme-elevation-800, #ffffff)',
          }}
        >
          SCCRM Admin
        </h1>
        <div
          style={{
            fontSize: '0.75rem',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: 'var(--theme-elevation-500, #94a3b8)',
          }}
        >
          SmartConnect CRM
        </div>
      </div>
    </>
  )
}

export const SccrmIcon: React.FC = () => {
  return (
    <img
      src="/smartconnect.logo.png"
      alt="SCCRM"
      style={{ width: '28px', height: 'auto', display: 'block' }}
    />
  )
}

export default SccrmLogo
