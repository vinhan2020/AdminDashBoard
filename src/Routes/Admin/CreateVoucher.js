import React from "react";
import axios from "axios";
export default class CreateVoucher extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: ""
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const obj = {
      name: this.state.name
    };
    axios
      .post("http://localhost:4000/vouchers/add", obj)
      .then(res => console.log(res.data));
    this.setState({
      name: ""
    });
  }
  render() {
    return (
      <div className="container">
        <div style={{ marginTop: 100 }}>
          <h3 style={{ textAlign: "center" }}>Thêm voucher mới</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên voucher: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Tạo" className="btn btn-primary" />
            </div>
          </form>
        </div>{" "}
      </div>
    );
  }
}
