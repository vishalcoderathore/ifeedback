import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Materialize from "materialize-css/dist/js/materialize.min.js";

import Payments from "./Payments";

class HeaderFullScreen extends Component {
  componentDidMount() {
    Materialize.Sidenav.init(document.querySelector("#mobile-nav"), {
      edge: "left",
      inDuration: 250
    });

    Materialize.Modal.init(document.querySelectorAll(".modal"));
  }

  // Render Navigation Links on Main Navbar
  renderNavItems() {
    return (
      <React.Fragment>
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
          <a
            href="#login-modal"
            className="waves-effect waves-light modal-trigger show-on-large social"
          >
            Sign In
            <i className="material-icons left">account_circle</i>
          </a>
        </li>
      </React.Fragment>
    );
  }

  // Render Navigation Links on Main Side Nav
  renderSideNavItems() {
    return (
      <React.Fragment>
        <li>
          <div className="user-view primary-overlay">
            <div className="background ">
              <img
                src="/images/showcase.jpg"
                alt=""
                className="responsive-img"
              />
            </div>
            <h5>iFeedback</h5>
            <p>Provide Feedback with a click of a button</p>
          </div>
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
          <div className="divider" />
        </li>
        <li>
          <a className="subheader">Account</a>
        </li>
        <li>
          <a href="#login-modal" className="modal-trigger">
            Sign In
          </a>
        </li>
      </React.Fragment>
    );
  }

  // Render Showcase
  renderShowcase() {
    return (
      <div className="showcase container">
        <div className="row">
          <div className="col s12 main-text">
            <h5>You found the right place to...</h5>
            <h1>Rediscover and Grow</h1>
            <p className="flow-text">
              iFeedback helps your customers to give reviews and provide
              valuable feedback via emails.
            </p>
            <br />
            <a
              href="#about"
              className="btn btn-large white black-text hide-on-small-and-down"
            >
              Learn More
            </a>
            <a href="#contact" className="white-text">
              <i className="material-icons medium scroll-icon">
                arrow_drop_down_circle
              </i>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Render Modal for Login
  renderModal() {
    return (
      <div id="login-modal" className="modal">
        <div className="modal-content center">
          <h4>Account Login</h4>
          <p>Login using one of the methods listed below</p>
          <div className="container">
            <div className="row">
              <a
                className="waves-effect waves-light btn social google"
                href="/auth/google"
              >
                <i className="fa fa-google left" /> Sign in with google
              </a>
            </div>
            <div className="row">
              <a
                className="waves-effect waves-light btn social facebook"
                id="facebook-link"
                onClick={() =>
                  alert(
                    "Facebook Login is under construction. Log in using Google."
                  )
                }
                href="#"
              >
                <i className="fa fa-facebook left" /> Sign in with facebook
              </a>
            </div>
            <div className="row">
              <a
                className="waves-effect waves-light btn social github"
                id="facebook-link"
                onClick={() =>
                  alert(
                    "GitHub Login is under construction. Log in using Google."
                  )
                }
                href="#"
              >
                <i className="fa fa-github left" /> Sign in with github
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <header className="main-header">
          <div className="primary-overlay">
            <div className="navbar-fixed">
              <nav className="transparent">
                <div className="container">
                  <div className="nav-wrapper">
                    <Link
                      to={this.props.auth ? "/surveys" : "/"}
                      className="brand-logo"
                    >
                      iFeedback
                    </Link>
                    <a
                      href="#"
                      data-target="mobile-nav"
                      className="button-collapse sidenav-trigger show-on-small-and-down"
                    >
                      <i className="material-icons">menu</i>
                    </a>

                    <ul className="right hide-on-med-and-down">
                      {this.renderNavItems()}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>

            <ul className="sidenav" id="mobile-nav">
              {this.renderSideNavItems()}
            </ul>

            {this.renderShowcase()}
          </div>
        </header>
        {this.renderModal()}
      </React.Fragment>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(HeaderFullScreen);
