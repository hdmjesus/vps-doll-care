import React from 'react';

const Button = (props) => {
  const { value } = props;

  return (
    <button className='button bg-gradient-to-r from-primary to-second mt-5 p-2   hover:bg-opacity-5 w-full rounded-full font-body font-light text-white uppercase text-sm '>
      {value}
    </button>
  );
};

export default Button;
