'use strict';

function average_uneven(collection) {

  //在这里写入代码
 // var sum=0;
  var collection_a=[];
  // for (let i = 0; i < collection.length; i++) {
  //   if(collection[i]%2 !=0)
  //   {
  //     collection_a.push(collection[i]);
  //   }
  // }
  // for (let i = 0; i <collection_a.length ; i++) {
  //
  //   sum+=collection_a[i];
  // }
  // return sum/collection_a.length;
  var res=collection.filter(function (a) {
    return a%2 ==1;
  });
    var sum=res.reduce(function (a,b) {
    return a+b;
  });
  return sum/res.length;
}

module.exports = average_uneven;
