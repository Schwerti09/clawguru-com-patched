import HeroSecurityCheck from '@/components/marketing/HeroSecurityCheck'
import AffiliateComparison from '@/components/marketing/AffiliateComparison'
import CTAButton from '@/components/marketing/CTAButton'
import TransparencyWidget from '@/components/marketing/TransparencyWidget'
import Container from '@/components/shared/Container'
import { SECURITY_STATS } from '@/lib/constants'

export default function Home() {
  return (
    <>
      {/* Hero Section mit Security Check */}
      <section className="border-b border-gray-800">
        <Container>
          <HeroSecurityCheck />
        </Container>
      </section>

      {/* Live Stats (Placeholder - keine Persistenz) */}
      <section className="py-8 bg-gray-900/50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-cyan-400">{SECURITY_STATS.checks}</div>
              <div className="text-sm text-gray-400">Checks heute</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-orange-400">{SECURITY_STATS.vulnerable}</div>
              <div className="text-sm text-gray-400">Warnungen</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-green-400">{SECURITY_STATS.patched}</div>
              <div className="text-sm text-gray-400">Fixes empfohlen</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-400">#{SECURITY_STATS.rank}</div>
              <div className="text-sm text-gray-400">DE-Ressource</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Affiliate Vergleich */}
      <section className="py-16">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-4">
            Hosting für OpenClaw: schnell, sicher, bezahlbar
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Wir zeigen dir Anbieter, die sich in der Praxis bewährt haben — plus Setup-Schritte, damit du keine
            Klassiker wie offene Ports, Standard-Keys und fehlende Firewall erwischst.
          </p>
          <AffiliateComparison />
        </Container>
      </section>

      {/* Managed Service Upsell */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-950/50">
        <Container>
          <div className="max-w-4xl mx-auto text-center p-8 rounded-2xl border border-cyan-800/30">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-gray-300">Kein Bock auf Setup & Wartung?</span>
              <br />
              <span className="text-4xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Wir machen das für dich.
              </span>
            </h2>
            <p className="text-xl mb-8">
              ClawSyndicate hostet, härtet und überwacht deine OpenClaw-Instanz.
              <br />
              <strong>In 10 Minuten startklar. Ab 49€/Monat.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                href="https://clawsyndicate.com/checkout?plan=pro"
                label="Managed Hosting ansehen"
                variant="primary"
                size="lg"
              />
              <CTAButton href="/einrichtung" label="Lieber selbst hosten? Zum Guide" variant="outline" size="lg" />
            </div>
          </div>
        </Container>
      </section>

      {/* Transparenz */}
      <TransparencyWidget />
    </>
  )
}
