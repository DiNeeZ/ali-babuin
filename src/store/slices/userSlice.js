import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      state.currentUser = payload;
    }
  }
});

export const { setCurrentUser } = userSlice.actions;

export const selectUser = (state) => state.user.currentUser;

export default userSlice.reducer;
