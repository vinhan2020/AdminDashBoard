import React from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";

class EditVoucher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voucher: [],
      name: String,
      datestart: Date,
      dateend: Date,
      value: Number
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/vouchers/edit/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
          datestart: response.data.datestart,
          dateend: response.data.dateend,
          value: response.data.value
        });
        console.log(this.state);
      });
  }


  onChangeDateend(e){
    this.setState({ dateend: e.target.value });
    console.log(e)
  }
  render() {
    return (
      <div className="container">
        <div style={{ marginTop: 100 }}>
          <h3 style={{ textAlign: "center" }}>Sửa voucher</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên voucher: </label>
              <input
                type="text"
                className="form-control"
                defaultValue={this.state.name}
                onChange={this.onChangeName}
              />
            </div>

            <div className="form-group">
              <label>Ngày kết thúc </label>
              <input
                type="date"
                className="form-control"
                defaultValue={this.state.dateend}
                onChange={this.onChangeDateend  }
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

export default EditVoucher;

// function  EditVoucher(props) {
//   var voucher =[]
//   let { id } = useParams();

//   //console.log(axios.get("http://localhost:4000/vouchers/edit/" + id));
//   axios.get("http://localhost:4000/vouchers/edit/" + id).then(response=>{
//     voucher = response.data

//     //console.log(voucher)
//     return <div>{voucher}</div>
//   })
//   console.log(voucher)
//   return <div >  </div>;
// }
