import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search-bar';
import NavBar from './nav-bar';
import { ReactComponent as LogoImg } from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <header className='py-2 shadow-md'>
      <div className='container flex items-center justify-between'>
        <Link
          to='/'
          className='-ml-4 block h-11 w-auto rounded-md border border-transparent py-2 px-4 
          outline-none focus:border-neutral-400/80'>
          <LogoImg className='h-full w-full text-red-600' />
        </Link>

        <SearchBar />

        <NavBar />
      </div>
    </header>
  );
};

export default Header;
