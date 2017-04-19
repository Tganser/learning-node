
# Module Madness

In this challenge, you will need to spin up a new project (much like we did in lecture). You will create three modules as specified below, then create a server.js that will use these modules!

## Module One - Generate a Random Number
The first module will export a function that returns a random number after taking in a min and max value as arguments (hint: you can use random number functions from previous assignments). When you call this module, use 100 as your min, and 1000000 as your max.

## Module Two - Convert a Number to a USD Value
The second module should accept a number and convert it to a USD value. You can find good implementations of this online.

## Module Three - Output an Account Balance
The third module should require the other two modules (i.e. Module One and Module Two). It should also have two exported functions:

  - The first function should call Module 2, passing the result of Module 1 as an argument.
  - The second function should return the text “Account balance: \n”.
  server.js

Finally, in the server.js file use the functions from Module 3 to produce the following output in the console:

Account balance:```
$156,300```
