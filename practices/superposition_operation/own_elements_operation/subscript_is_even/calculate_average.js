'use strict';
var calculate_average = function(collection){
  var res=collection.filter(function (a,index) {
    return index%2==1;
  });
  var sum=res.reduce(function (a,b) {
    return a+b;
  });
  return sum/res.length;

};
module.exports = calculate_average;
