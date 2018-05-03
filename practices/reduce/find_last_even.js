'use strict';

function find_last_even(collection) {
  //在这里写入代码
  // var collection_a = [];
  // for (let i = 0; i < collection.length; i++) {
  //   if (collection[i] % 2 == 0) {
  //     collection_a.push(collection[i]);
  //   }
  //
  // }
  // return collection_a.pop();
  return collection.reduce(function (init,value) {
    if(value%2==0)
    {
      init=value;
    }
    return init;
  },-1);
}

module.exports = find_last_even;
