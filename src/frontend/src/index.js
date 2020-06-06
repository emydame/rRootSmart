import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import history from "./history";
import { Switch, Route, Router } from "react-router-dom";
import store from "./redux/configurations/store";
import Dashboards from "./components/dashboard/Dashboard";

/*const history = createHistory();*/
const stores = store();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stores}>
      <Router history={history}>
        <Switch>
          <Route component={App} exact path="/" />
          <Route component={Dashboards}/>
        </Switch>
      </Router>{" "}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
