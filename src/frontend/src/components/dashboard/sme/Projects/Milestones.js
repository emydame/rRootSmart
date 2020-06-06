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

const dateFormat = "YYYY/MM/DD";
class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
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
    const form = document.querySelector(`form[name="create-milestone"]`);
    const formFields = serialize(form, { hash: true }); // Make api call with form
    console.log(formFields);
    axios
      .post("http://localhost:4000/create-milestones", formFields)
      .then((data) => {
        if ((data.status = "success")) {
          this.setState({ success: "Milestones Created!" });
        } else {
          this.setState({ error: "Error creating  Milestones" });
        }
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { success, error } = this.state;
    return (
      <Card.Body>
        {success ? (
          <Form.Text className="text-bold text-success">{success}</Form.Text>
        ) : (
          <Form.Text className="text-bold text-danger">{error}</Form.Text>
        )}
        <div className="content-text"><h5>Create Project Milestones</h5></div>
        <Row>
                <Col md="12">
          <form name="create-user" id="createMilestones">
          <Form.Group controlId="projectId">
                <Form.Label>Project:</Form.Label>
                <Form.Control as="select" ref={this.project}></Form.Control>
              </Form.Group>
              <Form.Group controlId="milestoneName">
                <Form.Label>Milestone Name:</Form.Label>
                <Form.Control type="text" placeholder="Milestone Name" name="milestoneName" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Editor
                  apiKey="oym93hgea69gv4o5cjoxfc1baobo49f82d4ah9j66v3n955r"
                  initialValue={this.state.description}
                  init={{
                    height: 200,
                    menubar: false,
                    plugins: [
                      `advlist autolink lists link image`,
                      `charmap print preview anchor help`,
                      `searchreplace visualblocks code`,
                      `insertdatetime media table paste wordcount`
                    ],
                    toolbar:
                      `undo redo | formatselect | bold italic | \
                    alignleft aligncenter alignright | \
                    bullist numlist outdent indent | help`
                  }}
                  onChange={this.handleEditorChange}
                  name="milestoneDescription"
                />
              </Form.Group>
              <Form.Group controlId="dateStarted">
                <Form.Label>Start Date:</Form.Label>
                <Form.Control type="date" placeholder="Date started" name="dateStarted" />
              </Form.Group>
              <Form.Group controlId="endDate">
                <Form.Label> End Date:</Form.Label>
                <Form.Control type="date" placeholder="Date started" name="endDate" />
              </Form.Group>               
                               
                  <Button variant="primary" type="submit" onClick={this.handleClick}>
                  Add Milestone
              </Button>
            </form>
          </Col>
        </Row>
      </Card.Body>
    );
  }
}
export default Create;
