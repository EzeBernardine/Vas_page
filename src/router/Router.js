import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "../pages/landing";
import Story from "../pages/Story";
import Success from "../pages/Success";

const NotFound = () => <h1>Oops not found..</h1>;

const Router = () => (
  <BrowserRouter>
    <div className="AppRoute">
      <Switch>
        <Route path="/" component={Landing} exact={true} />
        <Route path="/story" component={Story} />
        <Route path="/success" component={Success} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default Router;
