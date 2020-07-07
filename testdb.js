'use strict';

const db = require('./db');

const db1 = 'db1';
const user = 'user';
//db.createDatabsase(dbName);
//db.createCollection(dbName, colName);
var user1 = { _id: 100, name: 'John', e_mail: 'john@xxx.com', address: 'Highway 91' };
db.put(db1, user, user1);
db.deleteDoc(db1, user, 100);
var user2 = { _id: 101, name: 'Amy', e_mail: 'amy@xxx.com', address: 'Apple st 332' };
//db.put(dbName, colName, user2);
var userName;
db.get(db1, user, 101).then((res) => {
	userName = res.name;
}).then(
	db.update(db1, user, userName, {name: 'Mary'})
).then(
	db.get(db1, user, 101).then((res) => {
	console.log(res);
}));

/*// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   setTimeout(() => {
		eventEmitter.emit('data_received');
   }, 5000)
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});

// Fire the connection event 
setTimeout(() => {
	eventEmitter.emit('connection');
}, 5000)
console.log("Program Ended.");*/
