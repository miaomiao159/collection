'use strict';

function choose_even(collection) {

  //在这里写入代码
  var collection_a=[];
  for (let i = 0; i <collection.length ; i++) {
    if(collection[i]%2 == 0)
    {
      collection_a.push(collection[i]);
    }

  }
  return collection_a;
}

module.exports = choose_even;
