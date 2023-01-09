import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div
      className='hidden w-[40%] items-center gap-2 rounded-full border 
    border-slate-400/20 px-4 py-1 text-neutral-400/50 focus-within:border-neutral-400/80 
    focus-within:text-slate-700 mobile:flex'>
      <input
        onChange={handleChange}
        value={value}
        type='text'
        placeholder='Search...'
        className='w-full appearance-none text-sm leading-none outline-none'
      />

      <button
        tabIndex={-1}
        className=' text-2xl text-inherit outline-none'>
        <AiOutlineSearch />
      </button>
    </div>
  );
};

export default SearchBar;
