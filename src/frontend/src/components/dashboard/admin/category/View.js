/* eslint-disable no-multi-str */
/* eslint-disable no-console */
/* eslint no-console: "error" */
import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.fetchData = this.fetchData.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    await axios
      .get("http://localhost:4000/projects/category/")
      .then(({ data }) => {
        const { status, result } = data;
        if (status === "success") {
          this.setState({ data: data.push(result) });
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
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Card.Body>
    );
  }
}
export default View;
