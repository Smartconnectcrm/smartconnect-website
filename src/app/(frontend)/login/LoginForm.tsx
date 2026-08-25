'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Lock, Mail } from 'lucide-react'
import { SccrmLogo } from '@/components/SccrmLogo' // Adjust path if needed

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const searchParams = useSearchParams()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })

      if (res.ok) {
        const redirectTarget = searchParams.get('redirect') || '/admin'
        router.push(redirectTarget)
      } else {
        const data = await res.json()
        setError(data.errors?.[0]?.message || 'Invalid email or password.')
      }
    } catch (err) {
      setError('Connection failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '420px',
        backgroundColor: 'rgba(15, 23, 42, 0.85)',
        border: '1px solid #1e293b',
        borderRadius: '16px',
        padding: '36px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(12px)',
        overflow: 'hidden',
      }}
    >
      {/* Carved Background Watermark Logo */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '320px',
          height: '320px',
          opacity: 0.04,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <SccrmLogo />
      </div>

      {/* Main Login Form Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ color: '#ffffff', fontSize: '22px', fontWeight: '800', margin: 0 }}>
            SmartConnect Procurement
          </h1>

          {/* Centered Brand Logo */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '12px 0',
            }}
          >
            <div style={{ width: '42px', height: '42px' }}>
              <SccrmLogo />
            </div>
          </div>

          <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>
            Enterprise Engine Control Center
          </p>
        </div>

        {error && (
          <div
            style={{
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid #ef4444',
              color: '#fca5a5',
              padding: '10px 14px',
              borderRadius: '8px',
              fontSize: '13px',
              marginBottom: '20px',
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '18px' }}>
            <label
              style={{
                display: 'block',
                color: '#94a3b8',
                fontSize: '12px',
                fontWeight: '700',
                marginBottom: '6px',
              }}
            >
              WORK EMAIL
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@smartconnectcrm.eu"
                style={{
                  width: '100%',
                  backgroundColor: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  padding: '12px 14px 12px 40px',
                  color: '#ffffff',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
              <Mail
                size={16}
                color="#64748b"
                style={{ position: 'absolute', left: '14px', top: '14px' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label
              style={{
                display: 'block',
                color: '#94a3b8',
                fontSize: '12px',
                fontWeight: '700',
                marginBottom: '6px',
              }}
            >
              PASSWORD
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                style={{
                  width: '100%',
                  backgroundColor: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  padding: '12px 14px 12px 40px',
                  color: '#ffffff',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
              <Lock
                size={16}
                color="#64748b"
                style={{ position: 'absolute', left: '14px', top: '14px' }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              backgroundColor: '#06B6D4',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '12px',
              fontSize: '14px',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 0 16px rgba(6, 182, 212, 0.4)',
            }}
          >
            {loading ? 'Authenticating...' : 'Sign In to SmartConnect'}
          </button>
        </form>
      </div>
    </div>
  )
}
