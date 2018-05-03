'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var collection_c=[];

  //求交集
  for (let i = 0; i <collection_a.length ; i++) {
    for (let j = 0; j < collection_b.length; j++) {
      if(collection_a[i]==collection_b[j])
      {
        collection_c.push(collection_a[i]);
      }
    }
  }
  console.log(collection_c);
  //求并集
  for (let i = 0; i <collection_b.length ; i++) {
    var temp = true;
    for (let j = 0; j < collection_a.length; j++) {
      if(collection_b[i]==collection_a[j])
      {
        temp=false;
        break;
      }
    }
    if(temp)
    {
      collection_a.push(collection_b[i]);
    }

  }
  console.log(collection_a);
  //求差集
  for (let i = 0; i <collection_c.length ; i++) {
    // collection_a.splice(collection_a.indexOf(collection_c[i]),1);
    for (let j = 0; j <collection_a.length ; j++) {
      if(collection_c[i]==collection_a[j])
      {
        collection_a.splice(j,1);
        break;
      }
    }
  }
  return collection_a;
}

module.exports = choose_no_common_elements;
