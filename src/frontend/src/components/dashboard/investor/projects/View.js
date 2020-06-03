/* eslint-disable no-multi-str */
/* eslint-disable no-console */
/* eslint no-console: "error" */
import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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
          this.setState({ data: data.push(data) });
        }
      })
      .catch((error) => console.log(error));
  }

  render() {
    const data = this.state.data;
    return (
      <Card.Body>
        <div className="sachBody">
        <ul className="sach">
          <li><Button style={{float:"right",borderRadius:"20%"}}  variant="primary" type="submit" > Search</Button></li>
            <li><Form.Group controlId="searchId">
            <Form.Control style={{ width:"250px", float:"right",marginRight:"10px",border:"solid blue" }} type="text" placeholder="Enter project name to search" name="search" />
          </Form.Group></li>
          </ul>
        </div> 
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
