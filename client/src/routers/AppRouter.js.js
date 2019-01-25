import React from 'react';
import { Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Landing from '../components/Landing';
import Dashboard from '../components/Dashboard';
import SurveyNew from '../components/surveys/SurveyNew';
import Surveys from '../components/surveys/Surveys';
import Credits from '../components/Credits';

export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <React.Fragment>
        <Switch>
          <PublicRoute path='/' component={Landing} exact />
          <PrivateRoute path='/dashboard' component={Dashboard} exact />
          <PrivateRoute path='/surveys' component={Surveys} exact />
          <PrivateRoute path='/credits' component={Credits} exact />
          <PrivateRoute path='/surveys/new' component={SurveyNew} exact />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default AppRouter;
