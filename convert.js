// The second module should accept a number and convert it to a USD value.
// You can find good implementations of this online.

var newnum;

var convert = {
  convertNum: function (num){
    //send our data
    //format our movie data into a string
    var newnum = num.toFixed(2).replace(/./g, function(c, i, a) {
      return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
      });
    newnum = "$ "+newnum;
    return newnum;
  }
};

module.exports = convert;
