'use strict';

const solution = number => {
  let nums = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      nums.push(i);
    }
  }
  return nums.reduce((acc, val) => acc + val, 0);
};

module.exports = {
  solution,
};
