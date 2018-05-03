'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  // var min=collection[0];
  // for (let i = 1; i <collection.length ; i++) {
  //   if(collection[i]<min)
  //   {
  //     min=collection[i];
  //   }
  // }
  return collection.reduce(function (a,b) {
    return a<b?a:b;

  });
}

module.exports = collect_min_number;

