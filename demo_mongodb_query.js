var MongodbClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongodbClient.connect(url, {useUnifiedTopology: true}, function(err,db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    //var query = { address: "Park Lane 38" };
    var query = { address: /^S/ };
    dbo.collection("customers").find(query).toArray(function(err, result) {
        if(err) throw err;
        console.log(result);
        db.close();
    });
});