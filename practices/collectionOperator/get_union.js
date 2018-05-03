'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var collection_c = [];
  for (var i = 0; i < collection_a.length; i++) {
    collection_c.push(collection_a[i]);
  }

  for (var i = 0; i < collection_b.length; i++){
    var dup = true;
    for (var j = 0; j < collection_a.length; j++){
      if (collection_b[i] == collection_a[j]){
        dup = false;
        break;
      }
    }
    if (dup){
      collection_c.push(collection_b[i]);
    }
  }
  return collection_c;
}

module.exports = get_union;

