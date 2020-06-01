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
      .get("https://eazsme-backend.herokuapp.com/projects/category/")
      .then((data) => {
        if (data.status === "success") {
          this.setState({ data: data.push(data) });
        }
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { data } = this.state;
    return (
      <Card.Body>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Category Id</th>
              <th>Category Name</th>
              <th>Category Description</th>
              <th>Created By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index, arr) => {
              let count = arr.length;
              return (
                <tr>
                  <td key={index}>{item.categoryId}</td>
                  <td key={index}>{item.categoryName}</td>
                  <td key={index}>{item.categoryDescription}</td>
                  <td key={index}>{item.createdBy}</td>
                  <td key={count++}>
                    <Link to={`/delete/${item.categoryId}`}>Delete</Link>|
                    <Link to={`/update/${item.categoryId}`}>Update</Link>
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
