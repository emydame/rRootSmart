import React from "react";
import Nav from "./Nav";
import app from "../../App";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
        <div className="row no-gutters">
          <div className="col-md-1"></div>
          {/*** Logo **/}

          <div className="col-md-4 app-name">
            <h2 data-app-name></h2>
          </div>
          {/*** app name**/}

          <div className="col-md-5 nav">
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
