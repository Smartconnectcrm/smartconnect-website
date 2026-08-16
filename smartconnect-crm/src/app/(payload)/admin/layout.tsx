// src/app/(payload)/admin/layout.tsx
import config from '@payload-config'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import { importMap } from './importMap'
import '@payloadcms/next/css'
import '../../../admin.css'

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout
      config={config}
      importMap={importMap}
      serverFunction={async (args) => {
        'use server'
        return handleServerFunctions({
          ...args,
          config,
          importMap,
        })
      }}
    >
      {children}
    </RootLayout>
  )
}
