import Container from '@/components/shared/Container'
import CTAButton from '@/components/marketing/CTAButton'

export const metadata = {
  title: 'OpenClaw Notfall-Leitfaden | Keys rotieren, Instanz isolieren, Schaden begrenzen',
  description: 'Schritt-für-Schritt Checkliste bei Verdacht auf kompromittierte OpenClaw/Moltbot Instanzen: Isolation, Rotation, Hardening, Logs.',
}

export default function NotfallLeitfadenPage() {
  return (
    <Container>
      <div className="py-16 max-w-4xl mx-auto">
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <a href="/" className="hover:text-cyan-400">ClawGuru</a>
            </li>
            <li>/</li>
            <li>
              <a href="/sicherheit" className="hover:text-cyan-400">Sicherheit</a>
            </li>
            <li>/</li>
            <li className="text-gray-300">Notfall-Leitfaden</li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-black mb-6">
          🔥 Notfall-Leitfaden (Verdacht auf Leak)
        </h1>
        <p className="text-gray-400 mb-10">
          Leitlinie: <strong>Stop → Isolieren → Rotieren → Forensik → Härtung → Neustart</strong>. Alles andere ist Stress-Tanzen.
        </p>

        <div className="space-y-10">
          <section className="bg-red-950/30 border border-red-900/40 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">1) Sofortmaßnahmen (0–10 Minuten)</h2>
            <ol className="space-y-3 text-gray-200 list-decimal list-inside">
              <li>Instanz vom Internet trennen (Security Group / Firewall / Reverse Proxy down).</li>
              <li>Agent/Gateway stoppen (systemd / docker compose down).</li>
              <li>API Keys und Tokens sofort rotieren (LLM-Provider, GitHub, DB, Cloud, Webhooks).</li>
              <li>Wenn möglich: Snapshot/Backup ziehen <span className="text-gray-400">(für spätere Analyse)</span>.</li>
            </ol>
          </section>

          <section className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">2) Schaden begrenzen (10–30 Minuten)</h2>
            <ul className="space-y-3 text-gray-300">
              <li>• IAM/Cloud: Rechte prüfen, unnötige Access Keys löschen</li>
              <li>• DB: neue Credentials, IP-Allowlist, Passwort-Rotation</li>
              <li>• Git: auf Secrets scannen, History bereinigen (wenn nötig)</li>
              <li>• Logs sichern: auth logs, reverse proxy logs, app logs</li>
            </ul>
          </section>

          <section className="bg-blue-950/30 border border-blue-900/40 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">3) Hardening (30–90 Minuten)</h2>
            <ul className="space-y-3 text-gray-300">
              <li>• Default deny inbound (Firewall) + nur 80/443 offen</li>
              <li>• SSH nur über VPN oder feste IP (und Password-Login deaktivieren)</li>
              <li>• Secrets in ENV/Secret Manager, niemals im Repo</li>
              <li>• Separate Tokens: Gateway ≠ Agent ≠ CI/CD</li>
              <li>• Rate limiting + basic WAF rules auf Reverse Proxy</li>
            </ul>
          </section>

          <section className="text-center">
            <p className="text-gray-400 mb-6">
              Danach erst wieder online gehen — und idealerweise mit Monitoring/Alerts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/einrichtung" label="Setup-Guide (sauber neu)" variant="primary" />
              <CTAButton href="/" label="Zurück zum Security-Check" variant="outline" />
            </div>
          </section>
        </div>
      </div>
    </Container>
  )
}
