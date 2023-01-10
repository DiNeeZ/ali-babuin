import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import { CgDollar } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import CounterBtns from '../counter-btns';

const Card = ({ item }) => {
  return (
    <article
      key={item.id}
      className='overflow-hidden rounded-md shadow-md shadow-gray-600/50'>
      <div className='flex h-full flex-col justify-between gap-8'>
        <div>
          <Link
            className='group/link'
            to='/'>
            <h3 className='bg-neutral-300 py-2 pl-4 font-bold duration-150 group-hover/link:bg-neutral-400'>
              {item.title}
            </h3>
            <div className=' relative h-0 w-full pb-[50%]'>
              <img
                src={item.thumbnail}
                alt={item.title}
                className='absolute inset-0 h-full w-full object-cover object-center'
              />
            </div>
          </Link>
          <p className='p-4 leading-tight'>{item.description}</p>
        </div>

        <div className='flex items-end justify-between gap-4 px-4 pb-4'>
          <span className='flex items-center gap-1 font-semibold'>
            <CgDollar />
            {item.price}
          </span>
          <CounterBtns />
          <button className='flex items-start gap-2 rounded-md bg-red-500 px-2 pt-1 text-white duration-150 hover:bg-red-600'>
            <BsCart2 />
            <span>Add</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
