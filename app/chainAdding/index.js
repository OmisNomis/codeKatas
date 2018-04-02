'use strict';

const add = n => {
  const f = x => {
    return add(n + x);
  };
  f.valueOf = () => {
    return n;
  };
  return f;
};

module.exports = {
  add,
};
