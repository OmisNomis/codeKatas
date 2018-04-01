'use strict';

const add = n => {
  const f = x => add(n + x);
  f.valueOf = () => n;
  return f;
};

module.exports = {
  add,
};
