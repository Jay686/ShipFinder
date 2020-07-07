'use strict';

module.exports = {
    createDatabsase : createDatabase,
    createCollection : createCollection,
    put : put,
    get : get,
    deleteDoc : deleteDoc,
    update : update
};

//Creeate a database
function createDatabase(dbName) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017";

    MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
        if(err) throw err;
        var dbo = db.db(dbName);
        console.log(dbName + " Database created!");
        db.close();
    });
}

//Creaate a collection
function createCollection(dbName, collectionName) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
        if(err) throw err;
        var dbo = db.db(dbName);
        dbo.createCollection(collectionName, function(err, res) {
            if(err) throw err;
            console.log(collectionName + " collection created!");
            db.close();
        });
    });
}

//Put a document to the collection
function put(dbName, collectionName, myobj) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
        if(err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(collectionName).insertOne(myobj, function(err, res) {
            if(err) throw err;
            console.log(res.insertedCount + " document inserted");
            db.close();
        });
    });
}

//Retrieval of a document from the collection by user name or user ID
async function get(dbName, collectionName, str) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    let user;
    let promise = new Promise((resolve,reject)=> {
        MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
            if(err) reject (err) ;
            var dbo = db.db(dbName);
            dbo.collection(collectionName).findOne({$or:[{_id: str}, {name: str}]}, function(err, result) {
                if(err) reject(err);
                //console.log(result);
                //console.log('1111111111');
                user = result;
                db.close();
                resolve(user);
            });
        });
    });
    user = await promise;
    return user;
}

//Removal of a document from the collection by user name or user ID
function deleteDoc(dbName, collectionName, str) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
        if(err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(collectionName).deleteOne({$or:[{_id: str}, {name: str}]}, function(err, obj) {
            if(err) throw err;
            console.log(obj.result.n + " document deleted");
            db.close();
        });
    });
}

//Update on a document in the collection by user ID
function update(dbName, collectionName, id, json) {
    var MongoCLient = require('mongodb').MongoClient;
    var url = "mongodb://127.0.0.1:27017";

    var myquery = { id: id };
    var newvalues = { $set: json };

    MongoCLient.connect(url, {useUnifiedTopology: true}, function(err, db) {
        if(err) throw err;
        var dbo = db.db(dbName);

        dbo.collection(collectionName).updateOne(myquery, newvalues, function(err, res) {
            if(err) throw err;
            console.log(res.result.nModified + " document updated");
            db.close();
        });
    });
}