import React from 'react';

const SubmitButton = ({ children }) => {
  return (
    <button
      type='submit'
      className='rounded bg-cyan-600 px-12 py-2 text-lg font-semibold text-white outline-none 
			duration-300 hover:bg-cyan-600/80 focus:translate-y-1 focus:bg-cyan-600/80'>
      {children}
    </button>
  );
};

export default SubmitButton;
