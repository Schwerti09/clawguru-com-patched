import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://clawguru.com'
  const routes = [
    '',
    '/sicherheit',
    '/sicherheit/notfall-leitfaden',
    '/einrichtung',
    '/hosting-kosten',
    '/impressum',
    '/datenschutz',
    '/agb',
  ]

  const now = new Date()

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }))
}
