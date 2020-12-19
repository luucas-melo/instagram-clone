import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./pages/Feed";

export default function Routes() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Feed} />
        </Switch>
      </BrowserRouter>
  );
}
