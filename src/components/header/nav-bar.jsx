import React from 'react';
import User from './user';
import Cart from './cart';

const NavBar = () => {
  return (
    <nav>
      <ul className='flex items-center gap-4'>
        <li
          className='rounded-md border border-transparent p-1.5 text-neutral-700 
          outline-none focus-within:border-neutral-400/80'>
          <Cart />
        </li>
        <li
          className='rounded-md border border-transparent text-neutral-700 
          outline-none focus-within:border-neutral-400/80'>
          <User />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
