import './globals.css';
import { Inter } from 'next/font/google';
import Header from './header';
import Footer from './footer';
import { MenuContextProvider } from './context/menu-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LEGO Star Wars: Starfall Rebellion',
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
        <MenuContextProvider>
          <Header />
          {children}
          <Footer />
        </MenuContextProvider>
      </body>
    </html>
  );
}
