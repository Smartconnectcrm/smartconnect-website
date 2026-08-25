'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function FormbricksProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Skip execution inside Payload Admin routes
    if (pathname?.startsWith('/admin')) return

    const environmentId = process.env.NEXT_PUBLIC_FORMBRICKS_WORKSPACE_ID

    if (environmentId && typeof window !== 'undefined') {
      import('@formbricks/js')
        .then((fb) => {
          // Cast to any to bypass strict type mismatch across version variants
          const instance = (fb.default || fb) as any

          if (typeof instance.setup === 'function') {
            instance.setup({
              environmentId,
              appUrl: 'https://app.formbricks.com',
            })
          } else if (typeof instance.init === 'function') {
            instance.init({
              environmentId,
              apiHost: 'https://app.formbricks.com',
            })
          }

          // Track page views dynamically across Next.js App Router route transitions
          if (typeof instance.registerRouteChange === 'function') {
            instance.registerRouteChange()
          }
        })
        .catch((err) => console.warn('Formbricks SDK load skipped:', err))
    }
  }, [pathname])

  return <>{children}</>
}
