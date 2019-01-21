import React from 'react';
import { Link } from 'react-router-dom';
import Materialize from 'materialize-css/dist/js/materialize.min.js';

class HeaderLoggedIn extends React.Component {
  componentDidMount() {
    Materialize.Sidenav.init(document.querySelector('#mobile-nav-loggedIn'), {
      edge: 'left',
      inDuration: 250
    });

    // Materialize.ScrollSpy.init(document.querySelectorAll('.scrollspy'), {
    //   scrollOffset: 0
    // });
  }

  // Render Navigation Links on Main Navbar
  renderNavItems() {
    return (
      <React.Fragment>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <a href='#'>Credits</a>
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
          <div className='user-view primary-overlay'>
            <div className='background '>
              <img
                src='/images/showcase.jpg'
                alt=''
                className='responsive-img'
              />
            </div>
            <h5>iFeedback</h5>
            <p>Provide Feedback with a click of a button</p>
          </div>
        </li>
        <li>
          <a href='#root'>Dashboard</a>
        </li>
        <li>
          <a href='#about'>Credits</a>
        </li>
        <li>
          <a href='#contact'>Surveys</a>
        </li>
        <li>
          <div className='divider' />
        </li>
        <li>
          <a className='subheader'>Account</a>
        </li>
        <li>
          <a href='/api/logout'>Logout</a>
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

export default HeaderLoggedIn;
