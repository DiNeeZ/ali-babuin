import { AiOutlineClose } from 'react-icons/ai';
import { CgDollar } from 'react-icons/cg';
import CounterBtns from '../counter-btns';

const CartItems = ({ products }) => {
  return (
    <ul className='mx-8 flex flex-col gap-4 py-8'>
      {products.map((product) => {
        return (
          <li
            key={product.id}
            className='flex items-center gap-4'>
            <div className='group/close relative w-1/4 overflow-hidden rounded-xl'>
              <img
                src={product.cover}
                alt={product.name}
                className=' h-full w-full object-cover'
              />

              <div
                className='absolute inset-0 flex items-center justify-center bg-neutral-600/50 
                opacity-0 duration-300 group-hover/close:opacity-100'>
                <div
                  className='group/close-btn flex h-8 w-8 cursor-pointer items-center justify-center 
                  rounded-full bg-white'>
                  <AiOutlineClose className='rotate-0 duration-300 group-hover/close-btn:rotate-180' />
                </div>
              </div>
            </div>

            <div className='flex h-full flex-col justify-between py-2'>
              <h3 className='text-lg font-medium'>{product.name}</h3>
              <div>
                <div>
                  <div className='mb-1.5 flex items-center gap-2 font-light'>
                    Unit price
                    <span className='flex items-center font-bold'>
                      <CgDollar />
                      {product.price}
                    </span>
                  </div>
                  <CounterBtns />
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CartItems;
