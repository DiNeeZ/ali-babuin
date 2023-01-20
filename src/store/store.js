import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import favoriteReducer from './slices/favoriteSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    favorite: favoriteReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
