import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './HeaderLoggedIn';
import HeaderFullScreeen from './HeaderFullScreeen';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

import Surveys from './surveys/Surveys';
import ActionButton from './ActionButton';
import Footer from './Footer';
import Credits from './Credits';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser().then(() => {
      if (this.props.auth) {
        this.props.fetchSurveys();
      }
    });
  }

  renderHeader() {
    if (this.props.auth) {
      return <Header />;
    } else if (this.props.auth === false) {
      return <HeaderFullScreeen />;
    }
    return;
  }

  renderFooter() {
    if (this.props.auth === false) {
      return <Footer />;
    }
    return;
  }

  renderActionButton() {
    if (this.props.auth === true) return <ActionButton />;
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          {this.renderHeader()}
          <main>
            <Route path='/' component={Landing} exact />
            <Route path='/dashboard' component={Dashboard} exact />
            <Route path='/surveys' component={Surveys} exact />
            <Route path='/credits' component={Credits} exact />
            <Route path='/surveys/new' component={SurveyNew} exact={true} />
            {this.renderActionButton()}
          </main>
          {this.renderFooter()}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ auth, surveys }) {
  return {
    auth,
    surveys
  };
}

export default connect(
  mapStateToProps,
  actions
)(App);
