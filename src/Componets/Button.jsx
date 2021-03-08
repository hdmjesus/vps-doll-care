import React from 'react';

const Button = (props) => {
  const { value } = props;

  return (
    <button className='button bg-gradient-to-r from-primary to-second mt-5 p-2   hover:bg-opacity-5 w-full rounded-full font-body font-light text-white uppercase text-sm '>
      {value === 'Contactanos' ? (
        <a href='https://api.whatsapp.com/send?phone=18295779120&text=Hola,%20me%20interesa%20visitar%20VPS'>
          Contactanos
        </a>
      ) : (
        value
      )}
    </button>
  );
};

export default Button;
