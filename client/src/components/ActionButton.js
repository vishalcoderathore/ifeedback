import React from 'react';
import { Link } from 'react-router-dom';

const ActionButton = () => {
  return (
    <div className='fixed-action-btn'>
      <Link
        to='/surveys/new'
        className='btn-floating btn-large deep-orange accent-4'>
        <i className='large material-icons'>add</i>
      </Link>
    </div>
  );
};
export default ActionButton;
