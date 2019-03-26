var fs = require('fs');
var data = fs.readFileSync("C:/node/node/03_19/AssignmentDay_2/hello.txt");
console.log(data.toString());

fs.writeFileSync("C:/node/node/03_19/AssignmentDay_2/hello.txt", "when we will get a project");
console.log("Data appended successfully");



console.log("Done with file operations");