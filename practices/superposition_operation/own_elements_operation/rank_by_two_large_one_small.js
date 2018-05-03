'use strict';

function rank_by_two_large_one_small(collection) {
  //这里写代码。。。
  collection.sort(function (a, b) {
    return a - b;
  });
  return collection.map(function (value, index, arr) {
    if (index + 2 < arr.length) {
      if (index % 3 == 2) {
        return arr[index-2];
      }
      return arr[index+1];
    }
    return value;
  });
}

module.exports = rank_by_two_large_one_small;
