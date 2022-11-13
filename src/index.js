import React from 'react';
// import { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
// import  App from './components/App';
// import { Layout } from 'components/Layout/Layout';
import {AppPath} from './components/AppPath';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

// const HomePage = lazy(() => import('./pages/Home'));
// const Login = lazy(() => import('./pages/Login'));
// const Register = lazy(() => import('./pages/Register'));
// const Contacts = lazy(() => import('./pages/Contacts'));


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook/">
          {/* <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='contacts' element={<Contacts/>} />
          </Route> */}
          <AppPath/>
            {/* <Route path='*' element={<NotFound/>}/> */}

          {/* </Routes> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
