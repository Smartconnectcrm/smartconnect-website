// src/app/(payload)/admin/layout.tsx
import React from 'react'
import '@payloadcms/next/css'
import '../../../admin.css'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100vw', overflowX: 'hidden' }}>
      {/* 🖼️ Full viewport watermark layer */}
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
          backgroundSize: 'min(800px, 85vw) auto',
          mixBlendMode: 'multiply', // Blends out the off-white image box completely
          opacity: 0.2,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  )
}
