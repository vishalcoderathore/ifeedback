import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Materialize from "materialize-css/dist/js/materialize.min.js";

import Payments from "./Payments";

class Header extends Component {
  componentDidMount() {
    Materialize.Sidenav.init(document.querySelector(".sidenav"), {
      edge: "left",
      inDuration: 250
    });
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <React.Fragment>
            <li key="1">
              <Payments />
            </li>
            <li key="2">
              <a href="/api/logout">Logout</a>
            </li>
          </React.Fragment>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper teal">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            iFeedback
          </Link>
          <ul id="navList" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
          <ul id="nav-mobile" className="sidenav">
            {this.renderContent()}
          </ul>
          <a
            href="#"
            data-target="nav-mobile"
            className=" right sidenav-trigger show-on-med-and-down"
          >
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
