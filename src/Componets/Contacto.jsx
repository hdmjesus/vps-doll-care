import React from 'react';
import homeIcon from '@/statics/ICONS/home-24px.svg';
import phoneIcon from '@/statics/ICONS/phone_in_talk-24px.svg';
import timeIcon from '@/statics/ICONS/query_builder-24px.svg';
import faceIcon from '@/statics/ICONS/facebook-24px.svg';
import igIcon from '@/statics/ICONS/iconmonstr-instagram-11.svg';
const Contacto = () => {
  return (
    <section
      className='contacto mb-8 sm:w-9/12 sm:m-auto lg:w-1/2'
      id='contacto'>
      <h2 className='my-5 font-title text-4xl text-center text-black'>
        Contacto
      </h2>

      <article className='contacto__detail'>
        <figure className='contactoInfo'>
          <img className='contactoInfo__image' src={homeIcon} alt='Direccion' />
          <p className='contactoInfo__text'>Bacilio Echavarrias #5</p>
        </figure>

        <figure className='contactoInfo'>
          <img className='contactoInfo__image' src={phoneIcon} alt='Telefono' />
          <p className='contactoInfo__text'>(829)-577-9120</p>
        </figure>

        <figure className='contactoInfo'>
          <img className='contactoInfo__image' src={timeIcon} alt='Horario' />
          <p className='contactoInfo__text'>Viernes, 8 A.m a 9 P.m</p>
        </figure>

        <figure className='contactoInfo'>
          <img className='contactoInfo__image' src={faceIcon} alt='Facebook' />
          <p className='contactoInfo__text'>VpsDoll</p>
        </figure>

        <figure className='contactoInfo'>
          <img className='contactoInfo__image' src={igIcon} alt='Instagram' />
          <p className='contactoInfo__text'>VpsDoll</p>
        </figure>
      </article>
    </section>
  );
};

export default Contacto;
