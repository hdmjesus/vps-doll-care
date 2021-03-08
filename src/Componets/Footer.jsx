import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState(Number);
  const date = new Date();

  useEffect(() => {
    setYear(date.getFullYear());
  }, []);
  return (
    <footer className='p-3'>
      <hr className='w-3/4 m-auto text-details' />
      <p className='text-center text-black mt-3'>&copy; Vps Doll {year}</p>
      <p className='text-center text-black mt-3'>
        Esta pagina web fue creada por{' '}
        <a
          className='text-blue-500 underline'
          href='www.hdjesus.com'
          target='__blank'>
          hdjesus
        </a>
      </p>
    </footer>
  );
};

export default Footer;
