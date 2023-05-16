'use client';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useContext } from 'react';
import { MenuContext } from '../context/menu-context';
import StarWars from './logos/star-wars';
import MenuLink from './menu-link';

export default function Menu() {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);

  return (
    <nav
      className={`fixed top-0 left-0 z-10 bg-zinc-900 h-full block sm:hidden w-full ${
        isMenuOpen
          ? 'animate-slideRight'
          : '-translate-x-full animate-slideLeft'
      } `}
    >
      <div className="flex m-4">
        <span
          className="bg-zinc-700 rounded-md flex items-center justify-center p-2"
          onClick={() => toggleMenu()}
        >
          <FontAwesomeIcon
            icon={faClose}
            className="text-xl text-white h-6 w-6"
          />
        </span>
      </div>
      <Link className="w-full flex justify-center my-8" href="/">
        <StarWars width={280} height={120} />
      </Link>
      <ul className="mx-8 py-8 text-lg flex flex-col gap-8">
        <MenuLink url="/about" label="ABOUT" />
        <MenuLink url="/media" label="MEDIA" />
        <MenuLink url="/press" label="PRESS" />
        <MenuLink url="/contact" label="CONTACT" />
      </ul>
    </nav>
  );
}
