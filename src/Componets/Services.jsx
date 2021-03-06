import React from 'react';
import ServicesImages from '@/Componets/ServicesImages';
import ServicesIcons from '@/Componets/ServicesIcons';
const Services = () => {
  return (
    <section className='services w-4/5 lg:w-full my-8 mx-auto' id='servicios'>
      <ServicesImages />
      <h2 className='my-5 font-title text-4xl text-center text-black'>
        Servicios
      </h2>
      <ServicesIcons />
    </section>
  );
};

export default Services;
