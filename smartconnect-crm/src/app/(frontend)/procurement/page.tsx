// src/app/(frontend)/procurement/page.tsx
import React, { Suspense } from 'react'
import { ProcurementClient } from './ProcurementClient'

export const dynamic = 'force-dynamic'

export default function ProcurementPage() {
  return (
    <main
      style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '40px 20px 80px 20px',
      }}
    >
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <ProcurementClient />
      </Suspense>
    </main>
  )
}
