import * as React from 'react';
import { hot } from 'react-hot-loader';
import PTypes from 'prop-types';
import axios from 'axios';

import Header from './layout/Header';
import Main from './Main';
import Footer from './layout/Footer';

interface IState {
  count: number;
  asyncCounters: number;
}

const title = 'React, Webpack, Babel, Dev-server Boilerplate !!!...';

export const doIncrement = prevState => ({
  count: prevState.count + 1
});

export const doDecrement = prevState => ({
  count: prevState.count - 1
});

class App extends React.Component<{}, IState> {
  unmounted = false;
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      asyncCounters: 0
    };
  }

  componentDidMount() {
    axios
      .get('https://reqres.in/api/users?page=2', {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(counter => {
        if (this.unmounted) return;
        this.setState({ asyncCounters: counter.data.total });
      });
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  increment = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    this.setState(doIncrement);
  };

  decrement = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    this.setState(doDecrement);
  };

  render() {
    const { count } = this.state;

    return (
      <React.Fragment>
        <Header />
        {/* <Main
          title={title}
          count={count}
          increment={this.increment}
          decrement={this.decrement}
        >
          <AsyncCounters asyncCounters={this.state.asyncCounters} />
        </Main> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export const AsyncCounters = ({ asyncCounters }) => (
  <label>Total data: {asyncCounters}</label>
);

AsyncCounters.propTypes = {
  asyncCounters: PTypes.number.isRequired
};

export default hot(module)(App);
