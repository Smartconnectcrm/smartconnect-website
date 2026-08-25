import React, { Suspense } from 'react'
import LoginForm from './LoginForm'

// Force dynamic rendering on the server entry point
export const dynamic = 'force-dynamic'

export default function LoginPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0b0f17',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <Suspense
        fallback={
          <div style={{ color: '#64748b', fontSize: '14px' }}>Loading control center...</div>
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  )
}
