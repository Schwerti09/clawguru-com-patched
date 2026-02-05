'use client'

import { useEffect, useState } from 'react'

export default function TrustBadge() {
  const [ts, setTs] = useState<string>('')

  useEffect(() => {
    const d = new Date()
    setTs(
      d.toLocaleString('de-DE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      })
    )
  }, [])

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="bg-gradient-to-r from-cyan-600/20 via-gray-950 to-red-600/20 border-b border-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="h-10 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-gray-200">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>Systemstatus: Online</span>
              </span>
              <span className="text-gray-500 hidden sm:inline">•</span>
              <span className="text-gray-400 hidden sm:inline">Keine Eingaben werden gespeichert</span>
            </div>
            <div className="text-gray-400">{ts ? `Stand: ${ts}` : ''}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
