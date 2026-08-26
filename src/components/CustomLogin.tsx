'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/navigation'

export default function CustomLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (res.ok) {
        router.push('/admin')
        router.refresh()
      } else {
        setError(data.errors?.[0]?.message || 'Invalid email or password.')
      }
    } catch (err) {
      setError('A network error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return createPortal(
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#0f172a', // 🔵 Deep Slate Navy Background
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        boxSizing: 'border-box',
        zIndex: 9999999,
        overflow: 'hidden',
      }}
    >
      {/* Watermark Logo Backdrop */}
      <img
        src="/smartconnect.logo.png"
        alt="Background Watermark"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '560px',
          height: '560px',
          maxWidth: '85vw',
          maxHeight: '85vh',
          objectFit: 'contain',
          opacity: 0.18,
          pointerEvents: 'none',
          zIndex: 1,
          filter: 'drop-shadow(0 0 40px rgba(6, 182, 212, 0.35))',
        }}
      />

      {/* Dark Blue Glassmorphism Card */}
      <form
        onSubmit={handleLogin}
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '32px',
          backgroundColor: 'rgba(30, 41, 59, 0.92)', // 🔵 Dark Blue Card Layer
          backdropFilter: 'blur(16px)',
          borderRadius: '12px',
          border: '1px solid #334155',
          boxShadow: '0 20px 40px rgba(15, 23, 42, 0.8)',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0, color: '#f8fafc' }}>
            SmartConnect CRM
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
            <img
              src="/logo.png"
              alt="SmartConnect CRM Logo"
              style={{ width: '48px', height: '48px', objectFit: 'contain' }}
            />
          </div>
        </div>

        {error && (
          <p
            style={{
              color: '#f87171',
              backgroundColor: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid #f87171',
              padding: '10px',
              borderRadius: '6px',
              marginBottom: '16px',
              fontSize: '14px',
              textAlign: 'center',
            }}
          >
            {error}
          </p>
        )}

        <div style={{ marginBottom: '16px' }}>
          <label
            style={{ display: 'block', fontSize: '14px', marginBottom: '8px', color: '#94a3b8' }}
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '6px',
              border: '1px solid #475569',
              backgroundColor: '#020617', // 🔵 Dark Midnight Input Fill
              color: '#f8fafc',
              fontSize: '14px',
              boxSizing: 'border-box',
              outline: 'none',
            }}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label
            style={{ display: 'block', fontSize: '14px', marginBottom: '8px', color: '#94a3b8' }}
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '6px',
              border: '1px solid #475569',
              backgroundColor: '#020617', // 🔵 Dark Midnight Input Fill
              color: '#f8fafc',
              fontSize: '14px',
              boxSizing: 'border-box',
              outline: 'none',
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: loading ? '#0891b2' : '#06b6d4',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '14px',
            cursor: loading ? 'not-allowed' : 'pointer',
            boxShadow: '0 0 16px rgba(6, 182, 212, 0.4)',
            transition: 'all 0.2s ease-in-out',
          }}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
    </div>,
    document.body,
  )
}
