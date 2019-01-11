/*
 * SurveyNew shows SurveyForm and SurveyReview
 */

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

/*
 * When SurveyNew gets unmounted (i.e. navigating away from survey), dump all the values present in 'surveyForm'
 */
export default withRouter(reduxForm({ form: "surveyForm" })(SurveyNew));
