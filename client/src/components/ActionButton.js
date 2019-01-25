import React from 'react';
import { Link } from 'react-router-dom';
import Materialize from 'materialize-css/dist/js/materialize.min.js';

class ActionButton extends React.Component {
  componentDidMount() {
    Materialize.FloatingActionButton.init(
      document.querySelectorAll('.fixed-action-btn'),
      {
        direction: 'top',
        toolbarEnabled: false
      }
    );
  }

  render() {
    return (
      <div className='fixed-action-btn'>
        <a className='btn-floating btn-large deep-orange accent-4'>
          <i className='large material-icons'>add</i>
        </a>
        <ul>
          <li>
            <Link to='/surveys/new' className='btn-floating purple'>
              <i className='fa fa-envelope' aria-hidden='true' />
            </Link>
          </li>
          <li>
            <Link to='/credits' className='btn-floating green'>
              <i className='fa fa-usd' aria-hidden='true' />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default ActionButton;
