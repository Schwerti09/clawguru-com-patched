import Container from '@/components/shared/Container'
import CTAButton from '@/components/marketing/CTAButton'

export const metadata = {
  title: 'OpenClaw Sicherheit | Hardening, Firewall, Keys, Secrets',
  description:
    'Best Practices für eine sichere OpenClaw/Moltbot Installation: Firewall, Secrets, Reverse Proxy, SSH, Updates und Monitoring.',
}

export default function SicherheitPage() {
  return (
    <Container>
      <div className="py-16 max-w-4xl mx-auto">
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <a href="/" className="hover:text-cyan-400">
                ClawGuru
              </a>
            </li>
            <li>/</li>
            <li className="text-gray-300">Sicherheit</li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-black mb-6">OpenClaw Sicherheit</h1>
        <p className="text-lg text-gray-400 mb-10">
          Ziel: <strong>keine</strong> offenen Ports, <strong>keine</strong> Secrets im Klartext, <strong>kein</strong> Agent mit
          Root-Rechten — und trotzdem bequem deploybar.
        </p>

        <div className="space-y-10">
          <section className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Die 7 häufigsten Fehler (und die Fixes)</h2>
            <ul className="space-y-3 text-gray-300">
              <li>• SSH offen im Internet → <span className="text-gray-400">nur per VPN / allowlist / Portknocking + Fail2ban</span></li>
              <li>• Standard-Credentials → <span className="text-gray-400">sofort ändern, Password-Login aus, nur Keys</span></li>
              <li>• Keine Firewall → <span className="text-gray-400">UFW/iptables: default deny inbound</span></li>
              <li>• Secrets im Repo → <span className="text-gray-400">.env nie committen, Secrets Manager nutzen</span></li>
              <li>• Agent darf alles → <span className="text-gray-400">Least-Privilege: minimale Rechte, separate Tokens</span></li>
              <li>• Kein Update-Prozess → <span className="text-gray-400">Pinned Versions, regelmäßige Patches</span></li>
              <li>• Kein Monitoring → <span className="text-gray-400">Logs, Alerts, Healthchecks</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Notfall: Verdacht auf Leak</h2>
            <p className="text-gray-400 mb-6">
              Wenn du vermutest, dass Keys/Secrets geleakt sind: erst stoppen, dann rotieren, dann härten. Kein Rumprobieren im
              Live-System.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="/sicherheit/notfall-leitfaden" label="Zum Notfall-Leitfaden" variant="primary" />
              <CTAButton href="/" label="Zurück zum Security-Check" variant="outline" />
            </div>
          </section>

          <section className="bg-blue-950/30 border border-blue-900/40 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-2">Pro-Tipp: Trenne Gateway und Agent</h2>
            <p className="text-gray-300">
              Gateway (öffentlich) und Agent (privat) sollten nicht dieselbe Maschine teilen. Pack den Agent in ein privates Subnetz, gib ihm nur die
              minimalen Credentials, und nutze einen Reverse Proxy (TLS) plus strikte Allowlists.
            </p>
          </section>
        </div>
      </div>
    </Container>
  )
}
