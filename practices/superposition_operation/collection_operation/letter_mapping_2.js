'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var sum=0;
  var str='0abcdefghijklmnopqrstuvwxyz';
 //  var data='';
 //  for (let i = 0; i <collection.length ; i++) {
 //    sum+=collection[i];
 //  }
 // return str[Math.ceil(sum/collection.length)];
var sum= collection.reduce(function (a,b) {
  return a+b;
});
return  str[Math.ceil(sum/collection.length)];

}

module.exports = average_to_letter;

