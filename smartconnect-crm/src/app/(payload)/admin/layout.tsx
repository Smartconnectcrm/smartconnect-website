// src/app/(payload)/admin/layout.tsx
import React from 'react'
import '@payloadcms/next/css'
import '../../../admin.css'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      {/* 🖼️ Seamless radial-masked node watermark */}
      <div className="admin-watermark-overlay" />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  )
}
