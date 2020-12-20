import React from 'react';
import ReactDOM from 'react-dom';
import './global';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
      <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
