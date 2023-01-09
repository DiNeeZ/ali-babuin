import { AiOutlineClose } from 'react-icons/ai';

const CartItems = ({ isMenuOpen, handleClose }) => {
  return (
    <div
      className={`${
        !isMenuOpen && 'pointer-events-none'
      } z-100 absolute inset-0 h-full w-full overflow-hidden`}
    >
      <div
        onClick={handleClose}
        className={`${
          isMenuOpen ? 'opacity-100' : 'opacity-0'
        } absolute inset-0 bg-neutral-800/70  duration-300`}
      />
      <div
        className={`absolute right-0 h-full w-[35rem] bg-white duration-300
      ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <ul className='p-8'>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
        </ul>
        <AiOutlineClose
          onClick={handleClose}
          className='absolute top-8 right-8 cursor-pointer'
          size={20}
        />
      </div>
    </div>
  );
};

export default CartItems;
