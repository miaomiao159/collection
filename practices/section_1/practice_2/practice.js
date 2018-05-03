function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var collection_c=[];
  for (let i = 0; i <collection_a.length ; i++) {
    for (let j = 0; j <collection_b.length ; j++) {
      for (let k = 0; k <collection_b[j].length ; k++) {
        if(collection_a[i]==collection_b[j][k])
        {
          collection_c.push(collection_a[i]);
        }
      }
    }
  }
  return collection_c;
}

module.exports = collect_same_elements;
