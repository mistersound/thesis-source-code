/******


Toy example using generated parser
@author: Junior DONGO


***************/

/*
var readline = require('readline');
var parser =  require("./parserNew");

console.log("Hello, welcome to the parser");





// Gives the posibility to type the sentence to parse
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Enter the sentence to parse: ", function(word) {

  //console.log(word);
    try {
      var command = parser.parse(word);
	console.log(command);
    }
    catch (e) {
      console.log("incorrect input ");
}
 
  rl.close();
});

*/
var exec = require('child_process').exec, child;
	
	
	var cmd = "/home/lacl/Documents/coq_learning/md/_build/try.native /upec/storage/1/1/lacl/data/0";

child = exec(cmd,
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });



