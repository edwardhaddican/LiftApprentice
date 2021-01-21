import React from "react";
import { NavBar, Title } from "./index";
import { Switch, Route, Redirect } from "react-router-dom";

const Main = () => {
  return (
    <div className="title_main_container">
      <div>
        <Title />
        <NavBar />
      </div>
      <Switch>
        <Route
          path="/movies/:movieId"
          render={() => {
            return; //component to render;
          }}
        />
        <Route
          path="/movies"
          render={() => {
            return; //component to render;
          }}
        />
        <Redirect to="/movies" />
      </Switch>
    </div>
  );
};

export default Main;
