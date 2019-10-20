import React from "react";
import { useHistory } from "react-router-dom";

export default function Signin() {
  const history = useHistory();
  function RouteToAnother() {
    history.push("/Admin");
  }
  return (
    <form>
      <legend>Form title</legend>
      <div className="form-group">
        <label>label</label>
        <input
          type="text"
          className="form-control"
          id="cc"
          placeholder="Input field"
        />
      </div>
      <button onClick={() => RouteToAnother()} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
