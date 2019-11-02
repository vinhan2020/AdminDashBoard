import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

export class Managesale extends Component {
  state = { vouchers: [] };

  componentDidMount() {
    axios
      .get("http://localhost:4000/vouchers/")
      .then(response => {
        console.log(response.data);
        this.setState({ vouchers: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  delete(id) {
    axios
      .get("http://localhost:4000/vouchers/delete/" + id)
      .then(console.log("Deleted"))
      .catch(err => console.log(err));

    this.componentDidMount();
  }

  tabRow() {
    return this.state.vouchers.map((object, i) => {
      return (
        <tr key={i}>
          <td>{object.name}</td>
          <td>{object.datestart}</td>
          <td>{object.dateend}</td>
          <td>{object.dateend}</td>
          <td>
            <Link to={"/Admin/Voucher/Edit/"+object._id}> Edit</Link>
          </td>
          <td>
            <button
              onClick={() => {
                this.delete(object._id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h3 align="center">Vouchers List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>DateStart</th>
              <th>DateEnd</th>
              <th>Giá trị</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}

export default Managesale;
