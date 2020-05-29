import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class Remove extends React.Component {
  render() {
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
                <Form.Control type="text" placeholder="Enter user name" name="fullName" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Deactivate User
              </Button>
            </Form>
          </Col>
        </Row>
      </Card.Body>
    );
  }
}
export default Remove;
