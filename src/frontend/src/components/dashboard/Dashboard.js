import React from "react";
import "antd/dist/antd.css";
import "./Dashboard.css";
import SmeDashboard from "./sme/SmeDashboard";
import RegulatorDashboard from "./regulator/RegulatorDashboard";
import AdminDashboard from "./admin/AdminDashboard";
import InvestorDashboard from "./investor/InvestorDashboard";
import { withRouter, BrowserRouter as Router, Route } from "react-router-dom";

class Dashboards extends React.Component {
  render() {
    return (
      <Router>
        <Route component={SmeDashboard} path="/sme" />
        <Route component={RegulatorDashboard} path="/regulator" />
        <Route component={AdminDashboard} path="/admin" />
        <Route component={InvestorDashboard} path="/investor" />
      </Router>
    );
  }
}

export default withRouter(Dashboards);
