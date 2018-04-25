'use strict';

const appRootPath = require('app-root-path');
const { likes } = require(`${appRootPath}/app/whoLikesIt/index.js`);
const { assert } = require('chai');

describe('Basic Tests', () => {
  it('Should handle empty array', () => {
    assert.equal(likes([]), 'no one likes this');
  });
  it('Should handle one person', () => {
    assert.equal(likes(['Peter']), 'Peter likes this');
  });
  it('Should handle 2 people', () => {
    assert.equal(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
  });
  it('Should handle 3 people', () => {
    assert.equal(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
  });
  it('Should handle 4 people', () => {
    assert.equal(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });
  it('Should handle 5 people', () => {
    assert.equal(
      likes(['Alex', 'Jacob', 'Mark', 'Max', 'John']),
      'Alex, Jacob and 3 others like this'
    );
  });
});
