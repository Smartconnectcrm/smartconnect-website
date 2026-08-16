// src/components/FormbricksProvider.tsx
'use client'

import { useEffect } from 'react'

export function FormbricksProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@formbricks/js')
        .then((fb) => {
          fb.default?.setup?.({
            workspaceId: process.env.NEXT_PUBLIC_FORMBRICKS_WORKSPACE_ID || '',
            appUrl: 'https://app.formbricks.com',
          })
        })
        .catch((err) => console.warn('Formbricks SDK load skipped:', err))
    }
  }, [])

  return <>{children}</>
}
