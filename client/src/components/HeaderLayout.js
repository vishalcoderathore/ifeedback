import React from 'react';
import HeaderLoggedOut from './HeaderFullScreeen';
import HeaderLoggedIn from './HeaderLoggedIn';

const HeaderLayout = ({ auth }) => {
  function renderContent() {
    if (auth) {
      return <HeaderLoggedIn />;
    } else if (auth === false) {
      return <HeaderLoggedOut />;
    }
    return;
  }

  return <React.Fragment>{renderContent()}</React.Fragment>;
};

export default HeaderLayout;
