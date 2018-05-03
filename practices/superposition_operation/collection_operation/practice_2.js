'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  //var data=[];
  // for (let i = 0; i <collection.length ; i++) {
  //   if(collection[i]%2 !=0)
  //   {
  //     collection[i]=collection[i]*3+2;
  //     data.push(collection[i]);
  //   }
  // }
  // return data;
  return collection.filter(function (x) {
    return x%2==1;
  })
    .map(function (a) {
     return a*3+2;
  });
}

module.exports = hybrid_operation_to_uneven;

