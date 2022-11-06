import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import  App from './components/App';
import AppBar from './components/AppBar/AppBar';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppBar/>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// https://6363790037f2167d6f7a4fbc.mockapi.io/contacts?page=1&limit=10