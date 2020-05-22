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
      <Container className="header" fluid>
        <div className="nav-links">
        <Row className="menu">
          {/** logo */}
          <Col md="auto" id="img" className="mr-4 ml-3">
            <Link to="/home">
              <img src={"./logo.png"} alt="logo" />
            </Link>
          </Col>

          {/** App name */}
          {/** <Col md="auto" className=" pt-3 app-name">
            <h2 data-app-name></h2>
          </Col>
    */}
          {/*** Navigation */}
          <Col md="8" className="nav  pt-5 h4" id="navigation">
            <Nav />
          </Col>

          {/** user setting */}
          {/* <Col md="1"></Col> */}
        </Row>
        </div>
      </Container>
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
