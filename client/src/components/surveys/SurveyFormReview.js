/*
 * SurveyFormReview shows users their form inputs for review
 */
import _ from 'lodash';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <li key={name}>
        <label>{label}</label>
        <blockquote>{formValues[name]}</blockquote>
      </li>
    );
  });

  return (
    <div>
      <ul>{reviewFields}</ul>
      <button
        className='yellow darken-4 btn-flat white-text'
        onClick={onCancel}>
        Back <i className='material-icons left'>arrow_left</i>
      </button>
      <button
        type='submit'
        className='teal btn-flat right white-text'
        onClick={e => {
          e.target.disabled = true;
          submitSurvey(formValues, history);
        }}>
        Send Survey <i className='material-icons right'>email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
