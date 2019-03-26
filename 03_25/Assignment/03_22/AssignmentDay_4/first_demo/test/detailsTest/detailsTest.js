//const studentDetails = require('C:/node/node/some/code/first_demo/src/details/studentDetails.js');
const studentDetails = require('../../src/details/studentDetails.js');

const assert = require('assert');
var details = studentDetails('harish',101,8008893955,'Hyderabad','19970308');
describe('checking the details of a student', function(){
	it('checking name of the student success', function(){
		
		assert.equal(details.name, 'harish');
	});	
	
	it('checking name of the student failure', function(){
		let details = studentDetails(null,101,8008893955,'Hyderabad','19970308');
		assert.equal(details.name, 'invalid');
		
	});
	
	it('checking address of the student', function(){
		
		assert.equal(details.address, 'Hyderabad');
		
	});
	it('checking name of the student failure', function(){
		var details = studentDetails('harish',101,8008893955,' ','19970308');
		assert.equal(details.address, 'invalid');
		
	});
	it('checking id of the student', function(){
		
		assert.equal(details.id, 101);
		
	});
	
	it('checking id of the student', function(){
		let details = studentDetails('harish',null,8008893955,'Hyderabad','19970308');
		assert.equal(details.id, 'invalid');
		
	});
	
	it('checking mobile number of the student', function(){
		
		assert.equal(details.mobileNumber, 8008893955);
		
	});
	
	it('checking mobileNumber of the student', function(){
		let details = studentDetails('harish',101,800889391212,'Hyderabad','19970308');
		assert.equal(details.mobileNumber, 'invalid');
		
	});

	it('checking date of birth  of the student', function(){
		let details = studentDetails('harish',101,8008893912,'Hyderabad','19970308');
		assert.equal(details.DOB, '19970308');
		
	});

	it('checking date of birth  of the student', function(done){
		let details = studentDetails('harish',101,8008893912,'Hyderabad',' ');
		assert.equal(details.DOB, 'invalid');
		done();
	});
});