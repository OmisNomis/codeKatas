'use strict';

const appRootPath = require('app-root-path');
const { findUniq } = require(`${appRootPath}/app/findUniqueNumber/index.js`);
const { assert } = require('chai');

describe('Basic Tests', () => {
  it('Should return 1', () => {
    assert.equal(findUniq([0, 1, 0]), 1);
  });
  it('Should return 2', () => {
    assert.equal(findUniq([1, 1, 1, 2, 1, 1]), 2);
  });
  it('Should return 10', () => {
    assert.equal(findUniq([3, 10, 3, 3, 3]), 10);
  });
  it('Should handle decimal numbers', () => {
    assert.equal(findUniq([0, 0, 0.55, 0, 0]), 0.55);
  });
});
