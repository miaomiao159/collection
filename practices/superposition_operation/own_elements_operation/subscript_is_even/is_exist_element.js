'use strict';
var is_exist_element = function (collection, element) {
  var res = collection.filter(function (value, index) {
    return index % 2 == 0;
  });
  return res.indexOf(element) != -1;
};
module.exports = is_exist_element;
