import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home/home';
import ProductsGrid from './pages/products-grid/products-grid';
import ScrollTop from './components/scroll-top/scroll-top';

const App = () => (
  <ScrollTop>
    <Routes>
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
      </Route>
    </Routes>
  </ScrollTop>
);

export default App;
