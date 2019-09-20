import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthorized } from "../utils/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthorized() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
