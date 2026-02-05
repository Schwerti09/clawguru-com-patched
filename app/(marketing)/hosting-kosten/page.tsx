import Container from '@/components/shared/Container'
import AffiliateComparison from '@/components/marketing/AffiliateComparison'

export const metadata = {
  title: 'OpenClaw Hosting-Kosten | VPS, Domain, Monitoring, LLM-API',
  description: 'Übersicht: typische Kosten für VPS, Domain/TLS, Monitoring und LLM-API-Nutzung bei OpenClaw/Moltbot. Plus Anbieter-Vergleich.',
}

export default function HostingKostenPage() {
  return (
    <Container>
      <div className="py-16 max-w-5xl mx-auto">
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li><a href="/" className="hover:text-cyan-400">ClawGuru</a></li>
            <li>/</li>
            <li className="text-gray-300">Hosting-Kosten</li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-black mb-6">Hosting-Kosten</h1>
        <p className="text-gray-400 mb-10 max-w-3xl">
          Die wahren Kosten sind selten der VPS. Die wahren Kosten sind: Ausfälle, Datenverlust, offenes SSH und ein LLM-Agent, der zu viel darf.
          Hier ist eine pragmatische Übersicht.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-3">Fixe Basics</h2>
            <ul className="space-y-2 text-gray-300">
              <li>• VPS: ab ~4–20€/Monat (je nach RAM/CPU)</li>
              <li>• Domain: ~8–15€/Jahr</li>
              <li>• TLS: kostenlos (Let’s Encrypt)</li>
              <li>• Monitoring: 0–20€/Monat (je nach Setup)</li>
            </ul>
          </div>
          <div className="bg-blue-950/30 border border-blue-900/40 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-3">Variable Kosten</h2>
            <ul className="space-y-2 text-gray-300">
              <li>• LLM API: hängt von Tokens/Workflows ab</li>
              <li>• Storage/Backups: klein starten, aber automatisieren</li>
              <li>• Incident-Kosten: minimierst du mit Hardening & Alerts</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4">Empfohlene Anbieter</h2>
        <p className="text-gray-400 mb-10">
          Unten: Anbieter-Vergleich + Gründe, wann welcher Sinn macht.
        </p>

        <AffiliateComparison />
      </div>
    </Container>
  )
}
