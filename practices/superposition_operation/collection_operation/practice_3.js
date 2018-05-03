'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  // var sum=0;
  // for (let i = 0; i <collection.length ; i++) {
  //   if(collection[i]%2 !=0)
  //   {
  //     collection[i]=collection[i]*3+5;
  //     sum+=collection[i];
  //   }
  // }
  // return sum;
return collection.filter(function (a) {
   return a%2 ==1;
 })
   .reduce(function (a,b) {
   return a+(b*3+5);
  },0);
}

module.exports = hybrid_operation_to_uneven;
