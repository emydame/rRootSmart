import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Footer extends React.Component {
  render() {
    return (

          <footer class="footer">
            <div class="container foot-text">
            <div class="float-right">
            <a href="https://www.facebook.com/signup" target="_blank" className="footer-img"><img
                      src="https://res.cloudinary.com/lordefid/image/upload/v1590108539/facebook_dvbkhd.png"
                      /></a>
            <a href="https://twitter.com/i/flow/signup" target="_blank" className="footer-img"><img
                      src="https://res.cloudinary.com/lordefid/image/upload/v1590108539/twitter_e6e59l.png"
                      /></a>
            <a href="https://www.linkedin.com/signup" target="_blank" className="footer-img"><img
                      src="https://res.cloudinary.com/lordefid/image/upload/v1590108539/linkedin_b2x3ts.png"
                      /></a>
            </div>
              <p>&copy; 2020 eaZSME,  &middot;  <a href="#">Privacy</a>  &middot;  <a href="#">Terms</a></p>
              </div>
          </footer>
  
    );
  }
}

export default Footer;
