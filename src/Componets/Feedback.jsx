import React from 'react';
import Button from '@/Componets/Button';
const Feedback = () => {
  return (
    <section className='feedback'>
      <h3>Tu opinion nos importa</h3>
      <textarea
        name='Feedback'
        placeholder='Cuentanos en que podemos mejorar nuestro servicio'
      />
      <Button value='Enviar' />
    </section>
  );
};

export default Feedback;
