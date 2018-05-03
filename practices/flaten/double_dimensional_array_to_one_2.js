'use strict';

function double_to_one(collection) {
 var collection_a=[];
 var collection_b=[];
  //在这里写入代码
  for (var i = 0; i < collection.length; i++) {
      for (var j = 0; j < collection[i].length; j++) {
        collection_a.push(collection[i][j]);
      }
  }
  for (let i = 0; i < collection_a.length; i++) {
    if(collection_b.indexOf(collection_a[i])==-1)
    {
      collection_b.push(collection_a[i]);
    }
  }
  return collection_b;
}

module.exports = double_to_one;
