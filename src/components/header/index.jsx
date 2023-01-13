import React from 'react';
import SearchBar from './search-bar';
import NavBar from './nav-bar';
import ProductCatalog from './product-catalog';
import Logo from '../logo';

const Header = () => {
  return (
    <header className='z-10 py-2 shadow-md'>
      <div className='container flex items-center justify-between'>
        <Logo />
        <ProductCatalog />
        <SearchBar />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
