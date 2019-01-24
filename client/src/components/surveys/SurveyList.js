import React, { Component } from 'react';

const SurveyList = ({ surveys, onDetailsClick }) => {
  function renderSurveys() {
    if (surveys.length > 0) {
      return surveys.map(item => {
        return (
          <tr key={item._id} id={item._id}>
            <td>{item.title}</td>
            <td className='hide-on-small-only'>{item.subject}</td>
            <td>{new Date(item.dateSent).toLocaleDateString()}</td>
            <td>
              <button
                className='btn purple lighten-1'
                onClick={e => {
                  onDetailsClick(e.target.parentNode.parentNode.id);
                }}>
                Details
              </button>
            </td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td>No Surveys Available</td>
          <td />
          <td />
        </tr>
      );
    }
  }

  return (
    <React.Fragment>
      <section className='section section-posts grey lighten-4'>
        <div className='container'>
          <div className='row'>
            <div className='col s12'>
              <div className='card'>
                <div className='card-content'>
                  <div className='row'>
                    <div className='col s6 m6 l6'>
                      {' '}
                      <span className='card-title'>Surveys</span>
                    </div>
                    <div className='col s6 m4 offset-m2'>
                      Displaying {surveys.length}{' '}
                      {surveys.length > 1 ? 'Surveys' : 'Survey'}
                    </div>
                  </div>

                  <table className='striped'>
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th className='hide-on-small-only'>Category</th>
                        <th>Date Created</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <React.Fragment>{renderSurveys()}</React.Fragment>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SurveyList;
