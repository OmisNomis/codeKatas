'use strict';

const letterCount = word => {
  const wordObj = {};
  const wordLetters = word.split('').forEach(ltr => {
    if (wordObj.hasOwnProperty(ltr)) return wordObj[ltr]++;
    wordObj[ltr] = 1;
  });
  return wordObj;
};

const anagrams = (string, array) => {
  const wordObj = letterCount(string);
  const letters = Object.keys(wordObj);
  let anagramArr = [];
  array.forEach(word => {
    let curWordObj = letterCount(word);
    let curLetters = Object.keys(curWordObj);
    if (curLetters.length !== letters.length) {
      return false;
    }
    for (let i = 0; i < letters.length; i++) {
      if (curWordObj[letters[i]] !== wordObj[letters[i]]) {
        return false;
      }
    }
    anagramArr.push(word);
  });
  return anagramArr;
};

module.exports = {
  anagrams,
};
