import { createSlice } from '@reduxjs/toolkit';

import { appRecord } from '../../services/constants';

const initialState = {
  loopBg: appRecord && appRecord.videoBackground.loopBg !== undefined ?
    appRecord.videoBackground.loopBg : false,
}

export const videoBackgroundSlice = createSlice({
  name: 'videoBackground',
  initialState,
  reducers: {
    setLoopBg: (state, action) => {
      state.loopBg = action.payload;
    },
  },
});

export const { setLoopBg } = videoBackgroundSlice.actions;

export default videoBackgroundSlice.reducer;
