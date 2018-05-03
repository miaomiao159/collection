function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  // var  collection_c=[];
  // for (let i = 0; i <collection_a.length ; i++) {
  //   for (let k = 0; k <object_b.value.length ; k++) {
  //     if(collection_a[i]['key'] == object_b.value[k])
  //     {
  //       collection_c.push(collection_a[i]['key']);
  //     }
  //   }
  // }
  // return collection_c;
  return collection_a.map((function (a) {
    if (object_b.value.indexOf(a.key) != -1) {
      a.count--;
    }
    return a;
  }));
}

module.exports = create_updated_collection;
