export type SecurityCheckResult = {
  vulnerable: boolean
  message: string
  details?: string[]
}

export async function performSecurityCheck(target: string): Promise<SecurityCheckResult> {
  const res = await fetch('/api/security-check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ target }),
  })

  if (!res.ok) {
    const data = (await res.json().catch(() => null)) as any
    throw new Error(data?.error || 'Request failed')
  }

  const data = (await res.json()) as any

  return {
    vulnerable: Boolean(data.vulnerable),
    message: typeof data.message === 'string' ? data.message : 'OK',
    details: Array.isArray(data.details) ? data.details.map(String) : undefined,
  }
}
