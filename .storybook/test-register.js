const {
  after: afterAll,
  before: beforeAll,
  afterEach,
  beforeEach,
  it,
  specs,
  describe
} = require('storybook-addon-specifications');
const expect = require('expect');

const additions = { expect, afterAll, afterEach, beforeAll, beforeEach, it, specs, describe };

Object.assign(global, additions);
export default additions;