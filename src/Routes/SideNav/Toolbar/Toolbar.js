import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerButton";

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="/">Logo</a>
      </div>

      <div className="spacer"></div>
      <div className="toolbar__navigation-items">
        <ul>
          <li>
            <Link to="/Admin/B">Product</Link>
          </li>
          <li>
            <Link to="/Admin/A">Users</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
