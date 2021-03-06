import React, { useState, useEffect } from 'react';
import Button from '@/Componets/Button';
import BannerMobile from '@/statics/IMG/mobile/pexels-andrea-piacquadio-3757942.webp';
import BannerDesktop from '@/statics/IMG/desktop/pexels-andrea-piacquadio-3757942.webp';
const Banner = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? BannerDesktop : BannerMobile;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: 'no-repeat',
      }}
      className='banner flex justify-center items-center h-72 sm:h-96'>
      <article className='banner__actions mt-10 flex flex-col min-w-200 w-1/2 max-w-sm items-center'>
        <div className='banner__description bg-actions flex flex-col justify-center p-2.5 rounded-lg w-full items-center h-24 lg:mt-9 '>
          <h1 className='font-title text-5xl text-white'>Vps Doll</h1>
          <p className='font-body text-white font-light'>Sthetic Studio</p>
        </div>
        <div className='w-4/5 max-w-xs'>
          {' '}
          <Button value='Contactanos' />
        </div>
      </article>
    </section>
  );
};

export default Banner;
