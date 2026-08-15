// src/components/SccrmLogo.tsx
import React from 'react'

export const SccrmLogo: React.FC = () => {
  return (
    <>
      {/* 🖼️ Fixed Center Background Watermark Logo */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          backgroundImage: "url('/smartconnect.logo.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'contain',
          opacity: 0.35, // Increased visibility
          pointerEvents: 'none',
          zIndex: 1, // Elevated above white background templates
        }}
      />

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
