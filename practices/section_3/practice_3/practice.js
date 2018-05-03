function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_b=[];
  var m={};
  for (let i = 0; i <collection_a.length ; i++) {
    if (collection_a[i] in m) {
      m[collection_a[i]]=m[collection_a[i]] + 1;
    }
    else {
      m[collection_a[i]]=1;
    }
  }
  for (var key in m) {
    var temp={};
    temp.key=key;
    temp.count=m[key];
    collection_b.push(temp);
  }
  return collection_b.map((function (a) {
    if (object_b.value.indexOf(a.key) != -1) {
      a.count-=Math.floor(a.count/3);
    }
    return a;
  }));
}

module.exports = create_updated_collection;
