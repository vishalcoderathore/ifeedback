import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  renderSurveys() {
    return this.props.surveys
      .reverse()
      .map(({ _id, title, body, dateSent, dateResponded, yes, no }) => {
        return (
          <div className='card grey lighten-4' key={_id}>
            <div className='card-content'>
              <span className='card-title'>{title}</span>
              <p>{body}</p>
              <p className='right'>
                Sent On: {new Date(dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className='card-action'>
              <div className='row'>
                <div className='col s3 l1'>
                  <i className='material-icons' style={{ color: '#0277bd' }}>
                    thumb_up
                  </i>
                  <span className='h6'>{yes}</span>
                </div>

                <div className='col s3 l1'>
                  <i className='material-icons' style={{ color: '#bf360c ' }}>
                    thumb_down
                  </i>
                  <span className='h6'>{no}</span>
                </div>
              </div>
            </div>
          </div>
        );
      });
  }

  render() {
    return (
      <React.Fragment>
        <section
          id='about'
          className='section section-about grey lighten-5 center scrollspy'>
          <div className='container'>
            <h4>Surveys</h4>
            <p>
              iFeedback allows you to create new and track all your Surveys.
            </p>
          </div>
        </section>
        <div>{this.renderSurveys()}</div>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ surveys }) {
  return {
    surveys
  };
}
export default connect(mapStateToProps)(SurveyList);
