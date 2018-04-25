'use strict';

const isSolved = board => {
  /*join all elements into a string.
   replace commas with nothing */
  board = board.join('-').replace(/,/g, '');
  if (/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
  if (/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
  if (/0/.test(board)) return -1;
  return 0;
};

module.exports = {
  isSolved,
};
