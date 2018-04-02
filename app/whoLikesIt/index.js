'use strict';

const likes = arr => {
  return arr.length === 0
    ? 'no one likes this'
    : arr.length === 1
      ? `${arr[0]} likes this`
      : arr.length === 2
        ? `${arr[0]} and ${arr[1]} like this`
        : arr.length === 3
          ? `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
          : `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
};

module.exports = {
  likes,
};
