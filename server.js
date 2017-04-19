// Finally, in the server.js file use the functions from Module 3
// to produce the following output in the console:
//
// Account balance:
// $156,301


var http = require('http'); // get a module
var randNum = require('./rand');//exported a function
var convertNum1 = require('./convert');//exported an object
var finalOutput = require('./output');//exported an object

http.createServer(function (req, res){
  // console.log(data());
  res.writeHead(200);//head
  //status code 200 == okay
  // var num = randNum.generate(100, 1000000); //remove this
  // res.write('THis is the random number: ' + num);//body //remove this
  // res.write("Account Balence: \n " + finalOutput);//body

  res.write(finalOutput.functionTwo());
  // console.log(randNum.generate(100,1000000));
  // console.log( finalOutput.functionOne(randNum.generate(100,1000000)));

  res.write(' ' + finalOutput.functionOne(randNum.generate(100,1000000)));
  // res.write(finalOutput.functionTwo());

  // res.write(output.sendTitle(data()));//body

  res.end();//end writing response
}).listen(3000);
