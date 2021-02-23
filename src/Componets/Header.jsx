import React from 'react';
import navBar from '@/statics/ICONS/bars-menu.svg';
import vpsLogo from '@/statics/ICONS/vpsLogo.png';
const Header = () => {
  return (
    <header>
      <figure className='header__logo'>
        <img src={vpsLogo} alt='Logo VPS Doll' />
      </figure>
      <nav>
        <figure className='header__nav--mobile'>
          <img src={navBar} alt='hamburguer menu' />
        </figure>
      </nav>
      <nav className='header__nav--desktop'>
        <ul>
          <li>Servicios</li>
          <li>Contacto</li>
          <li>Calificanos</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
