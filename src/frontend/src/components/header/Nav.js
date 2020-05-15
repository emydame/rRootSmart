import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
// import { ReactRouter as Router } from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <ul className="nav nav-pills nav-justified">
        <Router>
          <li className="navLink active ">
            <Link to="/register">Register</Link>
          </li>
          <li className="navLink">
            <Link to="/login">Login</Link>
          </li>
          <li className="navLink">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="navLink">
            <Link to="/about">About Us</Link>
          </li>
        </Router>
      </ul>
    );
  }
}

export default Nav;
