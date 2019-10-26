import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import "./Admin.css";
import Toolbar from "../SideNav/Toolbar/Toolbar";

export default class Sidenav extends React.Component {
  state = {
    sideDrawer: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevStates => {
      return { sideDrawer: !prevStates.sideDrawer };
    });
  };

  backDropClick = () => {
    this.setState({ sideDrawer: false });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawer) {
      backdrop = <BackDrop click={this.backDropClick} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawer} />
        {backdrop}

        <main style={{ marginTop: "56px" }}>
          <Switch>
            <Route path="/Admin/A">
              <div className="pok">ahjkdhsajkdsahjdsahkj</div>
            </Route>

            <Route path="/Admin/B">
              <div>bufisdoufdsoifudsoifusdao</div>
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

const BackDrop = props => (
  <div className="backdrop" onClick={props.click}></div>
);

const SideDrawer = props => {
  let DrawerClass = "side-drawer";
  if (props.show) {
    DrawerClass = "side-drawer open";
  }
  return (
    <nav className={DrawerClass}>
      <ul>
        <li>
          <a href="/">Product</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  );
};
