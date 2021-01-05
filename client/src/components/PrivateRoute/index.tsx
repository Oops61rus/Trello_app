import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { RootState } from 'types';

interface IPrivateRoute {
  component: React.ComponentType<RouteProps>;
  path: string;
}

const PrivateRoute = ({ component: Component, ...rest}: IPrivateRoute) => {
  const isAuthenticated: any = useSelector<RootState>(
    (state: RootState) => state.authReducer.isAuthenticated
  )
  return (
    <Route {...rest} render={
      props => 
        isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
      } 
    />
  )
}

export default PrivateRoute;
