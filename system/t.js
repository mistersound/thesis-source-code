/*const sh = require('shelljs');


if(sh.test('-e', 'test.tx'))
{
  console.log("toto");
}else{

  sh.touch('test.tx')	
}
*/
var fs = require('fs');

var heartbeatList = [];

heartbeatList.push("/tato \n");

heartbeatList.push("/tata \n");

var content = "";

 var length = heartbeatList.length;
    for(var i = 0; i < length; i++) {
	content = content + heartbeatList[i];

    }

fs.writeFile('mynewfile3.txt', content, function (err) {
  if (err) throw err;
  console.log('Replaced!');
});


