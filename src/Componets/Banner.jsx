import React from 'react';
import Button from '@/Componets/Button';
const Banner = () => {
  return (
    <section className='banner'>
      <article className='banner__description'>
        <h1>Vps Doll</h1>
        <p>Sthetic Studio</p>
      </article>
      <Button value='Contactanos' />
    </section>
  );
};

export default Banner;
