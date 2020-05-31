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
    const form = document.querySelector(`form[name="create-user"]`);
    const formFields = serialize(form, { hash: true }); // Make api call with form
    console.log(formFields);
    axios
      .post("http://localhost:4000/create-user", formFields)
      .then((data) => {
        if ((data.status = "success")) {
          this.setState({ success: "User Successfully created!" });
        } else {
          this.setState({ error: "Error creating User" });
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
        <div className="content-text"><h5>User Details</h5></div>
        <Row>
          <Col md="3" className="img-holder">
          <div class="text-center">
            <img src="https://res.cloudinary.com/lordefid/image/upload/c_scale,h_200/v1567112037/220190826_163351912_r9yfcl.jpg" class="rounded" alt="..." fluid />
          </div>
          </Col>
          <Col md="9">
          
          </Col>
        </Row>
      </Card.Body>
    );
  }
}
export default Create;
