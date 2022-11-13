import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
// import { refreshUser } from 'redux/auth/operations';


const HomePage = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const AppPath = () => {
//   const dispatch = useDispatch();

  return (
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
      <Route path='login' element={<RestrictedRoute redirectTo="/contacts" component={<Login/>}/>}/>
      <Route path='register' element={<RestrictedRoute redirectTo="/contacts" component={<Register/>}/>}/>
      <Route path='contacts' element={<Contacts/>} />
    </Route>
    
      {/* <Route path='*' element={<NotFound/>}/> */}

    </Routes>



    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<HomePage />} />
    //     <Route
    //       path="/register"
    //       element={
    //         <RestrictedRoute redirectTo="/tasks" component={<RegisterPage /} />
    //       }
    //     />
    //     <Route
    //       path="/login"
    //       element={
    //         <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
    //       }
    //     />
    //     <Route
    //       path="/tasks"
    //       element={
    //         <PrivateRoute redirectTo="/login" component={<TasksPage />} />
    //       }
    //     />
    //   </Route>
    // </Routes>
  )
}