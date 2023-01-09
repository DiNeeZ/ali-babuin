import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CgDollar } from 'react-icons/cg';

import { BiShoppingBag } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import CartItems from './cart-items';
import { products } from '../../assets/data';

const Cart = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscapeKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => document.body.removeEventListener('keydown', closeOnEscapeKey);
  }, []);

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className='relative cursor-pointer'>
        <BiShoppingBag className='text-2xl ' />
        <span
          className='absolute top-[-6px] right-[-6px] flex h-4 w-4 select-none items-center 
          justify-center rounded-full bg-neutral-700 text-xs leading-none text-white'>
          2
        </span>
      </div>

      <div
        className={`${
          !open && 'pointer-events-none'
        } z-100 absolute inset-0 h-full w-full overflow-hidden`}>
        <div
          onClick={() => setOpen(false)}
          className={`${
            open ? 'opacity-100' : 'opacity-0'
          } absolute inset-0 bg-neutral-800/70  duration-300`}
        />
        <div
          className={`absolute right-0 h-full w-[35rem] bg-white 
          duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <h2 className='mx-8 border-b py-4 text-xl font-semibold'>Cart Items</h2>
          <div className='h-[calc(100%_-_4rem)] overflow-y-auto'>
            <CartItems products={products} />

            <div className='mx-24 my-8'>
              <Link
                tabIndex={open ? 0 : -1}
                to='/checkout'
                className='flex cursor-pointer items-center justify-between rounded-lg 
              bg-neutral-800 px-12 py-2 text-white duration-150 hover:bg-neutral-800/95'>
                <span>Go to Checkout!</span>
                <span
                  className='relative flex items-center pl-4
                  before:absolute before:left-0 before:h-full before:w-[2px] before:bg-white'>
                  <CgDollar />
                  240
                </span>
              </Link>
            </div>
          </div>
          <AiOutlineClose
            onClick={() => setOpen(false)}
            className='absolute top-4 right-8 cursor-pointer'
            size={25}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
