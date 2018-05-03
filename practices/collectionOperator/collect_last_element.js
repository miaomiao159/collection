'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  for (let i = 0; i <collection.length ; i++) {
    return collection[collection.length-1];
  }
  //或者return collection.pop();

}

module.exports = collect_last_element;
