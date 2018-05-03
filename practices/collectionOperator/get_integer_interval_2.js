'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  if(number_a<number_b) {
    var collection_a = [];
    for (let i = number_a; i <= number_b; i++) {
      if (i % 2 == 0) {
        collection_a.push(i);
      }

    } return collection_a;
  }
   else if(number_a>number_b) {
      var collection_b = [];
      for (let j = number_a; j >= number_b; j--) {
        if (j % 2 == 0) {
          collection_b.push(j);
        }

      } return collection_b;
    }
        else(number_a==number_b)
        {
          if(number_a% 2 ==0)
          {
            return [number_a];
          }
          else
          {
            return [];
          }
        }
}

module.exports = get_integer_interval_2;
