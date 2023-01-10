import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const CounterBtns = () => {
  return (
    <div
      className='shrink-1 inline-flex items-stretch overflow-hidden rounded-md 
                    border-none bg-teal-800 text-white'>
      <AiOutlinePlus
        className='flex h-full w-8 cursor-pointer items-center justify-center p-2 
                      duration-150 hover:bg-teal-900'
      />
      <span className='flex h-8 w-7 select-none items-center justify-center text-lg'>1</span>
      <AiOutlineMinus
        className='flex h-full w-8 cursor-pointer items-center justify-center p-2 
                      duration-150 hover:bg-teal-900'
      />
    </div>
  );
};

export default CounterBtns;
