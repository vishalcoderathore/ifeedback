import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './HeaderLoggedIn';
import HeaderFullScreeen from './HeaderFullScreeen';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderHeader() {
    if (this.props.auth) {
      return <Header />;
    }
    return <HeaderFullScreeen />;
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          {this.renderHeader()}

          <Route path='/' component={Landing} exact />
          <Route path='/dashboard' component={Dashboard} exact />
          <Route path='/surveys/new' component={SurveyNew} exact={true} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(
  mapStateToProps,
  actions
)(App);
