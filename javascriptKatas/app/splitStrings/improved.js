'use strict';

const solution = string =>
  string.length % 2 === 0 ? string.match(/../g) : (string += '_').match(/../g);

module.exports = {
  solution,
};
