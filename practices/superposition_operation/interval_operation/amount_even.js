'use strict';

function amount_even(collection) {

  //在这里写入代码
  // var sum=0;
  // for (let i = 0; i < collection.length; i++) {
  //   if(collection[i]%2 ==0)
  //   {
  //     sum+=collection[i];
  //   }
  // }
  // return sum;

return collection.filter(function (a)
 {
   return a%2==0;
 }).reduce(function (a,b) {
     return a+b;
  });
}

module.exports = amount_even;
