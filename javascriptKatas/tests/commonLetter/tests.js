'use strict';

const appRootPath = require('app-root-path');
const { replaceCommon } = require(`${appRootPath}/app/commonLetter/index.js`);
const { assert } = require('chai');

describe('Basic Tests', () => {
  it('Should return correct values', () => {
    assert.equal(
      replaceCommon('my mom loves me as never did', 't'),
      'ty tot loves te as never did'
    );
    assert.equal(replaceCommon('real talk bro', 'n'), 'neal talk bno');
    assert.equal(replaceCommon('great job go ahead', 'k'), 'grekt job go khekd');
    assert.equal(replaceCommon('yyyaaa twwww ttt uuu ccca', 'p'), 'yyyppp twwww ttt uuu cccp');
  });
});
