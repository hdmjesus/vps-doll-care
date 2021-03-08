import React, { useState, useEffect, useRef } from 'react';
import navBar from '@/statics/ICONS/bars-menu.svg';
import vpsLogo from '@/statics/ICONS/vpsLogo.png';
const Header = () => {
  const menuMobile = useRef();
  const [count, setCount] = useState(0);

  const handleMenu = () => {
    menuMobile.current.classList;
    menuMobile.current.classList.toggle('move');
  };
  return (
    <header className='w-full absolute top-0 right-0 left z-10   '>
      <div className='flex justify-between items-center p-5  h-20'>
        <figure className='header__logo max-w-80 -my-5 w-1/4 sm:w-40'>
          <img
            className='w-full max-w-1/4'
            src={vpsLogo}
            alt='Logo VPS Doll w-full'
          />
        </figure>
        <nav className='flex items-center lg:hidden'>
          <figure
            className='header__nav--mobile w-6  h-3.5 '
            onClick={handleMenu}>
            <img src={navBar} alt='hamburguer menu w-full ' />
          </figure>
        </nav>
        <nav className='header__nav--desktop hidden lg:block'>
          <ul className='flex px-9'>
            <li className='mr-4 hover:text-white'>
              <a href='#servicios'>Servicios</a>{' '}
            </li>
            <li className='mr-4 hover:text-white'>
              <a href='#contacto'>Contacto</a>
            </li>
            <li className=' hover:text-white'>
              <a href='#calificacion'>Calificanos</a>
            </li>
          </ul>
        </nav>
      </div>
      <nav
        ref={menuMobile}
        className='nav__mobile  bg-BGmenuMobile text-fontMenuMobile font-bold lg:hidden  px-10 py-4'>
        <ul>
          <li class='mb-1.5 hover:text-variants'>
            <a href='#servicios'>Servicios</a>{' '}
          </li>
          <li class='mb-1.5 hover:text-variants'>
            <a href='#contacto'>Contacto</a>
          </li>
          <li class='mb-1.5 hover:text-variants'>
            {' '}
            <a href='#calificacion'>Calificanos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
