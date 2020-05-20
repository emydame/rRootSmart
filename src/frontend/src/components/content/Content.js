import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Content extends React.Component {
  render() {
    return (
      <Container className="mainContent" fluid>
        {/*  ------- ----   Testimonial display Section  ----------*/}
        <Row></Row>

        {/**Achievement */}
        <Row className="text-right accm">
          <h3>Our Accomplishments</h3>
        </Row>

        <Row className="content">
          <Col className="">
            view lists of approved Projects for funding
            <br></br>
            <br></br>
            see eligibility criteria to{" "}
            <Router>
              <Link id="link" to="#">
                apply
              </Link>
            </Router>
          </Col>
          <Col className="displayCon">
            $140,000 funds available for SMEs from The World bank
            <br></br>
            <br></br>
            see eligibility criteria to{" "}
            <Router>
              <Link id="md-link" to="#">
                apply
              </Link>
            </Router>
          </Col>
          <Col className="">
            <p>
              The Federal Government of Nigeria Through the Central Bank has funded twenty three (23) SMEs for the last
              four months from this platform.
            </p>
            <Router>
              <Link id="link" to="#">
                View list
              </Link>
            </Router>
            of benefiting SMEs here
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content;
