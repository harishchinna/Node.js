/*
this function writing the student details into a text file ...
*/

var fs = require('fs');
function writeFile(object){

let student = object;

 
fs.writeFileSync('C:/node/node/some/code/first_demo/src/dataWrite/details.txt', JSON.stringify(student)); 
//console.log(student);
console.log('updated successfully!');
}

module.exports = writeFile;

