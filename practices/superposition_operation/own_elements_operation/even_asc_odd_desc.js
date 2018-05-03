'use strict';
var even_asc_odd_desc = function (collection) {
  var a1 = collection.filter(function (a) {
    return a % 2 == 0;
  });
  var a2 = collection.filter(function (a) {
    return a % 2 == 1;
  });
  return a1.sort(function (a, b) {
    return a - b;
  }).concat(a2.sort(function (a, b) {
    return b - a;
  }));
};

module.exports = even_asc_odd_desc;
