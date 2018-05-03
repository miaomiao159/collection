'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var str = '0abcdefghijklmnopqrstuvwxyz';
  var data=[];
  for (let i = 0; i < str.length; i++) {
    data.push(str[i]);
  }
  for (let i = 1; i < str.length; i++) {
    for (let j = 1; j <str.length ; j++) {
      data.push(str[i]+str[j]);
    }
  }

  if (number_a < number_b) {
    var collection_a = [];
    for (let i = number_a; i <= number_b; i++) {
      collection_a.push(data[i]);
    }
    return collection_a;
  }
  else if (number_a > number_b) {
    var collection_b = [];
    for (let j = number_a; j >= number_b; j--) {
      collection_b.push(data[j]);
    }
    return collection_b;
  }
  else {
    return [data[number_a]];
  }
}

module.exports = get_letter_interval_2;

