import React from 'react';
import Button from '@/Componets/Button';
const Feedback = () => {
  return (
    <section
      className='feedback px-8  md:w-4/5 md:m-auto lg:w-1/2'
      id='calificacion'>
      <h3 className='mx-auto my-8 font-bold text-black font-body'>
        Tu opinion nos importa
      </h3>
      <textarea
        className='w-full h-24 max-h-48 p-3 text-sm'
        name='Feedback'
        placeholder='Cuentanos en que podemos mejorar nuestro servicio.'
      />
      <div className='w-1/2 m-auto max-w-xs '>
        {' '}
        <Button value='Enviar' />
      </div>
    </section>
  );
};

export default Feedback;
