import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-social/materialize-social.css';
import './styles/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App, { history } from './routers/AppRouter.js';
import reducers from './reducers';
import { FETCH_USER, FETCH_SURVEYS } from './actions/types';

import { fetchUser, fetchSurveys } from './actions/index';

// Development only
import axios from 'axios';
window.axios = axios;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.querySelector('#root'));
    hasRendered = true;
  }
};

/*
 * Check for existing user in axios request
 */
// axios.get('/api/current_user').then(res => {
fetchUser().then(res => {
  /*
   * Updates Redux store (auth) to res.data if logged in or false if logged out
   */
  store.dispatch({ type: FETCH_USER, payload: res });

  if (res) {
    /*
     * Make call to load Surveys if logged in
     */
    fetchSurveys().then(res => {
      /*
       * Updates Redux store (surveys) to surveys array
       */
      store.dispatch({ type: FETCH_SURVEYS, payload: res });
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    renderApp();
    history.push('/');
  }
});
