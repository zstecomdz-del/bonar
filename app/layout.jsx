import './globals.css'

export const metadata = {
  title: 'Bonar IPTV - Abonnement IPTV Premium | 100K+ Films & Séries',
  description: 'Découvrez tous les chaînes du monde avec Bonar IPTV. Plus de 100K films et 15K séries Netflix, Amazon Prime. Chaînes françaises, arabes, sport (beIN Sports, Canal+). À partir de 40€. Essai gratuit disponible.',
  keywords: 'IPTV, abonnement IPTV, chaînes françaises, chaînes arabes, beIN Sports, Canal+, Netflix, Amazon Prime, streaming, films, séries',
  openGraph: {
    title: 'Bonar IPTV - Votre Passerelle vers le Divertissement Mondial',
    description: '100K+ films, 15K+ séries, tous les chaînes du monde. Abonnement à partir de 40€.',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#0C0A09',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>{children}</body>
    </html>
  )
}
