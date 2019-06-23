import * as React from 'react';
import Greeting from '@module-error/Greeting';

import Nav from './Nav';

const Header = () => (
  <React.Fragment>
    <header role="banner">
      <p>{Greeting('Company-Logo')}</p>
    </header>
    <nav role="navigation">
      <Nav />
    </nav>
  </React.Fragment>
);

export default Header;
