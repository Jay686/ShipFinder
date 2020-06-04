var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
        { _id: 150, name: 'Chocolate Heaven'},
        { _id: 151, name: 'Tasty Lemon'},
        { _id: 152, name: 'Vanilla Dream'}
    ];
    dbo.collection("products").insertMany(myobj, function(err,res) {
        if(err) throw err;
        console.log(res);
        db.close();
    });
});