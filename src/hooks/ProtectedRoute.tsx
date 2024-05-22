import { Route, Navigate, RouteProps } from 'react-router-dom';
import { ReactElement } from 'react';

type ProtectedRouteProps = RouteProps & {
  element: ReactElement;
};

const ProtectedRoute = ({ element: Element, ...rest }: ProtectedRouteProps) => {
  const userId = localStorage.getItem('userId');

  if (!userId && rest.path !== '/sign-in' && rest.path !== '/sign-up') {
    return <Navigate to="/sign-in" />;
  }

  if (userId && (rest.path === '/sign-in' || rest.path === '/sign-up')) {
    return <Navigate to="/" />;
  }

  return <Route {...rest} element={Element} />;
};

export default ProtectedRoute;