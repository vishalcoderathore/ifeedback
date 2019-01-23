import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name='iFeedback'
        description='$5 for 5 email credits'
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}>
        <a>
          <button className='btn purple lighten-1'>Add Credits</button>
        </a>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
