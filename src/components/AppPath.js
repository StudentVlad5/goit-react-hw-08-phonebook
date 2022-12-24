import { lazy, useEffect, Suspense } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';

const HomePage = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const AppPath = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
    navigate(`/${location.pathname}`);
  }, [dispatch, navigate, location.pathname]);

  return isRefreshing ? (
    <b
      style={{
        display: 'block',
        textAlign: 'center',
      }}
    >
      Page is refreshing ...
    </b>
  ) : (
    <Suspense fallback={null}>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
        <Route path='login' element={<RestrictedRoute redirectTo="/contacts" component={<Login/>}/>}/>
        <Route path='register' element={<RestrictedRoute redirectTo="/contacts" component={<Register/>}/>}/>
        <Route path='contacts' element={<PrivateRoute redirectTo="/login" component={<Contacts/>} />}/>
      <Route path='*' element={<RestrictedRoute redirectTo="/home" component={<HomePage/>}/>}/>
      </Route>
      </Routes>
    </Suspense>
  )
}