var fs = require('fs');

fs.open('C:/node/node/03_19/AssignmentDay_2/hello.txt', 'r', function (err, fd) {
    
                            if (err) {
                            return console.error(err);
    }

fs.readFile("C:/node/node/03_19/AssignmentDay_2/hello.txt",function(err,data){
if(err) throw err;
else
console.log(data.toString());


fs.writeFile("C:/node/node/03_19/AssignmentDay_2/hello.txt", "have to do aws certification", function(err){
if(err) throw err;
else
console.log("Data appended successfully");
});
});
}); 

console.log("Done with file operations");