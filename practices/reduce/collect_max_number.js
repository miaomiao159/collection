'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  // var max = collection[0];
  // for (let i = 1; i < collection.length; i++) {
  //   if (collection[i] > max) {
  //     max = collection[i];
  //   }
  // }
  return collection.reduce(function (a, b) {
    return a >= b ? a : b;
  });
}

module.exports = collect_max_number;
