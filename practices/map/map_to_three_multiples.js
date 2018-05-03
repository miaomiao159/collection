'use strict';
var map_to_three_multiples = function(collections){
 // return [3,9,15,12,27];
 //  var collections_b=[];
 //  for (let i = 0; i <collections.length ; i++) {
 //    collections_b.push(collections[i]*3);
 //  }
 //  return collections_b;
  return  collections.map(function (x) {
    return  3 * x;
  });
};

module.exports = map_to_three_multiples;
