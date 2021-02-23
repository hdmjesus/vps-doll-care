import React from 'react';
import exfoliacionIcon from '@/statics/ICONS/body-lotion.svg';
import depilacionIcon from '@/statics/ICONS/wax.svg';
import facialIcon from '@/statics/ICONS/face-mask.svg';
import cejasIcon from '@/statics/ICONS/eyebrow.svg';
import pestañasIcon from '@/statics/ICONS/eye_84077.svg';

const ServicesIcon = () => {
  return (
    <article className='services'>
      <figure>
        <img src={facialIcon} alt='facial Icon' />
      </figure>

      <figure>
        <img src={depilacionIcon} alt='depilacion Icon' />
      </figure>

      <figure>
        <img src={exfoliacionIcon} alt='exfoliacion Icon' />
      </figure>

      <figure>
        <img src={cejasIcon} alt='cejas Icon' />
      </figure>

      <figure>
        <img src={pestañasIcon} alt='pestañas Icon' />
      </figure>
    </article>
  );
};

export default ServicesIcon;
