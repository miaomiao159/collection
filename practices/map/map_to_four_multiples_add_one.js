'use strict';
var map_to_four_multiples_add_one = function(collection){
  //return [5,9,13,17,21];
  // var collections_b=[];
  // for (let i = 0; i <collection.length ; i++) {
  //   collections_b.push(collection[i]*4+1);
  // }
  // return collections_b;
  // return collection.map(function (x) {
  //   return x*4+1;
  //
  // })
  return collection.map(x=>x*4+1);
};

module.exports = map_to_four_multiples_add_one;
