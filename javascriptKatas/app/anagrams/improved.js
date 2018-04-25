'use strict';

const anagrams = (word, wordsArr) => {
  return wordsArr.filter(
    x =>
      x
        .split('')
        .sort()
        .join('') ===
      word
        .split('')
        .sort()
        .join('')
  );
};

module.exports = {
  anagrams,
};
