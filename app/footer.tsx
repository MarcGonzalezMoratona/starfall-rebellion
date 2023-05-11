import Logo from './components/logos/starfall-rebellion';
import { HorizonsWhite } from './components/logos/horizons-white';
import { LEGO } from './components/logos/lego';
import SocialNetworks from './components/social-networks';
import socialNetworks from './data/social-networks';
import { PEGI7 } from './components/logos/pegi7';
import StarWars from './components/logos/star-wars';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center bg-zinc-800 w-full h-80 sm:px-12">
      <section className="flex flex-col gap-4 sm:w-2/3 w-3/4 border-b py-4 sm:py-8 border-zinc-400">
        <div className="flex sm:flex-row flex-col w-full sm:items-center justify-between text-white text-sm font-semibold">
          <p>LEGO STAR WARS: Starfall Rebellion</p>
          <p>Follow us</p>
        </div>
        <SocialNetworks networks={socialNetworks} className="sm:justify-end" />
      </section>
      <section className="flex sm:flex-row flex-col gap-4 w-3/4 sm:gap-0 sm:items-center justify-between py-4 sm:py-8 sm:w-2/3">
        <div className="flex items-center gap-6">
          <Link href="https://horizons-games.vercel.app">
            <HorizonsWhite />
          </Link>
          <LEGO />
          <StarWars />
        </div>
        <div className="flex items-center gap-6">
          <PEGI7 />
        </div>
      </section>
      <section className="w-3/4 sm:w-2/3">
        <p className="text-white text-sm">{`© ${currentYear} Horizons Games`}</p>
      </section>
    </footer>
  );
}
