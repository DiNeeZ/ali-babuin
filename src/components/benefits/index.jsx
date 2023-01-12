import React from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { IoPricetags } from 'react-icons/io5';
import { BiPackage } from 'react-icons/bi';
import { RiCustomerService2Fill } from 'react-icons/ri';

const Benefits = () => {
  return (
    <section className='py-8'>
      <div className='container'>
        <ul
          className='grid grid-cols-1 items-center justify-center gap-2 small:grid-cols-2 
					mobile:gap-6 tablet:grid-cols-4'>
          <li
            className='flex flex-col items-center justify-center rounded-lg 
					bg-amber-300 py-4 shadow-md'>
            <div className='mb-2 rounded-full bg-neutral-700 p-4'>
              <MdLocalShipping
                className='text-amber-300'
                size={60}
              />
            </div>
            <p className='font-bold uppercase'>Fast Delivery</p>
          </li>
          <li className='flex flex-col items-center justify-center rounded-lg bg-rose-300 py-4 shadow-md'>
            <div className='mb-2 rounded-full bg-neutral-700 p-4'>
              <IoPricetags
                className='text-rose-300'
                size={60}
              />
            </div>
            <p className='font-bold uppercase'>Best Prices</p>
          </li>
          <li className='flex flex-col items-center justify-center rounded-lg bg-lime-300 py-4 shadow-md'>
            <div className='mb-2 rounded-full bg-neutral-700 p-4'>
              <BiPackage
                className='text-lime-300'
                size={60}
              />
            </div>
            <p className='font-bold uppercase'>Quality products</p>
          </li>
          <li className='flex flex-col items-center justify-center rounded-lg bg-sky-300 py-4 shadow-md'>
            <div className='mb-2 rounded-full bg-neutral-700 p-4'>
              <RiCustomerService2Fill
                className='text-sky-300'
                size={60}
              />
            </div>
            <p className='font-bold uppercase'>Friendly service</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
