'use strict';

const spyOn = func => {
  let count = 0;
  let calledWith = [];
  let results = [];

  const spy = (...args) => {
    count++;
    calledWith.push(...args);
    let result = func.apply(this, args);
    results.push(result);
    return result;
  };

  spy.callCount = () => count;
  spy.wasCalledWith = val => calledWith.indexOf(val) >= 0;
  spy.returned = val => results.indexOf(val) >= 0;

  return spy;
};

module.exports = {
  spyOn,
};
