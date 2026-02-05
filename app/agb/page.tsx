import Container from '@/components/shared/Container'

export const metadata = {
  title: 'AGB | ClawGuru',
}

export default function AGBPage() {
  return (
    <Container>
      <div className="py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

        <div className="space-y-6 text-gray-300">
          <p>
            Diese AGB sind eine Kurzvorlage. Bei kommerzieller Nutzung (insb. Managed Hosting/Services) bitte rechtlich prüfen.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Geltungsbereich</h2>
            <p>
              Diese AGB gelten für die Nutzung dieser Webseite und ggf. angebotener Dienstleistungen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Inhalte & Haftung</h2>
            <p>
              Inhalte dienen der Information und stellen keine Rechts-/Sicherheitsberatung dar. Für Handlungen, die auf Basis der Inhalte erfolgen, übernehmen wir keine Haftung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Affiliate-Links</h2>
            <p>
              Einige Links sind Affiliate-Links. Beim Abschluss über diese Links kann eine Provision entstehen, ohne dass dir Mehrkosten entstehen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Schlussbestimmungen</h2>
            <p>
              Es gilt deutsches Recht, soweit zulässig.
            </p>
          </section>
        </div>
      </div>
    </Container>
  )
}
