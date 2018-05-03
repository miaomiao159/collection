'use strict';
var number_map_to_word_over_26 = function(collection){
 // return ['a','m','aa','ad','y','aa'];
  var  str= '0abcdefghijklmnopqrstuvwxyz';
  var data=[];
  for (let i = 0; i <str.length ; i++) {
    data.push(str[i]);
  }
  for (let i = 1; i < str.length; i++) {
    for (let j = 1; j < str.length; j++) {
      data.push(str[i]+str[j]);
    }
  }
  //   var  collection_b=[];
  //   for (let j = 0; j <collection.length ; j++) {
  //     collection_b.push(data[collection[j]]);
  //   }
  // return collection_b;
  return collection.map(function (x) {
    return data[x];

  })
};

module.exports = number_map_to_word_over_26;
