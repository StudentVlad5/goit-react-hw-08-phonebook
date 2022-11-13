import React from 'react';
import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
// import Register from 'components/Register/Register';
// import Login from './components/LoginView/LoginView';
import  App from './components/App';
// import AppBar from './components/AppBar/AppBar';
import { Layout } from 'components/Layout/Layout';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

const HomePage = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook/">
          <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='contacts' element={<App/>} />
          </Route>
          
            {/* <Route path='*' element={<NotFound/>}/> */}

          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// https://6363790037f2167d6f7a4fbc.mockapi.io/contacts?page=1&limit=10