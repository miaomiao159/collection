function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
   var collection_c=[];
  // for (let i = 0; i <collection_a.length ; i++) {
  //   for (let j = 0; j <collection_b.length ; j++) {
  //     if(collection_a[i]==collection_b[j])
  //     {
  //       collection_c.push(collection_a[i]);
  //     }
  //   }
  // }
  // return collection_c;

 collection_a.map(function (a) {
    if(collection_b.indexOf(a)!=-1 )
    {
      collection_c.push(a);
    }
  });
  return collection_c;
}

module.exports = collect_same_elements;
