var MongodbClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongodbClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
        { name: 'John', address: 'Highway 71'},
        { name: 'Peter', adress: 'Lowstreet 4'},
        { name: 'Amy', adress: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'},
        { name: 'Michael', adress: 'Valley 345'},
        { name: 'Sandy', adress: 'Ocean blvd 2'},
        { name: 'Betty', address: 'Green Grass 1'},
        { name: 'Richard', adress: 'Sky st 331'},
        { name: 'Susan', adress: 'One Way 98'},
        { name: 'Vicky', address: 'Yellow Garden 2'},
        { name: 'Ben', adress: 'Park Lane 38'},
        { name: 'William', adress: 'Central st 954'},
        { name: 'Chuck', adress: 'Main Road 989'},
        { name: 'Viola', adress: 'Sideway 1633'}
    ];
    dbo.collection("customers").insertMany(myobj, function(err, res) {
        if(err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});