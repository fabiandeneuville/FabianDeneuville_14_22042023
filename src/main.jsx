import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './GlobalStyle.js';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle/>
      <App/>
    </Provider>
  </React.StrictMode>
);
