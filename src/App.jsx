import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home/home';
import Category from './pages/category/category';

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Layout />}>
        <Route
          index
          element={<Home />}
        />
        <Route
          path='/category/:category'
          element={<Category />}
        />
      </Route>
    </Routes>
  );
};

export default App;
