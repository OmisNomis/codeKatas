'use strict';

const isFloat = n => {
  return parseFloat(n) !== Math.floor(parseInt(n));
};

const isNegative = n => {
  return parseInt(n) < 0;
};

const prefill = (n, v) => {
  if (isNaN(parseInt(n)) || isFloat(n) || isNegative(n)) {
    throw new TypeError(`${n} is invalid`);
  }
  return new Array(parseInt(n)).fill(v);
};

module.exports = {
  prefill,
};
