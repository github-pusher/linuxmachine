import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_THEME_NAME } from '../../themes';
import { appRecord } from '../../services/constants';

const initialState = {
  themeName: appRecord && appRecord.themingProvider.themeName !== undefined ?
    appRecord.themingProvider.themeName : DEFAULT_THEME_NAME,
}

export const themingProviderSlice = createSlice({
  name: 'themingProvider',
  initialState,
  reducers: {
    setThemeName: (state, action) => {
      state.themeName = action.payload;
    },
  },
});

export const { setThemeName } = themingProviderSlice.actions;

export default themingProviderSlice.reducer;
