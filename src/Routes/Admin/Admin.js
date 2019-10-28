import React from "react";
import { Switch, Route } from "react-router-dom";

import "./Admin.css";
import Toolbar from "../SideNav/Toolbar/Toolbar";
import CreateVoucher from "./CreateVoucher";
import ManageRankPoin from "./ManageRankPoin";
import Managesale from "./Managesale";
import CreateSale from "./CreateSale";
import RankRule from "./RankRule";
import PoinRule from "./PoinRule";

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
            <Route path="/Admin/managerankpoin">
              <ManageRankPoin />
            </Route>

            <Route path="/Admin/createvoucher">
              <CreateVoucher />
            </Route>

            <Route path="/Admin/Managesale">
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
        <div>
          <img
            alt=""
            height="40px"
            width="200px"
            style={{ marginBottom: "45px", marginTop: "40px" }}
            src="https://assets.grab.com/wp-content/uploads/sites/10/2018/10/09151516/GrabRewards.png"
          />
        </div>
        <li>
          <a href="/Admin/managerankpoin">Quản lý hạng điểm (Passenger)</a>
        </li>
        <li>
          <a href="/Admin/managesale">Quản lý ưu đãi</a>
        </li>
        <li>
          <a href="/Admin/poinrule">Quy tắc điểm thưởng tài xế</a>
        </li>
        <li>
          <a href="/Admin/rankrule">Quy tắc phân hạng</a>
        </li>
        <li>
          <a href="/Admin/createvoucher">Tạo voucher, quà tặng</a>
        </li>
        <li>
          <a href="/Admin/createsale">Tạo ưu đãi</a>
        </li>
      </ul>
    </nav>
  );
};
