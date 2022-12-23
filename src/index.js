import React from 'react';
// import { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import {AppPath} from './components/AppPath';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook/">
            <AppPath/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
