'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var collectionb=[];
  for (let i = 0; i <collection.length ; i++) {
    if(collection[i]%2==0){
      collectionb.push(collection[i]);
    }
  }
  return collectionb;
}

module.exports = collect_all_even;
