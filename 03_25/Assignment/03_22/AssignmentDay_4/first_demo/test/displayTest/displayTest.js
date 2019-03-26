const readFile = require('../../src/display/displayStudentDetails.js');

var assert = require('assert');
var details = {"name":"harish","id":101,"mobileNumber":8008893955,"address":"Hyderabad","DOB":"19970308","age":22};

describe('reading data from file',function(){
    it('file is in read mode', function(){
        var result =  readFile();
        console.log("in test", result);
        assert(result,details);
    });
});