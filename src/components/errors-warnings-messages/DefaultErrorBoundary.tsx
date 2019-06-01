import React, { Fragment } from 'react';
import PTypes from 'prop-types';

interface ErrorBoundaryState {
  hasError: boolean;
}
export default class DefaultErrorBoundary extends React.Component<
  {},
  ErrorBoundaryState
> {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static propTypes = {
    children: PTypes.node.isRequired
  };

  static componentDidMount() {
    // ReactDOM.findDOMNode(this)
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;

    return (
      <Fragment>
        {hasError ? 'Oops!!! something went wrong.' : this.props.children}
      </Fragment>
    );
  }
}
