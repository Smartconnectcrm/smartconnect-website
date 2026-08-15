// src/app/(payload)/admin/layout.tsx
import React from 'react'
import '@payloadcms/next/css'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      {/* 🖼️ Full-screen broad watermark overlay */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '900px',
          maxWidth: '90vw',
          maxHeight: '90vh',
          backgroundImage: "url('/smartconnect.logo.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'contain',
          mixBlendMode: 'multiply', // Blends out white background square completely
          opacity: 0.16,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  )
}
