import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import FontFaceObserver from 'fontfaceobserver';
import 'sanitize.css/sanitize.css';

import { apiSlice } from './containers/Api/apiSlice';

import { store } from './app/store';

import './app/viewport';
import { subscribeRecord } from './services';

import App from './app/App';

import ThemingProvider from './containers/ThemingProvider';

import { themes } from './themes';

const ubuntuFontObserver = new FontFaceObserver('Ubuntu', {});

ubuntuFontObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

subscribeRecord(store);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ApiProvider api={apiSlice}>
    <Provider store={store}>
      <BrowserRouter>
        <ThemingProvider themes={themes}>
          <App />
        </ThemingProvider>
      </BrowserRouter>
    </Provider>
  </ApiProvider>
);
