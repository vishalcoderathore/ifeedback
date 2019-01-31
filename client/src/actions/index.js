import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = async () => {
  const response = await axios.get('/api/current_user');
  return response.data;
};

export const fetchSurveys = async () => {
  const response = await axios.get('/api/surveys');
  return response.data;
};

const postSurveys = async survey => {
  const response = await axios.post('/api/surveys', survey);
  return response.data;
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

// Update Redux Store with new Credits and Surveys
export const submitSurvey = (values, history) => async dispatch => {
  postSurveys(values)
    .then(res => {
      dispatch({ type: FETCH_USER, payload: res });
      fetchSurveys().then(res => {
        dispatch({ type: FETCH_SURVEYS, payload: res });
        history.push('/surveys');
      });
    })
    .catch(error => {
      /*
       * Error : 0 Credits => User would be warned for 0 credits and redirected to the credits page
       */
      /*
       * Error : Not logged in => Update auth state to false in redux store, warn user for not logged in error and redirect to landing page
       */
      const errorCode = showError(error, history);
      if (errorCode === 409) {
        history.push('/credits');
      } else {
        fetchUser().then(res => {
          dispatch({ type: FETCH_USER, payload: res });
        });
        history.push('/');
      }
    });
};

const showError = (error, history) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    if (error.response.status) {
      alert(`Error: ${error.response.data.error}.`);
      return error.response.status;
    }
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
    return '';
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
    return '';
  }
};
