import React from 'react';
import { ReactComponent as LogoImg } from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link
      to='/'
      className='-ml-4 block h-11 w-auto rounded-md border border-transparent py-2 px-4 
			outline-none focus:border-neutral-400/80'>
      <LogoImg className='h-full w-full text-red-600' />
    </Link>
  );
};

export default Logo;
