import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import axios from "axios";

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      description: "",
      userID: "",
      data: {}
    };

    this.update = this.update.bind(this);
    this.getUserID = this.getUserID.bind(this);
    this.varifyPassword = this.varifyPassword.bind(this);
  }

  componentDidMount() {
    // this.update();
  }

  update() {
    // make a request to the backend and update here
    const { userID } = this.state;
    axios
      .get("https://eazsme-backend.herokuapp.com//user/" + userID)
      .then((data) => this.setState({ data }))
      .catch((error) => console.log(error));
  }

  getUserID(event) {
    event.preventDefault();
    this.setState({ userID: event.target.value });
    this.update();
  }

  varifyPassword(event) {
    event.preventDefault();
    const value = event.target.value;
    // axios.get("http://localhost:4000")  make a request for a password and use it to verify password
  }

  submitUpdate() {}

  render() {
    const { data } = this.state.data;
    const { fullName, description } = data;
    return (
      <Card.Body>
        <Row>
          <Col>
            <Image src="holder.js/100px250" fluid />
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Full name"
                  name="fullName"
                  defaultValue={fullName}
                  onChange={this.getUserID}
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows="3" name="description" defaultValue={description} />
              </Form.Group>

              <Form.Text>Change password</Form.Text>
              <Form.Group controlId="password">
                <Form.Label>Old Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="oldPassword" onBlur={this.varifyPassword} />
              </Form.Group>

              <Form.Text>Change password</Form.Text>
              <Form.Group controlId="newPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" placeholder="New Password" name="newPassword" />
              </Form.Group>

              <Form.Text>Change password</Form.Text>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Update User
              </Button>
            </Form>
          </Col>
        </Row>
      </Card.Body>
    );
  }
}
export default Update;
