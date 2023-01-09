import { useState, useEffect } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import CartItems from './cart-items';

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
        className='relative cursor-pointer'
      >
        <BiShoppingBag className='text-2xl ' />
        <span
          className='absolute top-[-6px] right-[-6px] flex h-4 w-4 select-none 
                     items-center justify-center rounded-full bg-neutral-700 
                     text-xs leading-none text-white'
        >
          2
        </span>
      </div>
      <CartItems
        isMenuOpen={open}
        handleClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Cart;
