import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  overlay: false,
}

export const postListItemSlice = createSlice({
  name: 'postListItem',
  initialState,
  reducers: {
    setOverlay: (state, action) => {
      state.overlay = action.payload;
    },
  },
});

export const { setOverlay } = postListItemSlice.actions;

export default postListItemSlice.reducer;
