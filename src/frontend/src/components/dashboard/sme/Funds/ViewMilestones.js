/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-str */
/* eslint-disable no-console */
/* eslint no-console: "error" */
import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DatePicker } from "antd";
import moment from "moment";
import Image from "react-bootstrap/Image";
import { Editor } from "@tinymce/tinymce-react";
import serialize from "form-serialize";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

class ViewMilestones extends React.Component {
    constructor(props) {
      super(props);
     
  
      this.state = {
        description: "",
        data: [],
        success: "",
        error: ""
      };
      this.handleEditorChange = this.handleEditorChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleEditorChange(e) {
      this.setState({ description: e.target.getContent() });
    }
  
    handleClick(e) {
      e.preventDefault();
     
      axios
        .post("http://localhost:4000/create-user")
        .then((data) => {
          if ((data.status === "success")) {
          
            this.setState({ data: data });
          } else {
            this.setState({ error: "Error Loading project field" });
          }
        })
        .catch((error) => console.log(error));
    }

render() {
    const data = this.state.data;
    const { success, error } = this.state;
    return ( 
           
      <Card.Body>
        {success ? (
          <Form.Text className="text-bold text-success">{success}</Form.Text>
        ) : (
          <Form.Text className="text-bold text-danger">{error}</Form.Text>
        )}
        <div className="content-text"><h5>Project Milestones</h5></div>
        <Row>
          
          <Col md="12">
          <form name="create-eligibility" id="createEligibility">
                  <div class="form-row" controlId="ProjectId">
                    <div class="form-group col-md-12">
                    <label for="inputTeam">Select Project</label>
                      <select id="inputState" class="form-control" name="userTeam">
                        <option selected>Choose...</option>
                        <option>Fertilizer Distribution</option>
                        <option>Maize Farming</option>
                        <option>Project 1</option>
                        <option>Project 2</option>
                        
                      </select>
                    </div>
          </div>
          
                 <br></br>
                 <Table striped bordered hover size="sm">
          <thead>
            <tr>
              
              <th>Milestone Name</th>
              <th>Description</th>
              <th>State Date</th>
              <th>End Date</th>
              <th>Progress</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index, arr) => {
              return (
                <tr key={index}>
                  
                  <td>{item.milestoneName}</td>
                  <td>{item.description}</td>
                  <td>{item.startdate}</td>
                  <td>{item.enddate}</td>
                  <td>{item.Progress}</td>
                  <td>{item.Status}</td>
                  <td>
                    <Link to={`/view-project/${item.projectId}`}>Update</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
            </form>
          </Col>
        </Row>
      </Card.Body>
    );
  }
}
export default ViewMilestones;