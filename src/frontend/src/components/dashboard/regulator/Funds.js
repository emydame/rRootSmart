/* eslint-disable no-console */
/* eslint no-console: "error" */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Table, Tag, Space } from "antd";

export default class Funds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      funds: [],
      error: ""
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    await axios
      .get("https://eazsme-backend.herokuapp.com/funds/all")
      .then(({ data }) => {
        const status = data.status;
        const result = data.data;
        if (status === "success") {
          this.setState({ funds: result });
        } else {
          this.setState({ error: "Error fetching data" });
        }
      })
      .catch((error) => console.log(error));
  }
  render() {
    const data = this.state.funds;
    const error = this.state.error;
    let count = 0;
    return (
      <Card.Body>
        <div className="invest-fund">
          <h5 style={{ textAlign: "center" }}>All Funds Application</h5>
        </div>
        <div className="update" style={{ textAlign: "center" }}>
          <h5> *** Funds Application View *** </h5>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Fund ID</th>
              <th>Organization ID</th>
              <th>Project ID</th>
              <th>Fund Category ID</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Fund</th>
              <th>Date Initiated</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr >
                  <td key={count}>{item.fundId}</td>
                  <td key={count++}>{item.organizationId}</td>
                  <td key={count++}>{item.projectId}</td>
                  <td key={count++}>{item.fundCatId}</td>
                  <td key={count++}>{item.amount}</td>
                  <td key={count++}>{item.status}</td>
                  <td key={count++}>{item.fund}</td>
                  <td key={count++}>{item.status}</td>
                  <td key={count++}>{item.dateInitiated}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card.Body>
    );
  }
}
