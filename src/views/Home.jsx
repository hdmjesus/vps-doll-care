import React, { useState, useEffect } from 'react';
import Header from '@/Componets/Header';
import Banner from '@/Componets/Banner';
import Services from '@/Componets/Services';
import Contacto from '@/Componets/Contacto';
import Feedback from '@/Componets/Feedback';
import Footer from '@/Componets/Footer';
const Home = () => {
  const [abierto, setAbierto] = useState(false);
  const handleClick = () => {
    setAbierto(true);
    console.log('ola');
  };

  useEffect(() => {
    console.log(abierto);
  }, []);
  return (
    <>
      <Header />
      <Banner handleMenuClick={handleClick} />
      <Services />
      <hr className=' w-3/4 m-auto text-details' />
      <section className='desktop-view mb-10 lg:flex lg:flex-row-reverse lg:w-3/4 m-auto'>
        <Contacto />
        <Feedback />
      </section>
      <Footer />
    </>
  );
};

export default Home;
