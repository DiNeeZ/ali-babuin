import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

const Layout = () => {
  return (
    <div
      className='flex min-h-screen flex-col border-b-2 border-transparent 
       font-catamaran text-neutral-700'>
      <Header />
      <main className='grow bg-neutral-50 py-8 shadow-md'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
