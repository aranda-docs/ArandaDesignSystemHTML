import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import NotFoundPage from "../pages/NotFoundPage";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Layout />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
