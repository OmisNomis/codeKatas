'use strict';

const appRootPath = require('app-root-path');
const { countConsonants } = require(`${appRootPath}/app/uniqueConsonants/index.js`);
const { assert } = require('chai');

describe('Basic Tests', () => {
  it('Should return 7', () => {
    assert.equal(countConsonants('sillystring'), 7);
  });
});
