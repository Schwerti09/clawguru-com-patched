import CTAButton from '@/components/marketing/CTAButton'
import { HOSTING_PROVIDERS } from '@/lib/constants'

export default function AffiliateComparison() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {HOSTING_PROVIDERS.map((p) => (
        <div key={p.name} className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6 relative overflow-hidden">
          <div className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-white/5 border border-gray-800 text-gray-200">
            {p.badge}
          </div>
          <h3 className="text-xl font-bold mb-2">{p.name}</h3>
          <p className="text-sm text-gray-400 mb-4">{p.description}</p>

          <div className="space-y-2 text-sm text-gray-300 mb-6">
            <div><span className="text-gray-500">Preis:</span> {p.price}</div>
            <div><span className="text-gray-500">Specs:</span> {p.specs}</div>
            <div><span className="text-gray-500">Best for:</span> {p.bestFor}</div>
          </div>

          <div className="flex flex-col gap-3">
            <CTAButton href={p.affiliateLink} label="Anbieter öffnen" variant="primary" />
            <div className="text-xs text-gray-500">
              Affiliate-Hinweis: Bei Abschluss kann eine Provision anfallen. Für dich ändert sich der Preis nicht.
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
