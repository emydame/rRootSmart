import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";


class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <ul className="foo-nav">
          <li>T&C</li>
          <li>Regulations</li>
          <li>Projects</li>
          <li className="social">Facebook</li>
          <li className="social">Twitter</li>
          <li className="social">LinkedIn</li>
        </ul>
      </footer>
    );
  }
}

export default Footer;

