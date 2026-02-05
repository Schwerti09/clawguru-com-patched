import Container from '@/components/shared/Container'

export default function TransparencyWidget() {
  return (
    <section className="py-16 border-t border-gray-800 bg-gray-900/30">
      <Container>
        <div className="max-w-4xl mx-auto rounded-2xl border border-blue-900/40 bg-blue-950/20 p-8">
          <h2 className="text-3xl font-bold mb-4">Transparenz: Wie wir Geld verdienen</h2>
          <p className="text-gray-300 mb-6">
            Diese Seite finanziert sich über Affiliate-Links und (optional) Managed Hosting. Keine Paywall für Sicherheits-Basics — weil das sonst in der Praxis einfach schiefgeht.
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>• Affiliate-Links: Provision, wenn du über unsere Links buchst (ohne Aufpreis)</li>
            <li>• Managed Hosting: für Leute, die keine Zeit/Nerven für Hardening haben</li>
            <li>• Keine Datenverkäufe: Eingaben im Security-Check werden nicht gespeichert</li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
