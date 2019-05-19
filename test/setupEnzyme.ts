import sinon from 'sinon'
import * as chai from 'chai'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

declare module testHelpers {
  let expect: any = chai.expect
}
expect = chai.expect
global.sinon = sinon

global.mount = Enzyme.mount
global.render = Enzyme.render
global.shallow = Enzyme.shallow
