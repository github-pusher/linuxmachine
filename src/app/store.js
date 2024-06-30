import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from '../containers/Api/apiSlice';

import i18nReducer from '../services/i18n/i18nSlice';

import videoBackgroundReducer from '../containers/VideoBackground/videoBackgroundSlice';
import themingProviderReducer from '../containers/ThemingProvider/themingProviderSlice';
import postListItemReducer from '../containers/PostListItem/postListItemSlice';

export const store = configureStore({
  reducer: {
    i18n: i18nReducer,
    videoBackground: videoBackgroundReducer,
    themingProvider: themingProviderReducer,
    postListItem: postListItemReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
