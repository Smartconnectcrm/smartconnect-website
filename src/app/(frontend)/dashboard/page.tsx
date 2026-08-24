import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import DashboardClient from './DashboardClient'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function SmartConnectDashboard() {
  const payload = await getPayload({ config: configPromise })
  const headerList = await headers()

  // Verify current user authentication session directly from server headers
  const { user } = await payload.auth({ headers: headerList })

  if (!user) {
    redirect('/login?redirect=/dashboard')
  }

  // Execute parallel local PostgreSQL database queries
  const [proposalsData, tendersData, usersData] = await Promise.all([
    payload.count({
      collection: 'proposals',
    }),
    payload.count({
      collection: 'tenders',
    }),
    payload.count({
      collection: 'users',
    }),
  ])

  // Fetch 3 most recent active tenders for the live feed
  const recentTenders = await payload.find({
    collection: 'tenders',
    limit: 3,
    sort: '-createdAt',
  })

  const telemetry = {
    proposalsCount: proposalsData.totalDocs,
    tendersCount: tendersData.totalDocs,
    usersCount: usersData.totalDocs,
    recentTenders: recentTenders.docs.map((doc: any) => ({
      id: doc.id,
      title: doc.title || 'Untitled Tender',
      status: doc.status || 'Active',
      createdAt: doc.createdAt,
    })),
  }

  return <DashboardClient user={user} telemetry={telemetry} />
}
