'use strict';

const findOdd = arr => {
  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    if (!counts[arr[i]]) {
      counts[arr[i]] = 1;
    } else {
      counts[arr[i]]++;
    }
  }
  const numbers = Object.keys(counts);
  for (let i = 0; i < numbers.length; i++) {
    if (counts[numbers[i]] % 2 !== 0) {
      return parseInt(numbers[i]);
    }
  }
};

module.exports = {
  findOdd,
};
