'use strict';

const spinWords = string =>
  string
    .split(' ')
    .map(
      word =>
        word.length > 4
          ? word
              .split('')
              .reverse()
              .join('')
          : word
    )
    .join(' ');

module.exports = {
  spinWords,
};
