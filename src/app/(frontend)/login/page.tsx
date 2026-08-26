import React, { Suspense } from 'react'
import LoginForm from './LoginForm'

// Force dynamic rendering on the server entry point
export const dynamic = 'force-dynamic'

export default function LoginPage() {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#0b0f17',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        overflow: 'hidden',
      }}
    >
      {/* 1. Centered Background Watermark Logo */}
      <img
        src="/smartconnect.logo.png"
        alt="Background Watermark"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '550px',
          height: '550px',
          maxWidth: '80vw',
          maxHeight: '80vh',
          objectFit: 'contain',
          opacity: 0.12,
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.3))',
        }}
      />

      {/* 2. Login Form Wrapper */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Suspense
          fallback={
            <div style={{ color: '#64748b', fontSize: '14px' }}>Loading control center...</div>
          }
        >
          <LoginForm />
        </Suspense>
      </div>
    </div>
  )
}
