var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbo;
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    dbo = db.db("sampledb");
    console.log('dbo=', dbo);
    dbo.createCollection("customers", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");

        db.sampledb.save(studentObj);
        db.close();

    });
});
module.exports = save;