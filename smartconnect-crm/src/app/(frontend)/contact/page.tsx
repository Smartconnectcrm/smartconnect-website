import React, { Suspense } from 'react'
import { ContactClient } from './ContactClient'

export const dynamic = 'force-dynamic'

export default function ContactPage() {
  return (
    <main
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px 80px 20px',
      }}
    >
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <ContactClient />
      </Suspense>
    </main>
  )
}
