'use client';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useContext } from 'react';
import { MenuContext } from '../store/menu-context';
import MenuLink from './menu-link';
import StarfallRebellion from './logos/starfall-rebellion';

export default function Menu() {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);

  return (
    <nav
      className={`fixed top-0 left-0 z-10 bg-zinc-900 h-full block md:hidden w-full ${
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
      <Link
        className="w-full flex justify-center my-8"
        href="/"
        onClick={() => toggleMenu()}
      >
        <StarfallRebellion width={298} height={132} />
      </Link>
      <ul className="mx-8 py-8 text-lg flex flex-col gap-8">
        <MenuLink url="/about" label="ABOUT" onClick={() => toggleMenu()} />
        <MenuLink url="/team" label="TEAM" onClick={() => toggleMenu()} />
        <MenuLink url="/media" label="MEDIA" onClick={() => toggleMenu()} />
        <MenuLink url="/press" label="PRESS" onClick={() => toggleMenu()} />
        {/* <MenuLink url="/news" label="NEWS" onClick={() => toggleMenu()} /> */}
        <MenuLink url="/contact" label="CONTACT" onClick={() => toggleMenu()} />
      </ul>
    </nav>
  );
}
