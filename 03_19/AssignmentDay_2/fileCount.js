var fs = require('fs');
fs.open('C:/node/node/03_19/AssignmentDay_2/hello.txt', 'r', function (err, fd) {
    
                            if (err) {
                            return console.error(err);
    }

fs.readFile("C:/node/node/03_19/AssignmentDay_2/hello.txt",function(err,data){
if(err) throw err;
else
var count = data.toString();
var result = count.split(" ").length;
console.log(result);
});
});