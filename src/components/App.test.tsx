import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import axios from 'axios';
import App, { doIncrement, doDecrement, AsyncCounters } from './App';

describe('App component', () => {
  const result = { data: { total: 12 } };
  const promise = Promise.resolve(result);

  beforeEach(() => {
    sinon
      .stub(axios, 'get')
      .withArgs('https://reqres.in/api/users?page=2')
      .returns(promise);
  });

  afterEach(() => {
    axios.get.restore();
  });

  it('Renders without error', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(AsyncCounters)).to.have.length(1);
  });
});

describe('Local State', () => {
  it('Renders without error', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(AsyncCounters)).to.have.length(1);
  });

  it('should increment the counter in state', () => {
    const state = { count: 0 };
    const newState = doIncrement(state);

    expect(newState.count).to.equal(1);
  });

  it('should decrement the counter in state', () => {
    const state = { count: 0 };
    const newState = doDecrement(state);

    expect(newState.count).to.equal(-1);
  });
});
