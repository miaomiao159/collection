'use strict';
var single_element = function (collection) {
  var res = collection.filter(function (a, index) {
    return index % 2 == 1;
  });
  return res.filter(function (a) {
    return res.filter(function (x) {
      return a == x;
    }).length == 1;
  });
};
module.exports = single_element;
