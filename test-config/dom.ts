/* import { JSDOM } from 'jsdom';

const { window } = new JSDOM('<!doctype html><html><body></body></html>');

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce(
      (result, prop) => ({
        ...result,
        [prop]: Object.getOwnPropertyDescriptor(src, prop)
      }),
      {}
    );
  Object.defineProperties(target, props);
}

copyProps(window, global);
 */
