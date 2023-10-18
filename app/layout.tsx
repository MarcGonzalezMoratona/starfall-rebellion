import './globals.css';
import { Inter } from 'next/font/google';
import Header from './header';
import Footer from './footer';
import { MenuContextProvider } from './store/menu-context';
import { DeviceContextProvider } from './store/device-context';
import { PageContextProvider } from './store/page-context';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

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
  viewport: 'width=device-width, initial-scale=1',
  creator: 'Horizons Games',
  publisher: 'Horizons Games',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col items-center justify-between`}
      >
        <DeviceContextProvider>
          <PageContextProvider>
            <MenuContextProvider>
              <Header />
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
