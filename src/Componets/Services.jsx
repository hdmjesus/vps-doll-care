import React from 'react';
import ServicesImages from '@/Componets/ServicesImages';
import ServicesIcons from '@/Componets/ServicesIcons';
const Services = () => {
  return (
    <section className='services'>
      <ServicesImages />
      <h2>Servicios</h2>
      <ServicesIcons />
    </section>
  );
};

export default Services;
