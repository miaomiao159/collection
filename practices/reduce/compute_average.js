'use strict';

function compute_average(collection) {
  //在这里写入代码
  // var sum=0;
  // for (let i = 0; i < collection.length; i++) {
  //   sum+=collection[i];
  // }
  // return sum/collection.length;
  return collection.reduce(function (a,b) {
    return a+b;})/collection.length;
}

module.exports = compute_average;

