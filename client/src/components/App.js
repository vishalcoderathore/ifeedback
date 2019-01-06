import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route component={Header} />
          <React.Fragment className="container">
            <Route path="/" component={Landing} exact />
            <Route path="/surveys" component={Dashboard} />
            <Route path="/dashboard" component={SurveyNew} exact={true} />
          </React.Fragment>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
