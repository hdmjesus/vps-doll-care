import React from 'react';
import homeIcon from '@/statics/ICONS/home-24px.svg';
import phoneIcon from '@/statics/ICONS/phone_in_talk-24px.svg';
import timeIcon from '@/statics/ICONS/query_builder-24px.svg';
import faceIcon from '@/statics/ICONS/facebook-24px.svg';
import igIcon from '@/statics/ICONS/iconmonstr-instagram-11.svg';
const Contacto = () => {
  return (
    <section className='contacto'>
      <h2>Contacto</h2>

      <article className='contacto__detail'>
        <figure>
          <img src={homeIcon} alt='Direccion' />
          <p>Bacilio Echavarrias #5</p>
        </figure>

        <figure>
          <img src={phoneIcon} alt='Telefono' />
          <p>(829)-577-9120</p>
        </figure>

        <figure>
          <img src={timeIcon} alt='Horario' />
          <p>Viernes, 8 A.m a 9 P.m</p>
        </figure>

        <figure>
          <img src={faceIcon} alt='Facebook' />
          <p>VpsDoll</p>
        </figure>

        <figure>
          <img src={igIcon} alt='Instagram' />
          <p>VpsDoll</p>
        </figure>
      </article>
    </section>
  );
};

export default Contacto;
