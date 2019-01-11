/*
 * SurveyForm shows a form to user to add input
 */

import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link
            to="/surveys"
            className="btn-flat left white-text"
            style={{ backgroundColor: "#dd4b39" }}
          >
            Cancel <i className="material-icons left">clear</i>
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next <i className="material-icons right">arrow_right</i>
          </button>
        </form>
      </div>
    );
  }
}

// If validate returns empty object, no errors found
function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || "");
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false //don't dump the form values
})(SurveyForm);
