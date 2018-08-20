const { parse } = require('./index');
const { assert } = require('chai');

const { indexEqualsValue } = require('./index')

describe('grille Tests', () => {
  describe('Simple tests', () => {
    it('Simple test', () => {
      assert.equal(indexEqualsValue([-8,0,2,5]), 2)
    })
    it('Simple test', () => {
      assert.equal(indexEqualsValue([-1,0,3,6]), -1)
    })
    it('Simple test', () => {
      assert.equal(indexEqualsValue([-3,0,1,3,10]), 3)
    })
    it('Simple test', () => {
      assert.equal(indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]), 1)
    })
    it('Simple test', () => {
      assert.equal(indexEqualsValue([9,10,11,12,13,14]), -1)
    })
    it('Simple test', () => {
      assert.equal(indexEqualsValue([0]), 0)
    })
  });

})