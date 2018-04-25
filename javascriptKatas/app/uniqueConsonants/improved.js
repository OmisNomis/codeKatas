'use strict';

const countConsonants = string =>
  new Set(string.toLowerCase().replace(/[aeiou]|[^a-z]/gi, '')).size;

module.exports = { countConsonants };
