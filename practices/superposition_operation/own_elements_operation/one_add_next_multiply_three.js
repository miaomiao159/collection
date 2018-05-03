'use strict';

function one_add_next_multiply_three(collection) {
  var res = collection.map(function (value, index, arr) {
    if (index < arr.length - 1) {
      return 3 * (value + arr[index + 1]);
    }
    return value;
  });
  res.pop();
  return res;
}

module.exports = one_add_next_multiply_three;
