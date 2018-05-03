'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码

  // for (let i = collection.length-1; i >=0 ; i--) {
  //   if(collection[i]==element)
  //   {
  //      return i;
  //   }
  //
  // }
  return collection.reduce(function (init,value,index) {
    if(value==element)
    {
      init=index;
    }
    return init;
  },-1);
}

module.exports = calculate_elements_sum;
