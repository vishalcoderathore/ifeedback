import React from 'react';

const Preloader = () => {
  return (
    <div className='preloader-wrapper big active loader'>
      <div className='spinner-layer spinner-blue-only'>
        <div className='circle-clipper left'>
          <div className='circle' />
        </div>
        <div className='gap-patch'>
          <div className='circle' />
        </div>
        <div className='circle-clipper right'>
          <div className='circle' />
        </div>
      </div>
    </div>
  );
};
export default Preloader;
