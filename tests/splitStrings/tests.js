'use strict';

const appRootPath = require('app-root-path');
const { solution } = require(`${appRootPath}/app/splitStrings/index`);
const { assert } = require('chai');

describe('Basic Tests', () => {
  it('Should return last index with underscore', () => {
    assert.deepEqual(solution('abc'), ['ab', 'c_']);
  });
  it('Should return array of three strings', () => {
    assert.deepEqual(solution('abcdef'), ['ab', 'cd', 'ef']);
  });
});
