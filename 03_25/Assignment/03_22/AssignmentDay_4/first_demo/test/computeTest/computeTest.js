const ageCalculation = require('../../src/compute/ageCalculation.js');

const assert = require('assert');

var age = ageCalculation('19970608');

describe('Test cases for calculating the age of a student', function(){
it('checking date of birth  of the student', function(){
    assert.equal(age, 22);
    
});

it('checking date of birth  of the student', function(){
   let age = ageCalculation(null);
    assert.equal(age, 'invalid');
    
});
it('checking date of birth  of the student', function(done){
    let age = ageCalculation(' ');
    assert.equal(age, 'invalid');
    done();
});
});