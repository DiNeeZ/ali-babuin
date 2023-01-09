import React from 'react';
import User from './user';
import Cart from './cart';

const NavBar = () => {
  return (
    <nav>
      <ul className='flex items-center gap-4'>
        <li
          className='rounded-md border border-transparent p-1.5 text-neutral-700 
          opacity-70 outline-none focus:border-neutral-400/80 focus:opacity-100'
          tabIndex={0}>
          <Cart />
        </li>
        <li
          className='outline-none'
          tabIndex={0}>
          <User />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
