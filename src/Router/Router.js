import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Formulario from "../components/formulario/Confimado";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/App" component={App} />
      <Route exact path="/Formulario" component={Formulario} />
      <Route component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
