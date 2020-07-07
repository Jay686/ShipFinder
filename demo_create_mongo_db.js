var MongoClient = require('mongodb').MongoClient;
/*var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if(err) throw err;
    console.log("Database created!");
    db.close();
});*/

const url = "mongodb://localhost:27017";
const dbname = "bd1";
const client = new MongoClient(url, {useUnifiedTopology: true});
client.connect(function(err) {
    if(err) throw err;
    console.log(dbname + " created");
    const db = client.db(dbname);
    client.close();
});