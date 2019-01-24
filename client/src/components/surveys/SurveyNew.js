/*
 * SurveyNew shows SurveyForm and SurveyReview
 */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

const headerMessageToFillForm = 'Please fill out the following entries';
const headerMessageToReviewForm = 'Please review the following entries';

class SurveyNew extends Component {
  constructor(props) {
    super(props);
    this.state = { showFormReview: false };
  }

  renderSurveyFormIntro() {
    return (
      <section className='section section-about grey lighten-5 center scrollspy'>
        <div className='container'>
          <h4>Create New Survey</h4>
          <p>
            {this.state.showFormReview
              ? headerMessageToReviewForm
              : headerMessageToFillForm}
          </p>
        </div>
      </section>
    );
  }

  renderForm() {
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

  renderContent() {
    return (
      <section className='section section-recent'>
        <div className='container'>
          <div className='row'>
            <div className='col s12'>{this.renderForm()}</div>
          </div>
        </div>
      </section>
    );
  }

  render() {
    return (
      <div>
        {this.renderSurveyFormIntro()}
        {this.renderContent()}
      </div>
    );
  }
}

/*
 * When SurveyNew gets unmounted (i.e. navigating away from survey), dump all the values present in 'surveyForm'
 *
 * withRouter() is a function provided by react-router-dom library used to teach an arbitary component in the application about react router and how * to navigate around
 */
export default withRouter(reduxForm({ form: 'surveyForm' })(SurveyNew));
