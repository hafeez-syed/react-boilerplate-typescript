import * as React from 'react'
import Greeting from '../errors-warnings-messages/Greeting'

const Header = () => (
  <React.Fragment>
    <header role="banner">
      <p>{Greeting('Company-Logo')}</p>
    </header>
    <nav role="navigation">
      <ul>
        <li>Put navigation here</li>
      </ul>
    </nav>
  </React.Fragment>
)

export default Header
