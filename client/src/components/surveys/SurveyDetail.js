import React from 'react';
import { Pie } from 'react-chartjs-2';
import { truncate, truncateSync } from 'fs';

const SurveyDetail = ({ onReturnClick, currentSurvey, currentUser }) => {
  function renderChart() {
    if (!currentSurvey.yes && !currentSurvey.no) {
      return (
        <React.Fragment>
          <label>Survey Results</label>
          <p>No Results available</p>
        </React.Fragment>
      );
    } else {
      return (
        <Pie
          data={{
            labels: [`Yes`, `No`],
            datasets: [
              {
                label: 'Survey Responses',
                data: [currentSurvey.yes, currentSurvey.no],
                backgroundColor: [
                  'rgba(0, 200, 83, 0.8)',
                  'rgba(213, 0, 0, 0.8)'
                ]
              }
            ]
          }}
          options={{
            title: {
              display: true,
              text: 'Survey Results ',
              fontSize: 25
            },
            legend: {
              display: true,
              position: 'bottom'
            }
          }}
        />
      );
    }
  }

  function renderSurveyDetailsCard() {
    return (
      <div className='card'>
        <div className='card-content'>
          <div className='row'>
            <div className='col s12 m6'>
              <span className='card-title'>Survey Details</span>
            </div>
            <div className='col s12 m6 center'>
              <p>Posted By {currentUser}</p>
              <p>On {new Date(currentSurvey.dateSent).toLocaleDateString()}</p>
            </div>
          </div>

          <div className='row'>
            <div className='col s12 m6'>
              <div className='row'>
                <div className='col s12'>
                  <label>Survey Title</label>
                  <blockquote>{currentSurvey.title}</blockquote>
                </div>
                <div className='col s12 pt-2'>
                  <label>Survey Subject</label>
                  <blockquote>{currentSurvey.subject}</blockquote>
                </div>
                <div className='col s12'>
                  <label>Survey Body</label>
                  <blockquote>{currentSurvey.body}</blockquote>
                </div>
              </div>
            </div>
            <div className='col s12 m6'>{renderChart()}</div>
          </div>
          <div className='card-action'>
            <button
              className='btn purple lighten-1'
              onClick={e => {
                onReturnClick();
              }}>
              Return
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <section className='section section-posts grey lighten-4'>
        <div className='container'>
          <div className='row'>
            <div className='col s12'>{renderSurveyDetailsCard()}</div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SurveyDetail;
