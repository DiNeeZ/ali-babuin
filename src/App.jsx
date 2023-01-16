import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout';
import Home from './pages/home/home';
import ProductsGrid from './pages/products-grid/products-grid';
import Details from './pages/details/details';
import ScrollTop from './components/scroll-top/scroll-top';

const App = () => {
  const location = useLocation();

  return (
    <ScrollTop>
      <AnimatePresence>
        <Routes
          location={location}
          key={location.pathname}>
          <Route
            path='/'
            element={<Layout />}>
            <Route
              index
              element={<Home />}
            />
            <Route
              path='/products/:parameters'
              element={<ProductsGrid />}
            />
            <Route
              path='/details/:id'
              element={<Details />}
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </ScrollTop>
  );
};

export default App;
