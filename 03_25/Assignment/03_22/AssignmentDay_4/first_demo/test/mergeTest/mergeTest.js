const studentDetails = require('../../src/details/studentDetails.js');
const calculatedAge = require('../../src/compute/ageCalculation.js');
const mergedData = require('../../src/mergeData/mergeData.js');

var assert = require('assert');
var details = studentDetails('harish',101,8008893955,'Hyderabad','19970308');
var age = calculatedAge('19970608');
let obj = details;
obj.age = age;
describe('merging the data', function(){
it('concatinating data from details and compute files', function(){
    let mergeData = mergedData(details,age);
    assert.equal(mergeData, obj);
});

});
