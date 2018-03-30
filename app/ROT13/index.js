'use strict';

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';

const rot13 = str => {
  return str
    .split('')
    .map(letter => {
      return letter.match(/[a-zA-Z]/g)
        ? letter.charCodeAt(0) < 90
          ? upper[(upper.indexOf(letter) + 13) % 26]
          : lower[(lower.indexOf(letter) + 13) % 26]
        : letter;
    })
    .join('');
};

module.exports = {
  rot13,
};
