import { useState } from 'react';

export const useMenuToggle = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  return { showMenu, toggleMenu, closeMenuOnMobile };
};