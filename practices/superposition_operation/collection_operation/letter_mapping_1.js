'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var str = '0abcdefghijklmnopqrstuvwxyz';
  var collection_a = [];
  // for (let i = 0; i <collection.length ; i++) {
  //   if(collection[i]%2==0)
  //   {
  //     collection_a.push(str[collection[i]]);
  //   }
  // }
  // return collection_a;
  return collection.filter(function (a) {
    return a % 2 == 0;
  })
    .map(function (a) {
      return str[a];
    });
}

module.exports = even_to_letter;
