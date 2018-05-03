'use strict';

function find_first_even(collection) {
   //在这里写入代码
  // for (let i = 0; i < collection.length; i++) {
  //   if(collection[i]%2==0)
  //   {
  //     return collection[i];
  //   }
  //
  // }
  return collection.reduce(function (init,value) {
    if(value%2==0)
    {
      if(init==-1)
      {
        init=value;
      }
    }
    return init;
  },-1);

}

module.exports = find_first_even;

