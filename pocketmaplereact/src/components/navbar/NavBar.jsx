import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoClose, IoMenu } from 'react-icons/io5';
import './NavBar.css';
import { useMenuToggle } from './NavBar.js';

const Navbar = () => {
  const { showMenu, toggleMenu, closeMenuOnMobile } = useMenuToggle();

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Pocket Maple
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? 'show-menu' : ''}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Home
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="/characters"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Characters
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="/bosses"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Bosses
              </NavLink>
            </li>
          </ul>

          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;