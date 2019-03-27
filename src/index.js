const studentDetails = require('C:/Users/jharish/Downloads/node/03_25/Assignment/03_22/AssignmentDay_4/first_demo/src/details/studentDetails.js');
const calculatedAge = require('C:/Users/jharish/Downloads/node/03_25/Assignment/03_22/AssignmentDay_4/first_demo/src/compute/ageCalculation.js');
const mergedData = require('C:/Users/jharish/Downloads/node/03_25/Assignment/03_22/AssignmentDay_4/first_demo/src/mergeData/mergeData.js');
const writeFile = require('C:/Users/jharish/Downloads/node/03_25/Assignment/03_22/AssignmentDay_4/first_demo/src/dataWrite/fileOperation.js');
const readFile = require('C:/Users/jharish/Downloads/node/03_25/Assignment/03_22/AssignmentDay_4/first_demo/src/display/displayStudentDetails.js');
const http = require('http');
const queryString = require('querystring');
const express = require('express')
const app = express()
const path = require('path')
const studentSave = require('C:/Users/jharish/Downloads/node/03_25/Assignment/03_22/AssignmentDay_4/first_demo/src/data/dboperations.js');


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));



   


      
    app.get('/', (req, res) => {
        res.sendFile('details.html', {
            root: path.join(__dirname,'./public')
        })
    })
   


    app.post('/details', (req, res) => {
        console.log('inside /details');

    //let q = queryString.parse(req.url, true);
    console.log('inside /url',req.body);
   // console.log(q.name);
   console.log(req.body.name);
    let b = req.body;
    var details = studentDetails(b.name,b.id,b.mobileNumber,b.Address,b.DOB);
    res.write(JSON.stringify(details));
    console.log(details);
    studentSave(details);
    console.log('data added Successfully');
    res.writeHead(200);
    res.end('OK');
    });
     app.listen(1234);
        
    


/*var age = calculatedAge(details.DOB);
console.log('Student age according to date of birth is:'+age);

var studentObj =  mergedData(details,age);
console.log('Merging Success');

writeFile(studentObj);

readFile();*/



