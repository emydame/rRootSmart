import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Proposal extends React.Component {
  render() {
    return (
      <Card.Body>
        <Form>
          <Form.Group controlId="project">
            <Form.Label>Project ID</Form.Label>
            <Form.Control type="text" placeholder="Enter project id" name="projectid" />
          </Form.Group>

          <Form.Group controlId="sme">
            <Form.Label>SME ID</Form.Label>
            <Form.Control type="text" placeholder="SME ID" name="smeid" />
          </Form.Group>
          <Form.Group controlId="proposal">
            <Form.File id="custom-file" label="Custom file input" custom name="proposal" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    );
  }
}

export default Proposal;
