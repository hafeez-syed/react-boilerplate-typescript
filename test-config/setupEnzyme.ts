/* import { JSDOM } from 'jsdom';

interface Global extends NodeJS.Global {
  window: Window;
  document: Document;
  navigator: {
    userAgent: string;
  };
}

const globalNode: Global = {
  window: window,
  document: window.document,
  navigator: {
    userAgent: 'node.js'
  },
  ...global
};

// Force the test environment
process.env.NODE_ENV = 'test';

// Simulate window for Node.js
if (!globalNode.window && !globalNode.document) {
  const { window } = new JSDOM('<!doctype html><html><body></body></html>', {
    beforeParse(win) {
      win.scrollTo = () => {};
    },
    pretendToBeVisual: false,
    userAgent: 'mocha'
  });

  // Configure global variables which like to be used in testing
  globalNode.window = window;
  globalNode.document = window.document;
  globalNode.navigator = window.navigator;
} */

import { configure } from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });

/* export interface Global {
  expect: any;
  sinon: sinon;
  mount: any;
  render: any;
  shallow: any;
  window: Window;
  document: Document;
  navigator: {
    userAgent: 'node.js';
  };
}

declare var global: Global;
global.expect = expect;

global.sinon = sinon;
global.mount = Enzyme.mount;
global.render = Enzyme.render;
global.shallow = Enzyme.shallow;
global.window = window;
global.document = window.document;
 */
