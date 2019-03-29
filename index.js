const express = require('express');
const app = express();
const student = require('C:/node/Node-js-master/Node-js-master/node usecase/src/details/studentDetails.js');
const DOB = require('C:/node/Node-js-master/Node-js-master/node usecase/src/compute/ageCalculation.js');
const path = require('path');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbo;
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    dbo = db.db("mydb");
    /*var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });*/
});


app.get('/', (req, res) => {
    res.sendFile('home.html',
        {
            root: path.join(__dirname, './public')
        });
});

app.get('/details', (req, res) => {
    res.sendFile('details.html',
        {
            root: path.join(__dirname, './public')
        });
});
app.post('/details', (req, res) => {
    let a = req.body;
    console.log(a);
    let obj = student(a);
    let dateOfBirth = DOB(obj.DOB);
    obj.age = dateOfBirth;
    dbo.collection("studentDetails").insertOne(obj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
       
    });
    res.redirect('/')
});

app.get('/search', (req, res) => {
    res.sendFile('search.html',
        {
            root: path.join(__dirname, './public')
        });
});


app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get('/searchstudent', (req, res) => {
    console.log(req.query);
    let name = req.query.name;
    dbo.collection("studentDetails").findOne({name},function (err, result) {
        if (err) throw err;
        res.render("display", {result: result});
        console.log(result);

        

    });
});


app.listen(4444);
