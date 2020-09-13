import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import MainLayout from "./components/MainLayout";

const Routes = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/detail/:imdbId">
          <MovieDetail />
        </Route>
        <Redirect to="/" />
      </Switch>
    </MainLayout>
  );
};

export default Routes;
