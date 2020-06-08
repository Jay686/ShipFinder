var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    /*dbo.createCollection("orders", function(err, res) {
        if(err) throw err;
        console.log("Orders collection created!");
    });
    dbo.createCollection("products", function(err, res) {
        if(err) throw err;
        console.log("Products collection created!");
    });
    var orderValues = [
        { _id: 1, product_id: 157, status: 1 }
    ];
    var productValues = [
        { _id: 157, name: 'Chocolate Heaven' },
        { _id: 158, name: 'Tasty Lemons' },
        { _id: 159, name: 'Vanilla Dreams' }
    ];
    dbo.collection("orders").insertMany(orderValues, function(err, res) {
        if(err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
    });
    dbo.collection("products").insertMany(productValues, function(err, res) {
        if(err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
    });*/
    dbo.collection('orders').aggregate([
        { $lookup:
            {
                from: 'products',
                localField: 'product_id',
                foreignField: '_id',
                as: 'orderdetails'
            }
        }
    ]).toArray(function(err, res) {
        if(err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});