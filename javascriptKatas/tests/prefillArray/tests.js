'use strict';

const appRootPath = require('app-root-path');
const { prefill } = require(`${appRootPath}/app/prefillArray/index.js`);
const { assert } = require('chai');

describe('Basic Tests', () => {
  it('Should return correct values', () => {
    assert.deepEqual(prefill(3, 1), [1, 1, 1]);
    assert.deepEqual(prefill(2, 'abc'), ['abc', 'abc']);
    assert.deepEqual(prefill('1', 1), [1]);
    assert.deepEqual(prefill(3, prefill(2, '2d')), [['2d', '2d'], ['2d', '2d'], ['2d', '2d']]);
    assert.deepEqual(prefill('0'), []);
  });
  it('Should throw error', () => {
    let typeerr = 'is invalid';
    assert.throws(() => {
      prefill('xyz', 1);
    }, `xyz ${typeerr}`);

    assert.throws(() => {
      prefill('2.182705762034433', 1);
    }, `2.182705762034433 ${typeerr}`);

    assert.throws(() => {
      prefill('-6', 1);
    }, `-6 ${typeerr}`);
  });
});
