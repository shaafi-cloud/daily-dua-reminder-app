import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return currentUser ? <Component {...rest} /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
