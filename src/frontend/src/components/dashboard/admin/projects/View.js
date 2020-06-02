/* eslint-disable no-multi-str */
/* eslint-disable no-console */
/* eslint no-console: "error" */
import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";

class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    await axios
      .get("https://eazsme-backend.herokuapp.com/projects/all")
      .then((data) => {
        if (data.status === "success") {
          this.setState({ data });
        }
      })
      .catch((error) => console.log(error));
  }

  render() {
    const data = this.state.data;
    return (
      <Card.Body>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Project Id</th>
              <th>Category Id</th>
              <th>Project Name</th>
              <th>Project Description</th>
              <th>Created By</th>
              <th>Date Started</th>
              <th>Date Ended</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index, arr) => {
              let count = arr.length;
              return (
                <tr>
                  <td key={index}>{item.projectId}</td>
                  <td key={index}>{item.projectCatId}</td>
                  <td key={index}>{item.projectName}</td>
                  <td key={index}>{item.description}</td>
                  <td key={index}>{item.createdBy}</td>
                  <td key={index}>{item.dateStart}</td>
                  <td key={index}>{item.dateEnd}</td>
                  <td key={count++}>
                    <Link to={`/view-project/${item.projectId}`}>View Details</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    );
  }
}
export default View;
