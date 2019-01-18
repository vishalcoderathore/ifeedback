import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Materialize from 'materialize-css/dist/js/materialize.min.js';

import Payments from './Payments';

class Header extends Component {
  componentDidMount() {
    Materialize.Sidenav.init(document.querySelector('#signIn'), {
      edge: 'left',
      inDuration: 250
    });
    Materialize.Sidenav.init(document.querySelector('#navListOnSidenav'), {
      edge: 'left',
      inDuration: 250
    });
  }

  // this.props.auth contains a valid user object when logged in, false when logged out and null when async request is in process
  renderContent() {
    if (this.props.auth !== null && this.props.auth !== false) {
      return (
        <React.Fragment>
          <li style={{ margin: '0 0px', padding: '0 15px', color: '#fff' }}>
            Credits : {this.props.auth.credits}
          </li>
          <li>
            <Payments />
          </li>
          <li>
            <a href="/api/logout" style={{ padding: '0 15px' }}>
              <button
                className="btn waves-effect waves-light "
                style={{ backgroundColor: '#dd4b39', color: '#fff' }}>
                Logout
              </button>
            </a>
          </li>
        </React.Fragment>
      );
    } else {
      return;
    }
  }

  renderSignIn() {
    if (this.props.auth === false) {
      return (
        <React.Fragment>
          <li>
            <a
              className="waves-effect waves-light btn social google"
              href="/auth/google">
              <i className="fa fa-google left" /> Sign in with google
            </a>
          </li>
          <li>
            <a
              className="waves-effect waves-light btn social facebook"
              id="facebook-link"
              onClick={() =>
                alert(
                  'Facebook Login is under construction. Log in using Google.'
                )
              }
              href="#">
              <i className="fa fa-facebook left" /> Sign in with facebook
            </a>
          </li>
          <li>
            <a
              className="waves-effect waves-light btn social github"
              id="facebook-link"
              onClick={() =>
                alert(
                  'GitHub Login is under construction. Log in using Google.'
                )
              }
              href="#">
              <i className="fa fa-github left" /> Sign in with github
            </a>
          </li>
        </React.Fragment>
      );
    } else {
      return;
    }
  }

  render() {
    return (
      <header class="main-header">
        <div class="primary-overlay">
          <div class="navbar-fixed">
            <nav class="transparent">
              <div class="container">
                <div class="nav-wrapper">
                  <a href="#home" class="brand-logo">
                    iFeedback
                  </a>
                  <a
                    href="#"
                    data-activates="mobile-nav"
                    class="button-collapse">
                    <i class="material-icons">menu</i>
                  </a>
                  <ul class="right hide-on-med-and-down">
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#testimonials">Testimonials</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                    <li>
                      <a href="#" class="btn blue">
                        Download
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          <ul class="side-nav" id="mobile-nav">
            <h4 class="blue-grey darken-3 center">BizLand</h4>
            <li>
              <a class="divider" />
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div class="showcase container">
            <div class="row">
              <div class="col s12 main-text">
                <h5>You found the...</h5>
                <h1>Right Place To Start</h1>
                <p class="flow-text">
                  To take your business to the next level with our services that
                  have taken companies to the fortune 500
                </p>
                <br />
                <a href="#about" class="btn btn-large white black-text">
                  Learn More
                </a>
                <a href="#contact" class="white-text">
                  <i class="material-icons medium scroll-icon">
                    arrow_drop_down_circle
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
