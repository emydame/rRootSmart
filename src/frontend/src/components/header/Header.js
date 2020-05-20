import React from "react";
import Nav from "./Nav";
import app from "../../App";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
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
      <header className="header container-fluid">
        <div className="row row-no-gutter">
          <div className="col-md-6" id="img"><Link to="/home"><img src={"./logo.png"} /></Link></div>
          {/* <h2 data-app-name></h2> */}
        </div>
        <div className="row ">
          <div className="col-md-8"></div>
          <div className="col-md-4 links">
            <Nav />
          </div>
          {/** nav bar**/}
          <div className="col-md-2"></div>
        </div>
      </header>
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
