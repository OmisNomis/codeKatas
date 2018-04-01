'use strict';

const solution = string => {
  if (string.length % 2 === 0) {
    return string.match(/.{1,2}/g);
  }
  let stringArr = string.match(/.{1,2}/g);
  stringArr[stringArr.length - 1] += '_';
  return stringArr;
};

module.exports = {
  solution,
};
