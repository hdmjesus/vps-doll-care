import React from 'react';
import exfoliacionIcon from '@/statics/ICONS/body-lotion.svg';
import depilacionIcon from '@/statics/ICONS/wax.svg';
import facialIcon from '@/statics/ICONS/face-mask.svg';
import cejasIcon from '@/statics/ICONS/eyebrow.svg';
import pestañasIcon from '@/statics/ICONS/eye_84077.svg';

const ServicesIcon = () => {
  return (
    <article id='servicios' className='services flex flex-wrap justify-center'>
      <figure className='services__icons'>
        <img className='w-full' src={facialIcon} alt='facial Icon' />
        <figcaption className='text-sm'>Limpieza facial</figcaption>
      </figure>

      <figure className='services__icons'>
        <img src={depilacionIcon} alt='depilacion Icon' />
        <figcaption className='text-sm'>Depilacion</figcaption>
      </figure>

      <figure className='services__icons'>
        <img src={exfoliacionIcon} alt='exfoliacion Icon' />
        <figcaption className='text-sm'>Exfoliacion</figcaption>
      </figure>

      <figure className='services__icons'>
        <img src={cejasIcon} alt='cejas Icon' />
        <figcaption className='text-sm'>Tintado de cejas</figcaption>
      </figure>

      <figure className='services__icons'>
        <img src={pestañasIcon} alt='pestañas Icon' />
        <figcaption className='text-sm'>Colocacion de pestañas</figcaption>
      </figure>
    </article>
  );
};

export default ServicesIcon;
