import React from 'react';
import monkeyImage from '../../assets/images/monkey-think.jpg';

const Filler = () => {
  return (
    <section className='my-8 bg-neutral-200 py-8'>
      <div className='container'>
        <div className='flex flex-col-reverse justify-around gap-4 small:flex-row'>
          <div className='flex items-center justify-center'>
            <p className='text-lg font-normal mobile:text-xl mobile:font-bold'>
              Ape food
              <br />
              Bamboo shoots and fresh fruits
              <br />
              Termite larvae
              <br />
              Listen what the god say
              <br />
              Sing a sad song like Sade
              <br />
              (I'ma eat your food like this fu***r an entree, P!)
            </p>
          </div>
          <div className='w-full mobile:w-1/3'>
            <img
              src={monkeyImage}
              alt='thinking monkey'
              className='rounded-xl shadow-lg shadow-black/50'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filler;
