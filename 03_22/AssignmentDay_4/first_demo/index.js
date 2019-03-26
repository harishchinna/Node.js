const studentDetails = require('C:/node/node/some/code/first_demo/src/details/studentDetails.js');
const calculatedAge = require('C:/node/node/some/code/first_demo/src/compute/ageCalculation.js');
const mergedData = require('C:/node/node/some/code/first_demo/src/mergeData/mergeData.js');
const writeFile = require('C:/node/node/some/code/first_demo/src/dataWrite/fileOperation.js');
const readFile = require('C:/node/node/some/code/first_demo/src/display/displayStudentDetails.js');

var details = studentDetails('hari',101,8005001245,'Hyderabad','19970608');
console.log('data added Successfully');

var age = calculatedAge(details.DOB);
console.log('Student age according to date of birth is:'+age);

var studentObj =  mergedData(details,age);
console.log('Merging Success');

writeFile(studentObj);

readFile();



