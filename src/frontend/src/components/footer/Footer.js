import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Footer extends React.Component {
  render() {
    return (

          <footer class="footer">
            <div class="container foot-text">
            <p class="float-right top"><a href="#">Back to top</a></p>
              <p class="float-right social"><a href="#">Facebook</a></p>
              <p class="float-right social"><a href="#">Twitter</a></p>
              <p class="float-right social"><a href="#">LinkedIn </a></p>
              
              <p>&copy; 2020 eaZSME,  &middot;  <a href="#">Privacy</a>  &middot;  <a href="#">Terms</a></p>
              </div>
          </footer>
  
    );
  }
}

export default Footer;
