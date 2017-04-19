// The third module should require the other two modules
// (i.e. Module One and Module Two). It should also have two exported functions:
//
// The first function should call Module 2, passing the result of Module 1 as an argument.
// The second function should return the text “Account balance: \n”.

var http = require('http'); // get a module
var randNum2 = require('./rand');//exported a function

var convert2 = require('./convert');//exported an object


exports.functionOne = function (num) {
  // console.log("this is function1 num : ", num);
  return convert2.convertNum(num);
};

exports.functionTwo = function () {
  return "Account Balance: \n ";
};
