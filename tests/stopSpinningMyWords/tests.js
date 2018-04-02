'use strict';

const appRootPath = require('app-root-path');
const { spinWords } = require(`${appRootPath}/app/stopSpinningMyWords/index.js`);
const { assert } = require('chai');

describe('Basic Tests', () => {
  [
    ['Hey fellow warriors', 'Hey wollef sroirraw'],
    ['This is a test', 'This is a test'],
    ['This is another test', 'This is rehtona test'],
  ].forEach((testArr, index) => {
    it(`Should equal the correct value (${testArr[1]}). Test number ${index + 1}`, () => {
      assert.equal(spinWords(testArr[0]), testArr[1]);
    });
  });
});
