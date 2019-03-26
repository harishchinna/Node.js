/*
this function taking the details from text file and it is performing a read operation .....
*/
function displayDetails(){

const fs = require('fs');

fs.readFile('C:/node/node/some/code/first_demo/src/dataWrite/details.txt', function(err,data){
	if(err) throw err;
	console.log(data.toString());
	
});
}

module.exports = displayDetails;