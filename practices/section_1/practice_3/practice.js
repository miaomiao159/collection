function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var collection_c=[];
  for (let i = 0; i <collection_a.length ; i++) {
    for (let j = 0; j <object_b.value.length ; j++) {
        if(collection_a[i]==object_b.value[j])
        {
          collection_c.push(collection_a[i]);
        }
      }
    }
  return collection_c;
}

module.exports = collect_same_elements;
