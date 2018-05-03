'use strict';
var rank_asc = function(collection){
 // return [6,5,4,3,2];
 //  for (let i = 0; i < collection.length; i++) {
 //    for (let j = i + 1; j < collection.length; j++) {
 //      if (collection[i] < collection[j]) {
 //        var temp;
 //        temp = collection[i];
 //        collection[i] = collection[j];
 //        collection[j] = temp;
 //      }
 //    }
 //  }
  return collection.sort(function (a,b) {
    return -(a-b);
  });
};

module.exports = rank_asc;
