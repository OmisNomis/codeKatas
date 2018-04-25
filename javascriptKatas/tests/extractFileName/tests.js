'use strict';

const appRootPath = require('app-root-path');
const { extractFileName } = require(`${appRootPath}/app/extractFileName/index.js`);
const { assert } = require('chai');

describe('Basic Tests', () => {
  [
    ['1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION', 'FILE_NAME.EXTENSION'],
    ['1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34', 'This_is_an_otherExample.mpg'],
    ['1231231223123131_myFile.tar.gz2', 'myFile.tar'],
  ].forEach(test => {
    it(`Should return correct result (${test[0]})`, () => {
      assert.equal(extractFileName(test[0]), test[1]);
    });
  });
});
