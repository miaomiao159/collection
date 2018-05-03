'use strict';

function map_to_even(collection) {
  //return [2,4,6,8,10];
  // var collections_b=[];
  // for (let i = 0; i <collection.length ; i++) {
  //   collections_b.push(collection[i]*2);
  // }
  // var collections_b= collection.map(function (x) {
  //   return 2 * x;
  // });
  return collection.map(x => 2 * x);
}

module.exports = map_to_even;
