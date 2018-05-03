'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var collection_a=[];//一个新的临时数组
  //遍历当前数组
  for (let i = 0; i <collection.length ; i++) {
//如果当前数组的第i已经保存进了临时数组，那么跳过，
//否则把当前项push到临时数组里面
   if (collection_a.indexOf(collection[i]) == -1)
   {
     collection_a.push(collection[i]);
   }
}
return collection_a;
}

module.exports = choose_no_repeat_number;
