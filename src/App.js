import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/screens/home/Home";
import LiveScore from "./components/screens/liveScore/LiveScore";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/live-score" exact>
        <LiveScore />
      </Route>
    </Switch>
  );
}

export default App;
