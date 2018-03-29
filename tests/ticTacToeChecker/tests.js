'use strict';

const appRootPath = require('app-root-path');
const { isSolved } = require(`${appRootPath}/app/ticTacToeChecker/index.js`);
const { assert } = require('chai');

describe('Basic Tests', () => {
  it('Should return 1', () => {
    assert.equal(isSolved([[1, 1, 1], [0, 1, 2], [2, 1, 0]]), 1);
  });
  it('Should return -1', () => {
    assert.equal(isSolved([[0, 0, 1], [0, 1, 2], [2, 1, 0]]), -1);
  });
  it('Should return 0', () => {
    assert.equal(isSolved([[2, 1, 2], [2, 1, 1], [1, 2, 1]]), 0);
  });
  it('Should return -1', () => {
    assert.equal(isSolved([[2, 0, 2], [2, 1, 1], [1, 2, 1]]), -1);
  });
  it('Should return -1', () => {
    assert.equal(isSolved([[1, 2, 1], [1, 1, 2], [2, 2, 0]]), -1);
  });
  it('Should return 2', () => {
    assert.equal(isSolved([[2, 0, 1], [1, 2, 0], [0, 1, 2]]), 2);
  });
});
