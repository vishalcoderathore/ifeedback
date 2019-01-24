import React from 'react';
import { connect } from 'react-redux';
import Stripe from './Payments';
import Preloader from './Preloader';

class Credits extends React.Component {
  renderCredits() {
    if (this.props.auth) {
      return <span>{this.props.auth.credits}</span>;
    } else {
      return <span>Not Available</span>;
    }
  }

  renderCreditsIntro() {
    return (
      <section className='section section-about grey lighten-5 center scrollspy'>
        <div className='container'>
          <h4>Credits</h4>
          <p>
            iFeedback allows you to purchase credits which are required to
            create new Surveys.
          </p>
        </div>
      </section>
    );
  }

  renderQuickInfoCard() {
    return (
      <div className='card'>
        <div className='card-content'>
          <span className='card-title'>Quick Info</span>
          <p>
            This is a demo version of the application. Therefore we don't accept
            any REAL financial information.
          </p>
          <p>
            To purchase Credits click on the Add Credits option or the + icon
            and enter the following details :{' '}
          </p>
          <ul>
            <li>
              <blockquote>Email: Your Email</blockquote>{' '}
            </li>
            <li>
              <blockquote>Card Number: 4242 4242 4242 4242</blockquote>{' '}
            </li>
            <li>
              <blockquote>Card Exp (MM/YY): Any Valid Date</blockquote>{' '}
            </li>
            <li>
              <blockquote>CVV: Any 3 digit number</blockquote>{' '}
            </li>
          </ul>
          <p>
            <b>Note: We do not store your personal/financial information.</b>
          </p>
        </div>
      </div>
    );
  }

  renderCreditsInfoCard() {
    return (
      <div className='card'>
        <div className='card-content'>
          <span className='card-title'>Credit Info</span>
          <blockquote>
            <b>Available Credits : {this.renderCredits()}</b>
          </blockquote>
        </div>
        <div className='card-action'>
          <Stripe />
        </div>
      </div>
    );
  }

  renderContent() {
    if (this.props.auth === null) {
      return <Preloader />;
    } else {
      return (
        <React.Fragment>
          {this.renderCreditsIntro()}
          <section className='section'>
            <div className='row'>
              <div className='col s12 m8'>{this.renderQuickInfoCard()}</div>
              <div className='col s12 m4'>{this.renderCreditsInfoCard()}</div>
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

function mapStateToProps({ auth }) {
  return {
    auth
  };
}
export default connect(mapStateToProps)(Credits);
