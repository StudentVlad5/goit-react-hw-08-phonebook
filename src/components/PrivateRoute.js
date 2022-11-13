import { useSelector } from "react-redux";
import {selectIsLoggedIn, selectIsRefreshing} from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  const shouldRedirect = !isLogin && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};