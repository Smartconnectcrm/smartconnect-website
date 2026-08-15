// src/components/SccrmLogo.tsx
import React from 'react'

export const SccrmLogo: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      {/* 🏷️ Title / Brand Name */}
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

      {/* 🖼️ SmartConnect CRM Subtitle / Logo */}
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

      {/* Or embed your <img> here:
      <img 
        src="/assets/smartconnect-logo.png" 
        alt="SmartConnect CRM" 
        style={{ maxHeight: '36px', width: 'auto' }} 
      /> 
      */}
    </div>
  )
}

export default SccrmLogo
