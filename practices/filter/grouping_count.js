'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var m={};
  for (let i = 0; i <collection.length ; i++) {
    if(collection[i] in m)
    {
      m[collection[i]]=m[collection[i]]+1;
    }
    else
    {
      m[collection[i]]=1;
    }
  }
  return  m;
}

module.exports = grouping_count;
