const { parse } = require('./index');
const { assert } = require('chai');

describe('Basic Tests', () => {
  it('Should return correct value', () => {
    assert.deepEqual(parse("iiisdoso"), [8,64])
  });
  it('Should handle only output command', () => {
    assert.deepEqual(parse("o"), [0])
  });

  it('Should handle non command letters gracefully', () => {
    assert.deepEqual(parse('iiaaabbbnnmisdoso'), [8,64])
  })

  const arr = [ ['iiiiiiii', 'iiddsso', 'iisddddii'], [[8], [0], [2]]]
  arr[0].forEach((command, ix) => {
    it(`Some random tests: ${ix}`, () => {
      assert.deepEqual(parse(command), arr[1][ix] )
    })
  })
  
});
