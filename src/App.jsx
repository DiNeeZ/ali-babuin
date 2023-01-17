import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout';
import Home from './pages/home/home';
import Categories from './pages/categories/categories';
import Details from './pages/details/details';
import SearchResult from './pages/search-result/search-result';
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
              path='/categories/:parameters'
              element={<Categories />}
            />
            <Route
              path='/details/:id'
              element={<Details />}
            />
            <Route
              path='/search/:query'
              element={<SearchResult />}
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </ScrollTop>
  );
};

export default App;
