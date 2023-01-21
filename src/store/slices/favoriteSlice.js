import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: []
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      if (!state.favorites.includes(payload)) {
        state.favorites.push(payload);
      }
    },
    setFavorites: (state, { payload }) => {
      state.favorites = payload;
    }
  }
});

export const { addFavorite, setFavorites } = favoriteSlice.actions;

export const selectFavorites = (state) => state.favorite.favorites;

export default favoriteSlice.reducer;
