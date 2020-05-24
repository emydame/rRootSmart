import React from "react";
import "antd/dist/antd.css";
import "./Dashboard.css";
import { Router, Route } from "react-router";
import SmeDashboard from "./sme/SmeDashboard";
import RegulatorDashboard from "./regulator/RegulatorDashboard";
import AdminDashboard from "./admin/AdminDashboard";
import InvestorDashboard from "./investor/InvestorDashboard";
import { withRouter } from "react-router-dom";

class Dashboards extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <Router history={history}>
        <Route component={SmeDashboard} path="/sme" />
        <Route component={RegulatorDashboard} path="/regulator" />
        <Route component={AdminDashboard} path="/admin" />
        <Route component={InvestorDashboard} path="/investor" />
      </Router>
    );
  }
}

export default withRouter(Dashboards);
