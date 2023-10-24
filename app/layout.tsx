import './globals.css';
import { Roboto } from 'next/font/google';
import Header from './header';
import Footer from './footer';
import { MenuContextProvider } from './store/menu-context';
import { DeviceContextProvider } from './store/device-context';
import { PageContextProvider } from './store/page-context';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: {
    default: 'LEGO Star Wars: Starfall Rebellion',
    template: '%s | LEGO Star Wars: Starfall Rebellion',
  },
  description: `LEGO Star Wars: Starfall Rebellion is a two-player hack and slash game that takes place in Coltran,
    a planet oppressed by an Evil Corporation, which is full of poverty and outlawness.`,
  openGraph: {
    title: 'LEGO Star Wars: Starfall Rebellion',
    description: `LEGO Star Wars: Starfall Rebellion is a two-player hack and slash game that takes place in Coltran,
    a planet oppressed by an Evil Corporation, which is full of poverty and outlawness.`,
    url: 'https://starfall-rebellion.vercel.app',
    siteName: 'LEGO Star Wars: Starfall Rebellion',
    images: [
      {
        url: '',
        width: 1080,
        height: 1080,
        alt: 'Starfall Rebellion logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'LEGO Star Wars: Starfall Rebellion',
    description: `LEGO Star Wars: Starfall Rebellion is a two-player hack and slash game that takes place in Coltran,
    a planet oppressed by an Evil Corporation, which is full of poverty and outlawness.`,
    card: 'summary_large_image',
  },
  metadataBase: new URL('https://starfall-rebellion.vercel.app'),
  alternates: {
    canonical: '/',
  },
  viewport: 'width=device-width, initial-scale=1',
  creator: 'Horizons Games',
  publisher: 'Horizons Games',
  icons: 'https://starfall-rebellion.vercel.app/favicon.ico',
  manifest: '/manifest.json',
};

const jsonLd = {
  '@context': 'http://schema.org',
  '@type': 'VideoGame',
  name: 'LEGO Star Wars: Starfall Rebellion',
  description: `LEGO Star Wars: Starfall Rebellion is a two-player hack and slash game that takes place in Coltran,
  a planet oppressed by an Evil Corporation, which is full of poverty and outlawness.`,
  url: 'https://starfall-rebellion.vercel.app',
  image: 'https://starfall-rebellion.vercel.app/starfallRebellionOST.png',
  datePublished: '2023-11-17',
  author: {
    '@type': 'Organization',
    name: 'Horizons Games',
  },
  genre: 'Action, Adventure',
  gamePlatform: ['PC'],
  sameAs: [
    'https://twitter.com/horizons_games',
    'https://www.instagram.com/horizons.games',
    'https://www.youtube.com/@horizonsgames',
    'https://www.tiktok.com/@horizonsgames',
    'https://www.linkedin.com/company/horizons-games/about/',
    'https://github.com/Horizons-Games',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Horizons Games',
    legalName: 'Horizons Games',
    url: 'https://horizons-games.vercel.app',
    description: `Horizons Games is a AAA game development studio 
    created with educational purposes by Master's Degree students from UPC School in Barcelona.`,
    foundingDate: 2022,
    logo: 'https://horizons-games.vercel.app/horizons.svg',
    sameAs: [
      'https://twitter.com/horizons_games',
      'https://www.instagram.com/horizons.games',
      'https://www.youtube.com/@horizonsgames',
      'https://www.tiktok.com/@horizonsgames',
      'https://www.linkedin.com/company/horizons-games/about/',
      'https://github.com/Horizons-Games',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'horizongamesbarcelona@gmail.com',
      url: 'https://starfall-rebellion.vercel.app/contact',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} min-h-screen flex flex-col items-center justify-between`}
      >
        <DeviceContextProvider>
          <PageContextProvider>
            <MenuContextProvider>
              <Header />
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
              />
              {children}
              <Footer />
              <Analytics />
            </MenuContextProvider>
          </PageContextProvider>
        </DeviceContextProvider>
      </body>
    </html>
  );
}
