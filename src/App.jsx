import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Layout from './components/layout';
import Home from './pages/home/home';
import Categories from './pages/categories/categories';
import Details from './pages/details/details';
import SearchResult from './pages/search-result/search-result';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ScrollTop from './components/scroll-top/scroll-top';

import { useDispatch } from 'react-redux';
import { setCurrentUser } from './store/slices/userSlice';
import { onAuthStateChangedListener, getUserDocument } from './utils/firebase';

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      console.log('Firebase auth: ' + JSON.stringify(user));
      let currentUser;

      if (user) {
        currentUser = await getUserDocument(user);
      } else {
        currentUser = null;
      }

      dispatch(setCurrentUser(currentUser));
    });

    return unsubscribe;
  }, []);

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
            <Route
              path='/login'
              element={<Login />}
            />
            <Route
              path='/register'
              element={<Register />}
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </ScrollTop>
  );
};

export default App;
