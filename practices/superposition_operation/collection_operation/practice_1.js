'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var sum=0;
  // for (let i = 0; i < collection.length; i++) {
  //
  //   collection[i]=collection[i]*3+2;
  //   sum+=collection[i];
  // }
  // return sum;
  // var res=collection.map(function (a) {
  //   return a*3+2;
  // });
  return collection.reduce(function (a,b) {
    return a+(b*3+2);
  },0);
}

module.exports = hybrid_operation;

