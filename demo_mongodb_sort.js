var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err,db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    var mysort = { name: 1 };
    //var mysort = { name: -1 };
    dbo.collection("products").find().sort(mysort).toArray(function(err, result) {
        if(err) throw err;
        console.log(result);
        db.close();
    });
});