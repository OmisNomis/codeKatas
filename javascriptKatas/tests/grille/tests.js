const { parse } = require('./index');
const { assert } = require('chai');

const { grille } = require('./index')

describe('grille Tests', () => {
  it('Should return df', () => {
    assert.equal(grille("abcdef", 5), "df")
  });

  it('Should return abcdef', () => {
    assert.equal(grille("abcdef", 63), "abcdef")
  });

  it('Should not return anything', () => {
    assert.equal(grille('abcdef', 0), '')
  })
  
  it('Should handle longer messages', () => {
    assert.equal(grille('abcdefg', 127), 'abcdefg')
  })

  it('Should handle long messages', () => {
    assert.equal(grille('tcddoadepwweasresd', 77098), 'codewars')
  })

  it('Simple test 1', () => {
    assert.equal(grille("abcdef", 5) , "df")
  })
  it('Simple test 2', () => {
    assert.equal(grille("", 5) , "" )
  })
  it('Simple test 3', () => {
    assert.equal(grille("abc", 1) , "c" )
  })

  it('Simple test 4', () => {
    assert.equal(grille("tcddoadepwweasresd",77098 ) , "codewars")
  })
  it('Simple test 5', () => {
    assert.equal(grille("ab", 255) , "ab" )
  })
  it('Simple test 6', () => {
    assert.equal(grille("ab", 256) , "" )
  })
  it('Simple test 7', () => {
    assert.equal(grille("abcde", 32) , "")
  })

})
