import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Preloader from './Preloader';

class Dashboard extends React.Component {
  renderRecentSurveys() {
    if (this.props.surveys === null) {
      return (
        <tr>
          <td>Loading...</td>
          <td />
        </tr>
      );
    } else {
      let recentPosts = [];
      let surveyProps = this.props.surveys.reverse();

      if (surveyProps.length > 0) {
        let recentPostsLength =
          surveyProps.length <= 3 ? surveyProps.length : 3;
        for (let i = 0; i < recentPostsLength; i++) {
          let id = surveyProps[i]._id;
          let obj = {
            title: surveyProps[i].title,
            dateSent: surveyProps[i].dateSent
          };
          recentPosts.push([id, obj]);
        }
        return recentPosts.map(item => {
          return (
            <tr key={item[0]}>
              <td>{item[1].title}</td>
              <td>{new Date(item[1].dateSent).toLocaleDateString()}</td>
              <td>
                <Link to='/surveys' className='btn purple lighten-1'>
                  Details
                </Link>
              </td>
            </tr>
          );
        });
      } else {
        return (
          <tr>
            <td>No Surveys available</td>
            <td />
          </tr>
        );
      }
    }
  }

  renderFeatures() {
    const features = [
      { icon: 'attach_money', feature: 'Purchase Credits to create Surveys' },
      {
        icon: 'assignment',
        feature: 'Create Surveys with a title and a question'
      },
      {
        icon: 'group_add',
        feature: 'Send surveys to single/multiple email addresses'
      },
      {
        icon: 'notifications_active',
        feature: 'To View all Surveys, go to the Surveys tab'
      },
      {
        icon: 'add_shopping_cart',
        feature: 'To Add Credits, go to the Credits tab'
      },
      {
        icon: 'touch_app',
        feature: 'Click on the bottom right red icon to get started!'
      }
    ];
    return features.map(({ icon, feature }) => {
      return (
        <li className='collection-item' key={feature}>
          <i className='material-icons left'>{icon}</i> {feature}
        </li>
      );
    });
  }

  renderDashboardIntro() {
    return (
      <section className='section section-about grey lighten-5 center scrollspy'>
        <div className='container'>
          <h4>Welcome to iFeedback</h4>
          <p>
            iFeedback allows you to send custom survey emails to your clients.
            Clients can answer your emails via a Yes/No option. Please follow
            the instructions listed below.
          </p>
          <div className='row'>
            <div className='col s12'>
              <br />
              <ul className='collection with-header z-depth-4'>
                <li className='collection-header'>
                  <h5>Instructions</h5>
                </li>
                {this.renderFeatures()}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  renderRecentSurveysCard() {
    return (
      <div className='card'>
        <div className='card-content'>
          <span className='card-title'>Recent Surveys</span>
          <table className='striped'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date Sent</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <React.Fragment>{this.renderRecentSurveys()}</React.Fragment>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  renderQuickTodos() {
    return (
      <div className='card'>
        <div className='card-content'>
          <span className='card-title'>Quick Todos</span>
          <form id='todo-form'>
            <div className='input-field'>
              <input id='todo' type='text' placeholder='Add Todo...' />
            </div>
          </form>
          <ul className='collection todos'>
            <li className='collection-item'>
              <div>
                Add Credits
                <a href='#!' className='secondary-content delete'>
                  <i className='material-icons'>close</i>
                </a>
              </div>
            </li>
            <li className='collection-item'>
              <div>
                Create Survey
                <a href='#!' className='secondary-content delete'>
                  <i className='material-icons'>close</i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  renderContent() {
    if (this.props.auth === null || this.props.surveys === null) {
      return <Preloader />;
    } else {
      return (
        <React.Fragment>
          {this.renderDashboardIntro()}
          <section className='section '>
            <div className='row'>
              <div className='col s12 l8 m6'>
                {this.renderRecentSurveysCard()}
              </div>
              <div className='col s12 m6 l4'>{this.renderQuickTodos()}</div>
            </div>
          </section>
        </React.Fragment>
      );
    }
  }

  render() {
    return <React.Fragment>{this.renderContent()}</React.Fragment>;
  }
}

function mapStateToProps({ auth, surveys }) {
  return {
    auth,
    surveys
  };
}

export default connect(mapStateToProps)(Dashboard);
