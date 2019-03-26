const studentDetails = require('C:/node/node-master/node-master/03_22/AssignmentDay_4/first_demo/src/details/studentDetails.js');
const calculatedAge = require('C:/node/node-master/node-master/03_22/AssignmentDay_4/first_demo/src/compute/ageCalculation.js');
const mergedData = require('C:/node/node-master/node-master/03_22/AssignmentDay_4/first_demo/src/mergeData/mergeData.js');
const writeFile = require('C:/node/node-master/node-master/03_22/AssignmentDay_4/first_demo/src/dataWrite/fileOperation.js');
const readFile = require('C:/node/node-master/node-master/03_22/AssignmentDay_4/first_demo/src/display/displayStudentDetails.js');
const http = require('http');
const queryString = require('querystring');
var server = http.createServer(function(req, res){
    if (req.url == '/') {
        // redirect to page-b.html with 301 (Moved Permanently) HTTP code in the response
        console.log('inside /');
        console.log('inside /',"http://" + req.headers['host'] +'/details.html');
        res.writeHead(301, { "Location": "http://" + req.headers['host'] +'/details.html' });
       // res.writeHead(301, { "Location": "http://" + req.headers['host'] +'/details.html' });
    }
    else if(req.url == '/details')
    {
        console.log('inside /details');

    let q = queryString.parse(req.url, true);
    var details = studentDetails(q.name,q.id,q.mobileNumber,q.Address,q.DOB);
    res.write(JSON.stringify(details));
    console.log(details);
    console.log('data added Successfully');
    res.writeHead(200);
    res.end('OK');
    }
    else{
        console.log('inside /err');
        res.writeHead(404);
        res.end('not a valid url');
    }
});
server.listen(1234);

/*var age = calculatedAge(details.DOB);
console.log('Student age according to date of birth is:'+age);

var studentObj =  mergedData(details,age);
console.log('Merging Success');

writeFile(studentObj);

readFile();*/



