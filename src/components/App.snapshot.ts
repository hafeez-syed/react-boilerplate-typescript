import * as React from 'react'
import renderer from 'react-test-renderer'

import App, { AsyncCounters } from './App'

describe('App Snapshot', () => {
  test('renders', () => {
    const component = renderer.create(<App />)
    component.getInstance().setState({ asyncCounters: 1 })

    let tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('Counter Snapshot', () => {
  test('renders', () => {
    const component = renderer.create(<AsyncCounters asyncCounters={1} />)

    let tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
