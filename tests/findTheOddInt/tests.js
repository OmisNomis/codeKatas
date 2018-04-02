'use strict';

const appRootPath = require('app-root-path');
const { findOdd } = require(`${appRootPath}/app/findTheOddInt/index.js`);
const { assert } = require('chai');

describe('Basic Tests', () => {
  [
    [[20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5],
    [[1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1],
    [[20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5],
    [[10], 10],
    [[1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10],
    [[5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1],
  ].forEach((testArr, index) => {
    it(`Should equal the correct value (${testArr[1]}). Test number ${index + 1}`, () => {
      assert.equal(findOdd(testArr[0]), testArr[1]);
    });
  });
});
