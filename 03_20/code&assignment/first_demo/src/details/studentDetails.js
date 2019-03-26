/*
this fuction provides the details of a student
*/
function studentDetails(name,id,mobileNumber,address,DOB){

/*const name = 'shiva';
const id = 101;
const mobileNumber = 8008893955;
const address = 'hyderabad'; 
const DOB = '19970608';*/

var obj = {};
obj.name = name;
obj.id = id;
obj.mobileNumber = mobileNumber;
obj.address = address;
obj.DOB = DOB;
return obj;
}

module.exports = studentDetails;