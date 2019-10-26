import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signin from "./Routes/Singin/Signin";
import Admin from "./Routes/Admin/Admin";

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/Admin">
          <Admin />
        </Route>

        <Route path="/">
          <Signin />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
