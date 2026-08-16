// src/app/(payload)/admin/layout.tsx
import React from 'react'
import '@payloadcms/next/css'
import '../../../admin.css'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      {/* 🖼️ Sharp Inline Vector SVG Node Watermark */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '750px',
          height: '750px',
          maxWidth: '90vw',
          maxHeight: '90vh',
          pointerEvents: 'none',
          zIndex: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.12, // Adjust opacity for subtle watermark balance
        }}
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: '100%', height: '100%', color: '#334155' }}
        >
          {/* Linked Node Vector Mark */}
          <path d="M 60,60 C 35,85 35,115 60,140 C 85,165 115,165 140,140 C 165,115 165,85 140,60 C 115,35 85,35 60,60 Z" />
          <path d="M 140,60 C 165,85 165,115 140,140 C 115,165 85,165 60,140 C 35,115 35,85 60,60 C 85,35 115,35 140,60 Z" />
          <path d="M 75,75 L 125,125" />
          <path d="M 125,75 L 75,125" />
        </svg>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  )
}
