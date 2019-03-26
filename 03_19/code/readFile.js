var fs = require('fs');
fs.readFile("C:/node/node/03_19/code/intro.txt", function(err,data){
if(err) throw err;
console.log(data.toString());
});