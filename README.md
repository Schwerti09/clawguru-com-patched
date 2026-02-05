# clawguru-com

Next.js (App Router) + TypeScript + Tailwind.

## Lokal starten

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Deployment

### Vercel
1. Repo auf GitHub pushen
2. In Vercel importieren (Framework: Next.js – Auto)

### Netlify
1. Repo verbinden
2. Build command: `npm run build`
3. `netlify.toml` ist enthalten und aktiviert automatisch den Next.js Adapter (`@netlify/plugin-nextjs`).

## Security Hinweis (Next.js Version)

Netlify blockt Deploys von Next.js-Versionen, die von kritischen RSC-Schwachstellen betroffen sind.
Dieses Repo pinnt daher eine gepatchte Next.js-Version.

## Hinweis
- Der Security-Check ist ein **Demo-Check** (kein Portscan). Er ist als UI/Flow gedacht und kann später durch einen echten Scan-Service ersetzt werden.
- Legal/Datenschutz/AGB sind Vorlagen und sollten vor Livegang geprüft werden.
