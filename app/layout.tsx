import './globals.css';
import { Inter } from 'next/font/google';
import Header from './header';
import Footer from './footer';
import { MenuContextProvider } from './store/menu-context';
import { DeviceContextProvider } from './store/device-context';
import { PageContextProvider } from './store/page-context';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'LEGO Star Wars: Starfall Rebellion',
    template: '%s | LEGO Star Wars: Starfall Rebellion',
  },
  description: 'LEGO Star Wars: Starfall Rebellion',
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
            </MenuContextProvider>
          </PageContextProvider>
        </DeviceContextProvider>
      </body>
    </html>
  );
}
