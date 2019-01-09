import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Materialize from "materialize-css/dist/js/materialize.min.js";

import Payments from "./Payments";

class Header extends Component {
  componentDidMount() {
    Materialize.Sidenav.init(document.querySelector("#signIn"), {
      edge: "left",
      inDuration: 250
    });
    Materialize.Sidenav.init(document.querySelector("#navListOnSidenav"), {
      edge: "left",
      inDuration: 250
    });
  }

  // this.props.auth contains a valid user object when logged in, false when logged out and null when async request is in process
  renderContent() {
    if (this.props.auth !== null && this.props.auth !== false) {
      return (
        <React.Fragment>
          <li style={{ margin: "0 10px", color: "#fff" }}>
            Credits : {this.props.auth.credits}
          </li>
          <li>
            <Payments />
          </li>
          <li>
            <a
              href="/api/logout"
              className="btn waves-effect waves-light"
              style={{ backgroundColor: "#dd4b39", color: "#fff" }}
            >
              Logout
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
              href="/auth/google"
            >
              <i className="fa fa-google left" /> Sign in with google
            </a>
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
        </React.Fragment>
      );
    } else {
      return;
    }
  }

  render() {
    return (
      <nav className="blue-grey darken-4">
        <div className="nav-wrapper container">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            <img src="/logo_60x60.png" className="responsive-img left" />
            iFeedback
          </Link>
          <ul id="signIn" className="sidenav grey darken-4">
            {this.renderSignIn()}
          </ul>
          {!this.props.auth ? (
            <a
              href="#"
              data-target="signIn"
              className="waves-effect waves-light right sidenav-trigger show-on-large social"
            >
              Sign In
              <i className="material-icons left">account_circle</i>
            </a>
          ) : (
            <a
              href="#"
              data-target="navListOnSidenav"
              className="right sidenav-trigger show-on-med-and-down"
            >
              <i className="material-icons">menu</i>
            </a>
          )}
          <ul id="navList" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
          <ul id="navListOnSidenav" className="sidenav grey darken-4">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
