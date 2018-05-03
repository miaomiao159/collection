'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  if(number_a< number_b)
  {
    var collection_i=[];
    for(var i=number_a;i<=number_b;i++)
    {
       collection_i.push(i);
    }
    return collection_i;
  }
  else if(number_a> number_b)
  {
    var collection_j=[];
    for(var j=number_a;j>=number_b;j--)
    {
      collection_j.push(j);
    }
    return collection_j;
  }
  else {
    var collection_k=[];
    collection_k.push(number_a);
    return  collection_k;
  }
}


module.exports = get_integer_interval;

