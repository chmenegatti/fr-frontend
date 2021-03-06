import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRoutesProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRoutesProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Routes: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Routes;
