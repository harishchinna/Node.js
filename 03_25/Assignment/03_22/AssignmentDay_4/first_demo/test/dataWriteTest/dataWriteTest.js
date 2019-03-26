const writeFile = require('../../src/dataWrite/fileOperation.js');
const studentDetails = require('../../src/details/studentDetails.js');
const calculatedAge = require('../../src/compute/ageCalculation.js');


var assert = require('assert');
var details = studentDetails('harish',101,8008893955,'Hyderabad','19970308');
var age = calculatedAge('19970608');
var obj = details;
obj.age = age;

describe('Testing the file operations', function(){
it('checking the success of writing file operation', function(){
    
    let result = writeFile(obj);
    assert.equal(result, 'operation success');
});
it('checking the success of writing file operation', function(){
    
    let result = writeFile(null);
    assert.equal(result, 'NULL pointer Exception');

});

});