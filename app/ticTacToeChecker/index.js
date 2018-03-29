'use strict';

const constructScores = board => {
  let resultsArr = [];
  board.forEach((row, rowIndex, boardArray) => {
    row.forEach((score, scoreIndex, scoreArray) => {
      // Across
      if (scoreIndex === 0) {
        resultsArr.push([
          board[rowIndex][scoreIndex],
          board[rowIndex][scoreIndex + 1],
          board[rowIndex][scoreIndex + 2],
        ]);
      }
      // Down
      if (rowIndex === 0) {
        resultsArr.push([
          board[rowIndex][scoreIndex],
          board[rowIndex + 1][scoreIndex],
          board[rowIndex + 2][scoreIndex],
        ]);
      }
      // Diagonal
      if (rowIndex === 0 || rowIndex === 2) {
        if (rowIndex === 0) {
          if (scoreIndex === 0) {
            resultsArr.push([
              board[rowIndex][scoreIndex],
              board[rowIndex + 1][scoreIndex + 1],
              board[rowIndex + 2][scoreIndex + 2],
            ]);
          }
          if (scoreIndex === 2) {
            resultsArr.push([
              board[rowIndex][scoreIndex],
              board[rowIndex + 1][scoreIndex - 1],
              board[rowIndex + 2][scoreIndex - 2],
            ]);
          }
        }
        if (rowIndex === 2) {
          if (scoreIndex === 0) {
            resultsArr.push([
              board[rowIndex][scoreIndex],
              board[rowIndex - 1][scoreIndex + 1],
              board[rowIndex - 2][scoreIndex + 2],
            ]);
          }
          if (scoreIndex === 2) {
            resultsArr.push([
              board[rowIndex][scoreIndex],
              board[rowIndex - 1][scoreIndex - 1],
              board[rowIndex - 2][scoreIndex - 2],
            ]);
          }
        }
      }
    });
  });
  return resultsArr;
};

const isSolved = board => {
  let xWon = false;
  let oWon = false;
  let finished = true;
  let scoresArray = constructScores(board);

  for (let i = 0; i < scoresArray.length; i++) {
    let score1 = scoresArray[i][0];
    let score2 = scoresArray[i][1];
    let score3 = scoresArray[i][2];

    if (score1 === 1 && score2 === 1 && score3 === 1) {
      xWon = true;
      break;
    }
    if (score1 === 2 && score2 === 2 && score3 === 2) {
      oWon = true;
      break;
    }
    if (score1 === 0 || score2 === 0 || score3 === 0) {
      finished = false;
    }
  }

  return xWon ? 1 : oWon ? 2 : !finished ? -1 : 0;
};

module.exports = {
  isSolved,
};
