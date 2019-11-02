import React from "react";
import axios from "axios";
export default class CreateVoucher extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDateend = this.onChangeDateend.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      datestart:Date,
      dateend: Date,
      value : Number
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDateend(e) {
    this.setState({ dateend: e.target.value });
    //console.log(e)
  }

  onSubmit(e) {
    e.preventDefault();

    const obj = {
      name: this.state.name,
      datestart : Date,
      dateend: this.state.dateend,
      value : this.state.value
    };
    axios
      .post("http://localhost:4000/vouchers/add", obj)
      .then(res => console.log(res.data));
    this.setState({
      name: "",
      dateend : new Date(),
      value :0
    });
    alert('tạo thành công')
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
              <label>Ngày kết thúc </label>
              <input
                type="date"
                className="form-control"
                value={this.state.dateend}
                onChange={this.onChangeDateend}
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Tạo" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
