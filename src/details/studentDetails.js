/*
this fuction provides the details of a student
*/
function studentDetails(name,id,mobileNumber,address,DOB){

/*const name = 'shiva';
const id = 101;
const mobileNumber = 8008893955;
const address = 'hyderabad'; 
const DOB = '19970608';*/
try{
if(name == null || !isNaN(name)){
	let obj = {};
	obj.name = 'invalid';
	
	 throw obj;
}

}
catch(er)
{
	console.log(er);
	return er;
}

try{
	if(address == null || !isNaN(address)){
		let obj = {};
		obj.address = 'invalid';
		
		 throw obj;
	}
	
	}
	catch(er)
	{
		console.log(er);
		return er;
	}

try{
	if(isNaN(id) || id == null) {
	let obj = {};
	obj.id = 'invalid';
	
	 throw obj;
	}
}
catch(er)
{
	console.log(er);
	return er;
}

try{
	if(mobileNumber == null || isNaN(mobileNumber) || mobileNumber.toString().length!=10){
		let obj = {};
	obj.mobileNumber = 'invalid';
	
	 throw obj;
	}
}
catch(er){
	return er;
}

try{
	if(DOB == null || isNaN(DOB) || DOB.length!=8){
		let obj = {};
	obj.DOB = 'invalid';
	
	 throw obj;
	}
}
catch(er){
	return er;
}

var obj = {};
obj.name = name;
obj.id = id;
obj.mobileNumber = mobileNumber;
obj.address = address;
obj.DOB = DOB;
return obj;
}

module.exports = studentDetails;