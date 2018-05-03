'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  // for (let i = 0; i <collection.length ; i++) {
  //   if(collection[i]==element)
  //    // return collection.indexOf(element);
  //     return i;
  // }
  //

  return collection.reduce(function (init, value, index) {
    if (value == element) {
      if (init == -1) {
        init=index;
      }
    }
    return init;
  }, -1);
}

module.exports = calculate_elements_sum;

