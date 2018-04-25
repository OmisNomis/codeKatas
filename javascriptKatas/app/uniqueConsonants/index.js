'use strict';

const isConsonant = letter => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(letter) ? false : letter.match(/[a-z]+/gi) ? true : false;
};

const countConsonants = string => {
  return string
    .toLowerCase()
    .split('')
    .filter(isConsonant)
    .map((letter, index, array) => (array.indexOf(letter) === index ? letter : null))
    .filter(letter => letter !== null).length;
};

module.exports = { countConsonants };
