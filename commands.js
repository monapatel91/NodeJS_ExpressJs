// https://egghead.io/lessons/nodejs-first-api-with-node-js-express-and-mongodb
// http://docs.mongodb.org/manual/tutorial/getting-started-with-the-mongo-shell/
// https://docs.mongodb.org/manual/reference/mongo-shell/

// Insert some data.
mongoimport --db fdetail --collection flight --jsonArray flight.json

// Connect to mongo.
mongo

// Show DBs
show dbs

// Connect to db.
use fdetail

// Check currently selected db
db

// Show all collections
show collections

// Get count.
db.flight.count()

// Query all
db.flight.find()

// Query all (formatted)
db.flight.find().pretty()

// Find one.
db.flight.findOne()

// Query.
db.flight.find({Arrivaltime: '8pm'}).sort({name: 1}).pretty() // -1 for desc.

// Query with and operator.
db.flight.find({
  Arrivaltime: '8pm',
  $and: [{"name": /.*And.*/}]
}).pretty() // -1 for desc.

// Insert.
db.flight.insert({
  "name": "Qutar",
  "Arrivaltime": "8pm",
  
})

// Update.
db.flight.update(                  // collection
  {Arrivaltime: '8pm'},           // update criteria
  {$set: {Arrivaltime: '9pm'}},// update action
  {multi: true})                   // update option

// See last insert.
db.flight.find().sort({_id: -1}).limit(1)

// Remove all.
db.flight.remove({})

// Get count.
db.flight.count()

// Exit mongo shell.
quit()

// Drop database.
db.dropDatabase()

// Show DBs
show dbs

// Insert data again.
mongoimport --db fdetail --collection flight --jsonArray flight.json

// Connect to mongo.
mongo

// Show DBs
show dbs

// Connect to db.
use fdetail


//load("scripts/myjstest.js")

// Exit.
//quit()


// Sort.
db.restaurants.find().sort({"borough": 1, "address.zipcode": 1})