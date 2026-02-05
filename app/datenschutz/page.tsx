import Container from '@/components/shared/Container'

export const metadata = {
  title: 'Datenschutz | ClawGuru',
}

export default function DatenschutzPage() {
  return (
    <Container>
      <div className="py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

        <div className="space-y-6 text-gray-300">
          <p>
            Diese Vorlage ist eine pragmatische Basis. Bitte lasse sie vor Livegang juristisch prüfen.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Verantwortlicher</h2>
            <p>
              Verantwortlicher im Sinne der DSGVO ist der im Impressum genannte Betreiber.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Verarbeitung im Security-Check</h2>
            <p>
              Wenn du im Security-Check eine Domain/IP eingibst, wird diese Eingabe ausschließlich zur Anfrage an unseren API-Endpunkt verwendet.
              Wir speichern diese Eingaben nicht dauerhaft.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Server-Logs</h2>
            <p>
              Bei jedem Aufruf dieser Webseite können durch den Hostinganbieter technische Zugriffsdaten (z. B. IP-Adresse, Zeitstempel, angeforderte Ressourcen)
              in Server-Logs verarbeitet werden. Die Verarbeitung dient der technischen Bereitstellung und Sicherheit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Affiliate-Links</h2>
            <p>
              Diese Webseite enthält Affiliate-Links. Beim Klick auf solche Links kann der jeweilige Anbieter Cookies/Tracking einsetzen.
              Details findest du in den Datenschutzerklärungen der jeweiligen Anbieter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Deine Rechte</h2>
            <p>
              Du hast Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Datenübertragbarkeit und Widerspruch.
              Außerdem steht dir ein Beschwerderecht bei einer Aufsichtsbehörde zu.
            </p>
          </section>
        </div>
      </div>
    </Container>
  )
}
