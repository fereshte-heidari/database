// const { MongoClient } = require("mongodb");
//
// // Replace the uri string with your MongoDB deployment's connection string.
// const uri =
//   "mongodb://127.0.0.1:27017?retryWrites=true&writeConcern=majority";
//
//
// const client = new MongoClient(uri,{ useUnifiedTopology: true });
//
// async function run() {
//   try {
//     await client.connect();
//
//     const database = client.db('sample_mflix');
//     const collection = database.collection('movies');
//
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await collection.findOne(query);
//
//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url,{ useUnifiedTopology: true } );

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});
