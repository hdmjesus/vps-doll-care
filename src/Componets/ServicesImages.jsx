import React from 'react';

import exfoliacionDesktop from '@/statics/IMG/desktop/pexels-gustavo-fring-3985329.webp';
import exfoliacionMobile from '@/statics/IMG/mobile/pexels-gustavo-fring-3985329.webp';

import facialDesktop from '@/statics/IMG/desktop/pexels-andrea-piacquadio-3757939.webp';
import facialMobile from '@/statics/IMG/mobile/pexels-andrea-piacquadio-3757939.webp';

import pestañaslDesktop from '@/statics/IMG/desktop/people-2605526_1280.webp';
import pestañasMobile from '@/statics/IMG/mobile/people-2605526_1280.webp';

import depilacionDesktop from '@/statics/IMG/desktop/pexels-marina-abrosimova-5563665.webp';
import depilacionMobile from '@/statics/IMG/mobile/pexels-marina-abrosimova-5563665.webp';

import cejasDesktop from '@/statics/IMG/desktop/pexels-cottonbro-4154199.webp';
import cejasMobile from '@/statics/IMG/mobile/pexels-cottonbro-4154199.webp';

const ServicesImages = () => {
  return (
    <article className='services'>
      <picture class='service__images'>
        <source media='(min-width:768px)' srcset={exfoliacionDesktop} />
        <img src={exfoliacionMobile} alt='Servicio de exfoliacion' />
      </picture>

      <picture class='service__images'>
        <source media='(min-width:768px)' srcset={facialDesktop} />
        <img src={facialMobile} alt='Servicio de limpieza facial' />
      </picture>

      <picture class='service__images'>
        <source media='(min-width:768px)' srcset={pestañaslDesktop} />
        <img src={pestañasMobile} alt='Servicio de pestañas' />
      </picture>

      <picture class='service__images'>
        <source media='(min-width:768px)' srcset={depilacionDesktop} />
        <img src={depilacionMobile} alt='Servicio de depilacion' />
      </picture>

      <picture class='service__images'>
        <source media='(min-width:768px)' srcset={cejasDesktop} />
        <img src={cejasMobile} alt='Servicio de tintado de cejas' />
      </picture>
    </article>
  );
};

export default ServicesImages;
