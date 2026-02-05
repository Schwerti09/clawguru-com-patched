import Container from '@/components/shared/Container'
import CTAButton from '@/components/marketing/CTAButton'

export const metadata = {
  title: 'OpenClaw Einrichtung | VPS, Reverse Proxy, Secrets, Updates',
  description: 'Schritt-für-Schritt Setup für OpenClaw/Moltbot: VPS auswählen, Domain, TLS, Firewall, .env, Deploy, Monitoring.',
}

export default function EinrichtungPage() {
  return (
    <Container>
      <div className="py-16 max-w-4xl mx-auto">
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <a href="/" className="hover:text-cyan-400">ClawGuru</a>
            </li>
            <li>/</li>
            <li className="text-gray-300">Einrichtung</li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-black mb-6">OpenClaw Einrichtung</h1>
        <p className="text-gray-400 mb-10">
          Ziel: ein reproduzierbares Setup, das nicht beim ersten Update explodiert.
        </p>

        <div className="space-y-10">
          <section className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Schnellstart (30 Minuten)</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300">
              <li>VPS erstellen (2 vCPU, 4–8GB RAM) + Ubuntu LTS.</li>
              <li>Firewall: inbound nur 80/443 (und ggf. VPN), SSH eingeschränkt.</li>
              <li>Domain + TLS (z. B. Caddy/Traefik/Nginx + Let’s Encrypt).</li>
              <li>Secrets: .env lokal, Server-Secrets via Secret Manager oder verschlüsselt.</li>
              <li>Deploy via Docker Compose oder systemd Unit.</li>
              <li>Monitoring: Healthcheck, Log-Rotation, Alerts.</li>
            </ol>
          </section>

          <section className="bg-blue-950/30 border border-blue-900/40 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Mindset, das dich rettet</h2>
            <p className="text-gray-300">
              Treat it like prod — selbst wenn’s „nur ein Bot“ ist. Agenten sind per Design gefährlich, weil sie Rechte brauchen.
              Deine Aufgabe ist nicht, ihnen zu vertrauen. Deine Aufgabe ist, ihnen Grenzen zu bauen.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/sicherheit" label="Hardening-Guide" variant="primary" />
            <CTAButton href="/hosting-kosten" label="Kosten & Anbieter" variant="outline" />
          </div>
        </div>
      </div>
    </Container>
  )
}
