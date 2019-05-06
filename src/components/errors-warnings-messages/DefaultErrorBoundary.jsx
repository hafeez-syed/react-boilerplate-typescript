import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import PTypes from 'prop-types'

export default class DefaultErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }

        this.wrapper = React.createRef()
    }

    static propTypes = {
        children: PTypes.node.isRequired
    }

    static componentDidMount() {
        ReactDOM.findDOMNode(this)
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    render() {
        const { hasError } = this.state

        return (<Fragment>
            {hasError ? (
                "Oops!!! something went wrong."
            ) : this.props.children}
        </Fragment>)
    }
}
