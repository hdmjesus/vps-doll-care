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
      <hr />
      <section className='desktop-view'>
        <Contacto />
        <Feedback />
      </section>
      <Footer />
    </>
  );
};

export default Home;
