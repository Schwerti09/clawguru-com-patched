import Container from '@/components/shared/Container'

const links = [
  { href: '/sicherheit', label: 'Sicherheit' },
  { href: '/einrichtung', label: 'Einrichtung' },
  { href: '/hosting-kosten', label: 'Kosten' },
]

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-900/30" />
            <div>
              <div className="font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors">ClawGuru</div>
              <div className="text-xs text-gray-400">OpenClaw Security & Setup</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-gray-300 hover:text-cyan-300 transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href="https://clawsyndicate.com?ref=clawguru_header"
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-gray-800 text-gray-200 hover:text-white transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              Managed Hosting
            </a>
          </nav>

          <div className="md:hidden">
            <a
              href="/sicherheit"
              className="px-3 py-2 rounded-lg bg-white/5 border border-gray-800 text-sm text-gray-200"
            >
              Menü
            </a>
          </div>
        </div>
      </Container>
    </header>
  )
}
