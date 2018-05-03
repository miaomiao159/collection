'use strict';
var number_map_to_word = function(collection){
  //return ['a','b','c','d','e'];
  // var collection_b=[];
  var  str='0abcdefghijklmnopqrstuvwxyz';
  // for (let i = 0; i <collection.length ; i++) {
  //    collection_b.push(str[collection[i]]);
  // }
  // return collection_b;
  return collection.map(function (x) {
    return str[x];

  })
};

module.exports = number_map_to_word;
