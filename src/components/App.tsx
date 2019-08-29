import * as React from 'react';
import { hot } from 'react-hot-loader';
import PTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios, { AxiosPromise } from 'axios';

import Header from './layout/Header';
import Main from './pages/Main';
import CheckboxWithLabel from './elements/CheckboxWithLabel';
import Contact from './pages/Contact';
import Footer from './layout/Footer';

interface AppState {
  count: number;
  asyncCounters: number;
}

interface AxiosResponse {
  counter: object;
  total: number;
  data: object;
}

const title = 'React, Webpack, Babel, Dev-server Boilerplate !!!...';

export const doIncrement = prevState => ({
  count: prevState.count + 1
});

export const doDecrement = prevState => ({
  count: prevState.count - 1
});

class App extends React.Component<{}, AppState> {
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
      .get<AxiosResponse>('https://reqres.in/api/users?page=2', {
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

  increment = (event): void => {
    event.preventDefault();
    this.setState(doIncrement);
  };

  decrement = (event): void => {
    event.preventDefault();
    this.setState(doDecrement);
  };

  render() {
    const { count } = this.state;

    return (
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Main
                title={title}
                count={count}
                increment={this.increment}
                decrement={this.decrement}
              >
                <AsyncCounters asyncCounters={this.state.asyncCounters} />
              </Main>
            )}
          />
          <Route path="/popular-repos" component={Contact} />
          <Route
            render={() => {
              return <p>Not found 404</p>;
            }}
          />
        </Switch>
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
        <Footer />
      </Router>
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
