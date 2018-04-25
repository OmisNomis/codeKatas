'use strict';

const appRootPath = require('app-root-path');
const { validParentheses } = require(`${appRootPath}/app/validParentheses/index.js`);
const { assert } = require('chai');

describe('Basic Tests', () => {
  ['()', '(())((()())())'].forEach(string => {
    it(`Should return true for ${string}`, () => {
      assert.isTrue(validParentheses(string));
    });
  });

  [')(()))', '(', '())()(', '())', ')('].forEach(string => {
    it(`Should return false for ${string}`, () => {
      assert.isFalse(validParentheses(string));
    });
  });
});
