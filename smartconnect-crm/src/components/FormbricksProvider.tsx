// src/components/FormbricksProvider.tsx
'use client'

import { useEffect } from 'react'
import formbricks from '@formbricks/js'

export function FormbricksProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      formbricks.setup({
        workspaceId: process.env.NEXT_PUBLIC_FORMBRICKS_WORKSPACE_ID || '',
        appUrl: 'https://app.formbricks.com', // Replace with your self-hosted instance URL if applicable
      })
    }
  }, [])

  return <>{children}</>
}
