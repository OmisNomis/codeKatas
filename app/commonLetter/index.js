'use strict';

const replaceCommon = (string, letter) => {
  const letters = {};
  string.split('').forEach(char => {
    if (char.match(/[a-z]/gi)) {
      if (letters[char]) {
        letters[char]++;
      } else {
        letters[char] = 1;
      }
    }
  });
  const biggest = Object.keys(letters).reduce((acc, val) => {
    if (letters[val] > letters[acc]) {
      return val;
    }
    return acc;
  });

  return string.replace(new RegExp(biggest, 'gi'), letter);
};

module.exports = {
  replaceCommon,
};
