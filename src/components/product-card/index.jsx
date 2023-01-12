import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import { CgDollar } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import CounterBtns from '../counter-btns';
import { BiShoppingBag } from 'react-icons/bi';
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai';

const ProductCard = ({ item }) => {
  return (
    <article
      key={item.id}
      className='overflow-hidden rounded-md shadow-md shadow-gray-600/50'>
      {/* product card container  */}
      <div className='flex h-full flex-col justify-between'>
        {/* product card container  */}
        <div>
          <div className='flex items-center justify-between px-4'>
            <Link
              to='/'
              aria-label={`Go to ${item.title} product page`}
              className='outline-none hover:opacity-80 focus:opacity-80'>
              <h3 className='py-4 font-bold'>{item.title.toUpperCase()}</h3>
            </Link>
            <Link
              to='/'
              aria-label='go to checkout'
              className='p-2 text-red-500 outline-none duration-150 hover:text-red-600 focus:text-red-600'>
              <BiShoppingBag size={20} />
            </Link>
          </div>

          <div className='relative mb-6 h-0 w-full pb-[75%]'>
            <img
              src={item.thumbnail}
              alt={item.title}
              className='absolute inset-0 h-full w-full object-cover object-center'
            />

            <span
              className='absolute left-4 bottom-0 flex translate-y-1/2 items-center gap-1 rounded-md 
              bg-red-500 py-1 pl-2 pr-3 font-semibold text-white'>
              <CgDollar />
              {item.price}
            </span>
          </div>

          <p className='w-3/4 p-4 leading-tight mobile:w-full'>{item.description}</p>
        </div>

        <div className='flex gap-1 px-4 pb-4'>
          {/* <CounterBtns /> */}

          <button
            className='flex grow items-start justify-center gap-2 rounded-md bg-gradient-to-r from-cyan-700 to-teal-900 
            px-2 py-2 text-white outline-none duration-150 hover:opacity-90 focus:opacity-90'>
            <BsCart2 size={20} />
            <span>Add To Card</span>
          </button>
          <Link
            className='flex w-10 items-center justify-center gap-2 rounded-md border border-neutral-400 
            bg-neutral-200 text-neutral-400 outline-none duration-150 hover:bg-neutral-400 
          hover:text-neutral-200 focus:bg-neutral-400 focus:text-neutral-200'>
            <AiOutlineHeart size={21} />
          </Link>
          <Link
            className='flex w-10 items-center justify-center gap-2 rounded-md border border-neutral-400 
            bg-neutral-200 text-neutral-400 outline-none duration-150 hover:bg-neutral-400 
          hover:text-neutral-200 focus:bg-neutral-400 focus:text-neutral-200'>
            <AiOutlineEye size={21} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
