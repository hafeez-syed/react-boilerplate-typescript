import React, { Fragment } from 'react'
import Greeting from '../errors-warnings-messages/Greeting'

const Header = () => (
    <Fragment>
        <header role="banner">
            <p>{Greeting('Company-Logo')}</p>
        </header>
        <nav role="navigation">
            <ul>
                <li>Put navigation here</li>
            </ul>
        </nav>
    </Fragment>
)

export default Header
