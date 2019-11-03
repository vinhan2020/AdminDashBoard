import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPage from "./Routes/Admin/ErrorPage/ErrorPage"
import Signin from "./Routes/Singin/Signin";
import Admin from "./Routes/Admin/Admin";
import HomePage from "./Routes/User/HomePage"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Admin">
          <Admin />
        </Route>
        <Route exact path="/">
          <Signin />
        </Route>
        <Route path="/homepage"><HomePage /></Route>
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}
export default App;
