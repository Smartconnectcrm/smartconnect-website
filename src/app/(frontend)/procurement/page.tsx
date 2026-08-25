// src/app/(frontend)/procurement/page.tsx
import React, { Suspense } from 'react'
import ProcurementClient from './ProcurementClient'

export const dynamic = 'force-dynamic'

export default function ProcurementPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '80vh' }} />}>
      <ProcurementClient />
    </Suspense>
  )
}
