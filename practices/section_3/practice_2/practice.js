function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  return collection_a.map((function (a) {
    if (object_b.value.indexOf(a.key) != -1) {
      a.count-=Math.floor(a.count/3);
    }
    return a;
  }));
}

module.exports = create_updated_collection;
