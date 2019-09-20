import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "../components/pages/Home";
import AddItem from "../components/pages/AddItem";
import Login from "../components/pages/Login";
import PrivateRoute from "./PrivateRoute";

export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <Route exact path="/" component={Home} />
      <PrivateRoute path="/add" component={AddItem} />
      <Route path="/login" component={Login} />
    </Router>
  );
};

export default AppRouter;
