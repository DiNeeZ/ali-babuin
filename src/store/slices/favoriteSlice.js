import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: []
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    }
  }
});

export const { setFavorites } = favoriteSlice.actions;

export const selectFavorites = (state) => state.favorite.favorites;

export default favoriteSlice.reducer;
