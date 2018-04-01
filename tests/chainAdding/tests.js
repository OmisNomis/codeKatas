'use strict';

const appRootPath = require('app-root-path');
const { add } = require(`${appRootPath}/app/chainAdding/index.js`);
const { assert } = require('chai');

describe('Basic Tests', () => {
  it('Should return 3', () => {
    assert.equal(add(1)(2), 3);
  });
  it('Should return 6', () => {
    assert.equal(add(1)(2)(3), 6);
  });
  it('Should return 10', () => {
    assert.equal(add(1)(2)(3)(4), 10);
  });
  it('Should return 15', () => {
    assert.equal(add(1)(2)(3)(4)(5), 15);
  });
  it('Should accept single call', () => {
    assert.equal(add(1), 1);
  });
  it('Should be able to store the result and reuse', () => {
    const addTwo = add(2);
    assert.equal(addTwo, 2);
    assert.equal(addTwo(3), 5);
    assert.equal(addTwo(3)(5), 10);
  });
});
