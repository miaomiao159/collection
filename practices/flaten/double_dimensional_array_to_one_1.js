'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var collection_a=[];

  for (var i = 0; i < collection.length; i++) {
    if(collection[i] instanceof Array)
    {
      for (var j = 0; j < collection[i].length; j++) {
        collection_a.push(collection[i][j]);
      }
    }
   else
    {
      collection_a.push(collection[i]);
    }
  }
  return collection_a;
}

module.exports = double_to_one;
