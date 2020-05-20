import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Footer extends React.Component {
  render() {
    return (
      <Container className="footer" fluid>
        {/*  ------- ----   -Sponsors Display section************ */}
        <Row className="sponsors">
          <Col>
            <img
              src="https://res.cloudinary.com/lordefid/image/upload/c_scale,h_30/v1589732622/Group_157_rzbgqx.png"
              alt="facebook-logo"
            />
            <img
              src="https://res.cloudinary.com/lordefid/image/upload/c_scale,h_30/v1589732608/Andella_gmanxz.png"
              alt="andela-logo"
            />
            <img
              src="https://res.cloudinary.com/lordefid/image/upload/c_scale,h_30/v1589732623/FirstBank_Logo_coyuui.jpg"
              alt="firstbank-logo"
            />
            <img
              src="https://res.cloudinary.com/lordefid/image/upload/c_scale,h_30/v1589732624/paypal-logo-vector-download-400x400_yy1m3o.jpg"
              alt="paypal-logo"
            />
          </Col>
        </Row>
        <Row>
          <ul className="foo-nav">
            <li>T&C</li>
            <li>Regulations</li>
            <li>Projects</li>
            <li className="social">Facebook</li>
            <li className="social">Twitter</li>
            <li className="social">LinkedIn</li>
          </ul>
        </Row>
      </Container>
    );
  }
}

export default Footer;
