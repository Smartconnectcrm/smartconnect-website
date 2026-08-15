// src/app/(payload)/admin/layout.tsx
import React from 'react'
import '@payloadcms/next/css'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      {/* 🖼️ Blend-mode full-bleed watermark without square borders */}
      <div className="admin-watermark" />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  )
}
