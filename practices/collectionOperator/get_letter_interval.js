'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var str = '0abcdefghijklmnopqrstuvwxyz';
  if (number_a < number_b) {
    var collection_a = [];
    for (let i = number_a; i <= number_b; i++) {
      collection_a.push(str[i]);
    }
    return collection_a;
  }
  else if (number_a > number_b) {
    var collection_b = [];
    for (let j = number_a; j >= number_b; j--) {
      collection_b.push(str[j]);
    }
    return collection_b;
  }
  else {
    return [str[number_a]];
  }
}

module.exports = get_letter_interval;
