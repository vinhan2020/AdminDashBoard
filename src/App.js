import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signin from "./Routes/Singin/Signin";
import Admin from "./Routes/Admin/Admin";
import CreateVoucher from "./Routes/Admin/Voucher/CreateVoucher";

import ManageRankPoin from "./Routes/Admin/ManageRankPoin";
import Managesale from "./Routes/Admin/Managesale";
import CreateSale from "./Routes/Admin/CreateSale";
import RankRule from "./Routes/Admin/RankRule";

import PoinRule from "./Routes/Admin/PoinRule";

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
        <Route path="/Admin/createvoucher">
          <CreateVoucher />
        </Route>

        <Route path="/Admin/managerankpoin">
          <ManageRankPoin />
        </Route>

        <Route path="/Admin/managesale">
          <Managesale />
        </Route>

        <Route path="/Admin/createsale">
          <CreateSale />
        </Route>

        <Route path="/Admin/rankrule">
          <RankRule />
        </Route>

        <Route path="/Admin/poinrule">
          <PoinRule />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
