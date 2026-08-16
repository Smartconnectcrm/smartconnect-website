// src/app/(payload)/admin/layout.tsx
import React from 'react'
import '@payloadcms/next/css'
import '../../../admin.css'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      {/* 🖼️ Full viewport watermark overlay with multiply blend mode */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1000px',
          height: '1000px',
          maxWidth: '95vw',
          maxHeight: '95vh',
          backgroundImage: "url('/smartconnect.logo.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'contain',
          mixBlendMode: 'multiply', // Dissolves the off-white image box onto white backgrounds
          opacity: 0.18,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  )
}
