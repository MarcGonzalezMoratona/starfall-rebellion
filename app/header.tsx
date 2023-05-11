import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DownloadCTA from './components/download-cta';
import Menu from './components/menu';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import StarWars from './components/logos/star-wars';
// import { useState } from 'react';

export default function Header() {
  //   const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <header className="bg-black w-full h-16 flex items-center gap-4 px-4 sm:px-12">
      <span
        className="flex sm:hidden"
        // onClick={() => toggleMenu(!isMenuOpen)}
      >
        <FontAwesomeIcon icon={faBars} className="text-xl text-white h-6 w-6" />
      </span>
      <Link className="w-full" href="/">
        <StarWars />
      </Link>
      <Menu />
      <DownloadCTA />
    </header>
  );
}
