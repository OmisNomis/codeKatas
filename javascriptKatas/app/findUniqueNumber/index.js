'use strict';

const findUniq = arr => arr.filter(value => arr.indexOf(value) == arr.lastIndexOf(value))[0];

module.exports = {
  findUniq,
};
