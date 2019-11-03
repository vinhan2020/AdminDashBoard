import React from "react";
import { useHistory, Link } from "react-router-dom";


export default function Signin() {
  const history = useHistory();
  function RouteToAnother() {
    history.push("/Admin");
  }
  return (
    <div className="limiter">
        <div className="container-login100" style={{backgroundImage: 'url("assets/images/bg-01.jpg")'}}>
          <div className="wrap-login100 p-t-30 p-b-50">
            <span className="login100-form-title p-b-41">
              Account Login
            </span>
            <form className="login100-form validate-form p-b-33 p-t-5">
              <div className="wrap-input100 validate-input" data-validate="Enter username">
                <input className="input100" type="text" name="username" placeholder="User name" />
                <span className="focus-input100" data-placeholder="" />
              </div>
              <div className="wrap-input100 validate-input" data-validate="Enter password">
                <input className="input100" type="password" name="pass" placeholder="Password" />
                <span className="focus-input100" data-placeholder="" />
              </div>
              <div className="container-login100-form-btn m-t-32">
              <Link to="/Admin">  <button className="login100-form-btn" onClick={()=>RouteToAnother()}>
                  Login
                </button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    // <form>
    //   <legend>Form title</legend>
    //   <div className="form-group">
    //     <label>label</label>
    //     <input
    //       type="text"
    //       className="form-control"
    //       id="cc"
    //       placeholder="Input field"
    //     />
    //   </div>
    //   <button onClick={() => RouteToAnother()} className="btn btn-primary">
    //     Submit
    //   </button>
    // </form>
  );
}
