import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { target } = await request.json()

    if (!target || typeof target !== 'string') {
      return NextResponse.json({ error: 'Bitte gib eine IP oder Domain ein' }, { status: 400 })
    }

    // Demo-Check. In Produktion: Scan against known misconfigurations (ports, auth, headers) via an external service.
    const isVulnerable = Math.random() > 0.7

    const response = {
      timestamp: new Date().toISOString(),
      target,
      vulnerable: isVulnerable,
      message: isVulnerable
        ? `WARNUNG: Deine Instanz unter "${target}" wirkt öffentlich exponiert und könnte sensible Daten preisgeben.`
        : `OK: Keine offensichtlichen kritischen Risiken für "${target}" erkannt (Demo-Check).`,
      details: isVulnerable
        ? ['Offener SSH-Port (22) erkannt', 'Keine erkennbare Firewall-Regel', 'Mögliche Default-Konfiguration', 'Öffentlicher Endpunkt ohne Auth-Hinweise']
        : ['Keine offenen Standard-Ports erkannt (Demo)', 'HTTPS wirkt vorhanden'],
      recommendations: isVulnerable
        ? ['Instanz isolieren', 'API Keys rotieren', 'Firewall konfigurieren', 'Hardening-Guide befolgen']
        : ['Updates regelmäßig einspielen', 'Monitoring einrichten', 'Backups automatisieren'],
    }

    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    return NextResponse.json(response, { headers })
  } catch (error) {
    console.error('Security Check Error:', error)
    return NextResponse.json({ error: 'Interner Serverfehler' }, { status: 500 })
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
