import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

// Update Redux Store with new Credits and Surveys
export const submitSurvey = (values, history) => async dispatch => {
  axios
    .post('/api/surveys', values)
    .then(res => {
      dispatch({ type: FETCH_USER, payload: res.data });
      axios.get('/api/surveys').then(res => {
        dispatch({ type: FETCH_SURVEYS, payload: res.data });
        history.push('/surveys');
      });
    })
    .catch(error => {
      showError(error, history);
    });
};

export const fetchSurveys = () => async dispatch => {
  axios
    .get('/api/surveys')
    .then(res => {
      dispatch({ type: FETCH_SURVEYS, payload: res.data });
    })
    .catch(error => {
      showError(error);
    });
};

function showError(error, history) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    if (error.response.status === 403) {
      alert(`Error: ${error.response.data.error}.`);
      history.push('/');
    }
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
}
