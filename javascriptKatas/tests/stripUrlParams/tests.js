'use strict';

const appRootPath = require('app-root-path');
const { stripUrlParams } = require(`${appRootPath}/app/stripUrlParams/index.js`);
const { assert } = require('chai');

describe('Basic Tests', () => {
  it('Should deal with duplicate params', () => {
    assert.equal(stripUrlParams('www.codewars.com?a=1&b=2&a=2'), 'www.codewars.com?a=1&b=2');
  });
  it('Should accept an optional array as a second parameter', () => {
    assert.equal(stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']), 'www.codewars.com?a=1');
  });
  it('Should not error when no params', () => {
    assert.equal(stripUrlParams('www.codewars.com', ['b']), 'www.codewars.com');
  });
});
