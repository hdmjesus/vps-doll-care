import React from 'react';
import Header from '@/Componets/Header';
import Banner from '@/Componets/Banner';
import Services from '@/Componets/Services';
import Contacto from '@/Componets/Contacto';
import Feedback from '@/Componets/Feedback';
import Footer from '@/Componets/Footer';
const Home = () => {
  return (
    <>
      <Header />
      <Banner />
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
