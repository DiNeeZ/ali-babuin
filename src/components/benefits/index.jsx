import React from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { IoPricetags } from 'react-icons/io5';
import { BiPackage } from 'react-icons/bi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { motion } from 'framer-motion';

const Benefits = () => {
  const container = {
    hide: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const item = {
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hide: { opacity: 0, y: -200 }
  };

  return (
    <section className='py-12'>
      <div className='container'>
        <motion.ul
          variants={container}
          initial='hide'
          animate='show'
          className='grid grid-cols-1 items-center justify-center gap-2 small:grid-cols-2 
					mobile:gap-6 tablet:grid-cols-4'>
          <motion.li
            variants={item}
            className='flex flex-col items-center justify-center rounded-lg 
					  bg-amber-300 py-4 shadow-md'>
            <div className='mb-2 rounded-full bg-neutral-700 p-4'>
              <MdLocalShipping
                className='text-amber-300'
                size={60}
              />
            </div>
            <p className='font-bold uppercase'>Fast Delivery</p>
          </motion.li>
          <motion.li
            variants={item}
            className='flex flex-col items-center justify-center rounded-lg bg-rose-300 py-4 shadow-md'>
            <div className='mb-2 rounded-full bg-neutral-700 p-4'>
              <IoPricetags
                className='text-rose-300'
                size={60}
              />
            </div>
            <p className='font-bold uppercase'>Best Prices</p>
          </motion.li>
          <motion.li
            variants={item}
            className='flex flex-col items-center justify-center rounded-lg bg-lime-300 py-4 shadow-md'>
            <div className='mb-2 rounded-full bg-neutral-700 p-4'>
              <BiPackage
                className='text-lime-300'
                size={60}
              />
            </div>
            <p className='font-bold uppercase'>Quality products</p>
          </motion.li>
          <motion.li
            variants={item}
            className='flex flex-col items-center justify-center rounded-lg bg-sky-300 py-4 shadow-md'>
            <div className='mb-2 rounded-full bg-neutral-700 p-4'>
              <RiCustomerService2Fill
                className='text-sky-300'
                size={60}
              />
            </div>
            <p className='font-bold uppercase'>Friendly service</p>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
};

export default Benefits;
