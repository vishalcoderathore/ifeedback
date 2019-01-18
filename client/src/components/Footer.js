import React from 'react';

const Footer = () => {
  return (
    <footer
      className='page-footer blue-grey darken-4'
      style={{ marginBottom: '5px' }}>
      <div className='container footer-copyright'>
        iFeedback Corp © 2019
        <a className='grey-text text-lighten-4 right' href='#root'>
          <i className='material-icons left'>keyboard_arrow_up</i> Back To Top
        </a>
      </div>
    </footer>
  );
};
export default Footer;
