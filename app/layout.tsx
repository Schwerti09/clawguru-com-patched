import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TrustBadge from '@/components/layout/TrustBadge'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'ClawGuru | OpenClaw/Moltbot Security & Setup Center (DE)',
  description:
    'Security-Checks, Härtungs-Guides, Hosting-Vergleich und Kosten-Optimierung für OpenClaw (ehem. Moltbot/Clawdbot).',
  keywords: ['openclaw', 'moltbot', 'clawdbot', 'security', 'setup', 'hosting', 'kosten'],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://clawguru.com',
    title: 'ClawGuru | OpenClaw Security Command Center',
    description:
      'Die zentrale DE-Ressource für sichere Deployments, Setup und Hosting-Kosten rund um OpenClaw (Moltbot).',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@clawguru',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'ClawGuru',
              url: 'https://clawguru.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://clawguru.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="bg-gray-950 text-gray-100 min-h-screen font-sans">
        <TrustBadge />
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
