import React from 'react';
import { Route  } from 'react-router-dom';
// Redirect
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem('token')) {
          return <Component />;
        } else {
          return <Component />;
          // return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;





