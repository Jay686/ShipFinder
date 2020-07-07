var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").findOne({$or:[{address: 'Sideway 1633'},{name: 'John'}]}, function(err, result) {
        if(err) throw err;
        console.log(result);
        db.close();
    });
});