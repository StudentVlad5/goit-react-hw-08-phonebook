import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const AppPath = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
      <Route path='login' element={<RestrictedRoute redirectTo="/contacts" component={<Login/>}/>}/>
      <Route path='register' element={<RestrictedRoute redirectTo="/contacts" component={<Register/>}/>}/>
      <Route path='contacts' element={<PrivateRoute redirectTo="/login" component={<Contacts/>} />}/>
     <Route path='*' element={<RestrictedRoute redirectTo="/home" component={<HomePage/>}/>}/>
     </Route>
    </Routes>
  )
}