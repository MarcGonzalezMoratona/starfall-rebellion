import './globals.css';
import { Inter } from 'next/font/google';
import Header from './header';
import Footer from './footer';

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
