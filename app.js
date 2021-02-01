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
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});
const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "pretty solid!"
});
// fruit.save()
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
})
const People = mongoose.model("People", personSchema);
const people = new People({
  name: "John",
  age: 37
});
// people.save();
const kiwi = new Fruit({
  name: "kiwi",
  rating: 7,
  review: "excellent!"
})
const banana = new Fruit({
  name: "banana",
  rating: 5,
  review: "decent"
})
// Fruit.insertMany([kiwi,banana],function(err){
//   if(err){
//     console.log(err);
//   } else{
//     console.log("Successfully saved all the fruits")
//   }
// });

Fruit.find(function(err, fruits) {
  if (err) {
    console.log("error!");
  } else {
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    })
  }

});
