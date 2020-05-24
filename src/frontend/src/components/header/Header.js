/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import Nav from "./Nav";
import app from "../../App";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { adminAction } from "../../redux/actionCreators";

class Header extends React.Component {
  async progName() {
    const header = document.querySelector("[data-app-name]");
    if (!header) {
      return;
    }
    const programName = await app();
    header.textContent = programName;
  }

  componentDidMount() {
    this.progName();
    const status = this.props.admin.login;
    status === true ? this.setState({ status: "true" }) : this.setState({ status: "false" });
  }

  render() {
    return (
      <div>
        <header>
          <nav class="navbar navbar-expand-md navbar-dark fixed-top navbar1">
            <a class="navbar-brand" href="#"><img src={"./logo.png"} alt="logo" /></a>
            <button class="navbar-toggler mobile-nav" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#"><span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
                </li>
              </ul>
              <div class="mt-2 mt-md-0 navi-links">
                <Nav />
              </div>
            </div>
          </nav>
        </header>
      </div>
      // <Container className="header" fluid>
      //   <div className="nav-links">
      //   <Row className="menu">
      //     {/** logo */}
      //     <Col md="auto" id="img" className="mr-4 ml-3">
      //       <Link to="/home">
      //         <img src={"./logo.png"} alt="logo" />
      //       </Link>
      //     </Col>

      //     {/* * App name
      //     <Col md="auto" className=" pt-3 app-name">
      //       <h2 data-app-name></h2>
      //     </Col> */}

      //     {/*** Navigation */}
      //     <Col md="8" className="nav  pt-5 h4" id="navigation">
      //       <Nav />
      //     </Col>

      //     {/** user setting */}
      //     {/* <Col md="1"></Col> */}
      //   </Row>
      //   </div>
      // </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    admin: state.admin
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      logout: (eve) => adminAction(eve)
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
