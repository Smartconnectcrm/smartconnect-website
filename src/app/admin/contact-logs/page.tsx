"use client"

import { useEffect, useState } from "react"

type Log = {
  t: string
  traceId: string
  ip: string
  emailHash: string
  subject: string
  action: string
  reason?: string
}

export default function ContactLogsPage() {
  const [logs, setLogs] = useState<Log[]>([])
  const [error, setError] = useState<string>("")

  useEffect(() => {
    fetch("/api/admin/contact-logs", {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_API_KEY}`,
      },
    })
      .then((r) => {
        if (!r.ok) throw new Error("Unauthorized or error")
        return r.json()
      })
      .then(setLogs)
      .catch(() => setError("Access denied or failed to load"))
  }, [])

  if (error) return <div className="p-6">{error}</div>

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Blocked Contact Messages</h1>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Time</th>
              <th className="p-2 border">Action</th>
              <th className="p-2 border">Reason</th>
              <th className="p-2 border">Subject</th>
              <th className="p-2 border">IP</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((l) => (
              <tr key={l.traceId}>
                <td className="p-2 border">{new Date(l.t).toLocaleString()}</td>
                <td className="p-2 border">{l.action}</td>
                <td className="p-2 border">{l.reason ?? "-"}</td>
                <td className="p-2 border">{l.subject}</td>
                <td className="p-2 border">{l.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
