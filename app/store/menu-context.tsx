'use client';
import React, { createContext, useState } from 'react';

type MenuContextType = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export const MenuContext = createContext<MenuContextType>({
  isMenuOpen: false,
  toggleMenu: () => {},
});

export const MenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
