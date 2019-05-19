import * as React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import DefaultErrorBoundary from './components/errors-warnings-messages/DefaultErrorBoundary';
// import * as App from './components/App'
import './styles/main.scss';

if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 3000);
}

ReactDOM.render(
  <DefaultErrorBoundary>
    <div>Hello React / Typescript</div>
  </DefaultErrorBoundary>,
  document.getElementById('app')
);
