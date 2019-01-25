import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Materialize from 'materialize-css/dist/js/materialize.min.js';

class HeaderLoggedIn extends React.Component {
  componentDidMount() {
    Materialize.Sidenav.init(document.querySelector('#mobile-nav-loggedIn'), {
      edge: 'left',
      inDuration: 250,
      outDuration: 250
    });
  }

  // Render Navigation Links on Main Navbar
  renderNavItems() {
    return (
      <React.Fragment>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to='/credits'>Credits</Link>
        </li>
        <li>
          <Link to='/surveys'>Surveys</Link>
        </li>
        <li>
          <a href='/api/logout'>Logout</a>
        </li>
      </React.Fragment>
    );
  }

  // Render Navigation Links on Side Nav
  renderSideNavItems() {
    return (
      <React.Fragment>
        <li>
          <div className='user-view'>
            <div className='background '>
              <img
                src='/images/header-loggedin.jpeg'
                alt=''
                className='responsive-img'
              />
            </div>

            <a>
              <span className='name white-text'>iFeedback Corp © 2019</span>
            </a>
            <a>
              <span className='name white-text'>
                {this.props.auth.displayName}
              </span>
            </a>
            <a>
              <span className='email white-text'>
                Credits: {this.props.auth.credits}
              </span>
            </a>
          </div>
        </li>
        <li>
          <Link to='/dashboard' className='sidenav-close'>
            <i className='sidenav-margin material-icons'>dashboard</i>
            Dashboard
          </Link>
        </li>
        <li>
          <a href='/credits' className='sidenav-close'>
            <i className='sidenav-margin material-icons'>attach_money</i>
            Credits
          </a>
        </li>
        <li>
          <Link to='/surveys' className='sidenav-close'>
            <i className='sidenav-margin  material-icons'>email</i>
            Surveys
          </Link>
        </li>
        <li>
          <div className='divider' />
        </li>
        <li>
          <a className='subheader'>Account Controls</a>
        </li>
        <li>
          <a href='/api/logout'>
            <i className='sidenav-margin material-icons purple-text'>
              account_circle
            </i>
            Logout
          </a>
        </li>
      </React.Fragment>
    );
  }
  render() {
    return (
      <React.Fragment>
        <nav className='navbar-fixed dark-grey'>
          <div className='container'>
            <div className='nav-wrapper'>
              <Link to='/dashboard' className='brand-logo'>
                iFeedback
              </Link>
              <a
                href='#'
                data-target='mobile-nav-loggedIn'
                className='button-collapse sidenav-trigger show-on-small-and-down'>
                <i className='material-icons'>menu</i>
              </a>
              <ul className='right hide-on-med-and-down'>
                {this.renderNavItems()}
              </ul>
            </div>
          </div>
        </nav>

        <ul className='sidenav' id='mobile-nav-loggedIn'>
          {this.renderSideNavItems()}
        </ul>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(HeaderLoggedIn);
