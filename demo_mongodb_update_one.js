var MongoCLient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";

MongoCLient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    //var myquery = { product_id: 154 };
    //var newvalues = { $set: { product_id: 157 } };
    var myquery = { address: "Canyon 123" };
    //var newvalues = { $set: { address: "Canyon 123" } };
    var newvalues = { $set: {name: "L"} };
    dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
        if(err) throw err;
        console.log(res.result.nModified + " document updated");
        db.close();
    });
});