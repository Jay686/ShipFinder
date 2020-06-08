var MongodbClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongodbClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find({}, { projection: { _id: 0}}).toArray(function(err, result) {
    //dbo.collection("customers").find({}, { projection: { _id: 0, name: 1}}).toArray(function(err, result) {
    //dbo.collection("customers").find({}, { projection: { address: 0}}).toArray(function(err, result) {
    //dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1}}).toArray(function(err, result) {
        if(err) throw err;
        //console.log(result);
        console.log(result[2].address);
        db.close();
    });
});