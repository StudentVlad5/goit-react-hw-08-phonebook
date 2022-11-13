import { useSelector } from "react-redux";
import {selectIsLoggedIn} from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
 const isLogin = useSelector(selectIsLoggedIn);
  return isLogin ? <Navigate to={redirectTo} /> : Component;
};