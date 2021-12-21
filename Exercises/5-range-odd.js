'use strict';

const rangeOdd = (start, end) => {
  const arr = [];
  let i = 0;
  while (start <= end) {
    if (start % 2 !== 0) {
      arr[i] = start;
      i++;
    }
    start++;
  }
  return arr;
};

module.exports = { rangeOdd };
