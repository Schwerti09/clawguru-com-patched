export const AFFILIATE_LINKS = {
  // Hosting
  HETZNER: 'https://hetzner.cloud/?ref=clawguru_pro',
  DIGITALOCEAN: 'https://m.do.co/c/clawguru_vip',
  AWS: 'https://aws.amazon.com/campaigns/startups/?ref=clawguru_aws',

  // APIs / Tools (placeholders)
  ANTHROPIC: 'https://anthropic.com/api',
  OPENAI: 'https://openai.com/api',
  TAILSCALE: 'https://tailscale.com',
  ONEPASSWORD: 'https://1password.com',
  CLOUDFLARE: 'https://cloudflare.com',

  // Eigener Service
  CLAWSYNDICATE: 'https://clawsyndicate.com?ref=clawguru_main',
} as const

export type HostingProvider = {
  name: string
  description: string
  price: string
  specs: string
  bestFor: string
  affiliateLink: string
  commission: string
  badge: string
}

export const HOSTING_PROVIDERS: HostingProvider[] = [
  {
    name: 'Hetzner Cloud',
    description: 'Sehr gutes Preis/Leistung, EU-Standorte',
    price: 'ab ~€4.51/Monat',
    specs: '2 vCPU, 4GB RAM, 40GB SSD',
    bestFor: 'Kostenbewusste + EU-Daten',
    affiliateLink: AFFILIATE_LINKS.HETZNER,
    commission: 'Affiliate/Referral (je nach Programm)',
    badge: 'BESTSELLER',
  },
  {
    name: 'DigitalOcean',
    description: 'Sehr einfache Bedienung + Doku',
    price: 'ab ~€6.00/Monat',
    specs: '1 vCPU, 1GB RAM, 25GB SSD',
    bestFor: 'Einsteiger & Devs',
    affiliateLink: AFFILIATE_LINKS.DIGITALOCEAN,
    commission: 'Affiliate/Referral (je nach Programm)',
    badge: 'EINFACH',
  },
  {
    name: 'AWS Lightsail',
    description: 'Enterprise-Ökosystem, flexibel skalierbar',
    price: 'ab ~€3.50/Monat',
    specs: '512MB–2GB RAM, 20–60GB SSD',
    bestFor: 'AWS-Erfahrene',
    affiliateLink: AFFILIATE_LINKS.AWS,
    commission: 'Credits/Referral (je nach Programm)',
    badge: 'ENTERPRISE',
  },
]

// Demo-Stats (keine Persistenz)
export const SECURITY_STATS = {
  checks: '12,457',
  vulnerable: '3,892',
  patched: '8,512',
  rank: '1',
} as const

// Impressum Daten (aus User-Vorgabe; bitte vor Livegang prüfen)
export const LEGAL_INFO = {
  company: 'Wissens-Bank',
  owner: 'Rolf Schwertfechter',
  address: 'Karklandsweg 1',
  city: '26553 Dornum',
  email: 'rps-vertrieb@t-online.de',
  taxNote: 'Steuerangaben auf Anfrage',
} as const
