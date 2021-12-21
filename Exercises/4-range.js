'use strict';

const range = (start, end) => {
  const arr = [];
  let i = 0;
  while (start <= end) {
    arr[i] = start;
    i++;
    start++;
  }
  return arr;
};

module.exports = { range };
