'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DownloadCTA from './components/download-cta';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import StarWars from './components/logos/star-wars';
import Menu from './components/menu';
import { useContext } from 'react';
import { MenuContext } from './context/menu-context';
import MenuLink from './components/menu-link';

export default function Header() {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <>
      <header className="bg-black w-full h-16 flex items-center gap-4 px-4 sm:px-12">
        <span className="flex sm:hidden" onClick={() => toggleMenu()}>
          <FontAwesomeIcon
            icon={faBars}
            className="text-xl text-white h-6 w-6"
          />
        </span>
        <ul className="sm:flex gap-8 w-full hidden">
          <Link className="mr-8" href="/">
            <StarWars width={70} height={30} />
          </Link>
          <MenuLink url="/about" label="ABOUT" />
          <MenuLink url="/media" label="MEDIA" />
          <MenuLink url="/press" label="PRESS" />
          <MenuLink url="/contact" label="CONTACT" />
        </ul>
        <DownloadCTA />
      </header>
      <Menu />
    </>
  );
}
