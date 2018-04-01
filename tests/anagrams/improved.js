'use strict';

const appRootPath = require('app-root-path');
const { anagrams } = require(`${appRootPath}/app/anagrams/improved.js`);
const { assert } = require('chai');

describe('Basic Tests', () => {
  it('Should return empty array when no anagrams', () => {
    assert.deepEqual(anagrams('laser', ['lazing', 'lazy', 'lacer']), []);
  });
  it('Should return array of anagrams', () => {
    assert.deepEqual(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), [
      'carer',
      'racer',
    ]);
    assert.deepEqual(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);
  });
});
