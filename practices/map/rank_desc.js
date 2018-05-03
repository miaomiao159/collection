'use strict';
var rank_desc = function(collection){
 // return [2,3,4,5,6];
 //  for (let i = 0; i < collection.length; i++) {
 //    for (let j = i + 1; j < collection.length; j++) {
 //      if (collection[i] > collection[j]) {
 //        var temp;
 //        temp = collection[i];
 //        collection[i] = collection[j];
 //        collection[j] = temp;
 //      }
 //    }
 //  }
  return collection.sort();
};

module.exports = rank_desc;
