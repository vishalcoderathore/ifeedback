import React from 'react';
import { connect } from 'react-redux';

import SurveyList from './SurveyList';
import SurveyDetail from './SurveyDetail';
import Preloader from '../Preloader';

class Surveys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSurveyDetail: false,
      surveyId: ''
    };
  }

  renderSurveyIntro() {
    return (
      <section className='section section-about grey lighten-5 center scrollspy'>
        <div className='container'>
          <h4>Surveys</h4>
          <p>
            Create and Track all your Surveys here.
            <br />
            To create a new Survey, click on the red + icon on the bottom right
            of your screen.
          </p>
        </div>
      </section>
    );
  }

  renderSurveyDetail(surveyId) {
    return this.props.surveys.find(elem => {
      if (elem._id === surveyId) return [elem];
    });
  }

  renderSurveys() {
    if (!this.state.showSurveyDetail) {
      return (
        <SurveyList
          onDetailsClick={id => {
            return this.setState({
              surveyId: id,
              showSurveyDetail: true
            });
          }}
          surveys={this.props.surveys}
        />
      );
    } else {
      return (
        <SurveyDetail
          currentSurvey={this.renderSurveyDetail(this.state.surveyId)}
          currentUser={this.props.auth.displayName}
          onReturnClick={() => {
            return this.setState({
              surveyId: '',
              showSurveyDetail: false
            });
          }}
        />
      );
    }
  }

  renderContent() {
    if (this.props.auth === null || this.props.surveys === null) {
      return <Preloader />;
    } else {
      return (
        <React.Fragment>
          {this.renderSurveyIntro()}
          {this.renderSurveys()}
        </React.Fragment>
      );
    }
  }

  render() {
    return <React.Fragment>{this.renderContent()}</React.Fragment>;
  }
}

function mapStateToProps({ surveys, auth }) {
  return {
    surveys,
    auth
  };
}
export default connect(mapStateToProps)(Surveys);
