'use strict';

const appRootPath = require('app-root-path');
const { rot13 } = require(`${appRootPath}/app/ROT13/index.js`);
const { assert } = require('chai');

describe('Basic Tests', () => {
  it('Should return correct values', () => {
    assert.equal(rot13('EBG13 rknzcyr.'), 'ROT13 example.');
  });
});
