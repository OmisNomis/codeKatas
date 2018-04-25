'use strict';

const isOpen = char => char === '(';
const isClosed = char => char === ')';

const validParentheses = string => {
  let parensClosed = 0;
  let valid = true;

  string.split('').forEach(char => {
    isOpen(char) ? parensClosed++ : isClosed(char) ? parensClosed-- : null;
    valid = parensClosed < 0 ? false : valid;
  });

  return !valid ? false : parensClosed === 0 ? true : false;
};

module.exports = {
  validParentheses,
};
