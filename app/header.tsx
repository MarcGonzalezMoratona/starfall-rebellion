'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CTA from './components/cta';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Menu from './components/menu';
import { useContext } from 'react';
import { MenuContext } from './store/menu-context';
import MenuLink from './components/menu-link';
import { usePageType } from './hooks/usePage';
import StarfallRebellion from './components/logos/starfall-rebellion';

export default function Header() {
  const { toggleMenu } = useContext(MenuContext);
  const pageType = usePageType();

  return (
    <>
      <header className="bg-black w-full h-16 flex items-center gap-4 px-4 sm:px-12">
        <span className="flex md:hidden" onClick={() => toggleMenu()}>
          <FontAwesomeIcon
            icon={faBars}
            className="text-xl text-white h-6 w-6"
          />
        </span>
        <ul className="md:flex gap-8 w-full hidden md:items-center">
          <Link href="/">
            <StarfallRebellion width={140} height={48} />
          </Link>
          <MenuLink
            url="/about"
            label="ABOUT"
            selected={pageType === 'about'}
          />
          <MenuLink url="/team" label="TEAM" selected={pageType === 'team'} />
          <MenuLink
            url="/media"
            label="MEDIA"
            selected={pageType === 'media'}
          />
          <MenuLink
            url="/press"
            label="PRESS"
            selected={pageType === 'press'}
          />
          <MenuLink url="/news" label="NEWS" selected={pageType === 'news'} />
          <MenuLink
            url="/contact"
            label="CONTACT"
            selected={pageType === 'contact'}
          />
        </ul>
        <CTA
          className="hidden sm:block"
          label="DOWNLOAD"
          href="https://github.com/Horizons-Games/Axolotl-Engine/releases/download/v0.5.0/Starfall.Rebellion.0.5.0.zip"
        />
      </header>
      <Menu />
    </>
  );
}
