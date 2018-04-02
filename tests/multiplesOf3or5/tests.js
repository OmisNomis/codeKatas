'use strict';

const appRootPath = require('app-root-path');
const { solution } = require(`${appRootPath}/app/multiplesOf3or5/index.js`);
const { assert } = require('chai');

describe('Basic Tests', () => {
  it('Should return 3', () => {
    assert.equal(solution(10), 23);
  });
});
