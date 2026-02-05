import Container from '@/components/shared/Container'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-24">
      <Container>
        <div className="py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div>
            <div className="font-bold">ClawGuru</div>
            <p className="text-sm text-gray-500 max-w-md">
              Sicherheitschecks, Hardening-Guides und Hosting-Vergleich für OpenClaw (Moltbot).
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <a href="/sicherheit" className="text-gray-400 hover:text-cyan-300 transition-colors">Sicherheit</a>
            <a href="/einrichtung" className="text-gray-400 hover:text-cyan-300 transition-colors">Einrichtung</a>
            <a href="/hosting-kosten" className="text-gray-400 hover:text-cyan-300 transition-colors">Kosten</a>
            <span className="text-gray-700">|</span>
            <a href="/impressum" className="text-gray-400 hover:text-cyan-300 transition-colors">Impressum</a>
            <a href="/datenschutz" className="text-gray-400 hover:text-cyan-300 transition-colors">Datenschutz</a>
            <a href="/agb" className="text-gray-400 hover:text-cyan-300 transition-colors">AGB</a>
          </div>
        </div>

        <div className="pb-10 text-xs text-gray-600">
          © {new Date().getFullYear()} ClawGuru. Affiliate-Hinweis: Einige Links können Provisionen enthalten.
        </div>
      </Container>
    </footer>
  )
}
