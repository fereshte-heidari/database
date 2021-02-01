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
  name:{
    type: String,
    required: true
  },
  rating:{
    type: Number,
    min: 1,
    max:10
  },
  review: String
});
const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
  rating: 5,
  review: "Peaches are great!"
});
// fruit.save()
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});
const People = mongoose.model("People", personSchema);
const pineapple= new Fruit({
  name:"pineapple",
  rating:9,
  review:"Greatttty!"
})
// pineapple.save();

// const people= new People({
//   name:"Amy",
//   age:12,
//   favoriteFruit: pineapple
// });

const cucumber= new Fruit({name:"cucumber", rating:8,review:"nice"});

// cucumber.save();


const people = new People({
  name: "John",
  age: 37

});

people.save();
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
Fruit.updateOne({_id:"60179bc14db94435a8e6db89"},{name:"Peach"},function(err){
  if(err){
    console.log("Error")
  }else{
    console.log("the update was succeful");
  }
  Fruit.deleteOne({_id:"60179bc14db94435a8e6db89"},function(err){
    if(err){
      console.log("error");
    }else{
      console.log("Deleted the requested document!")
    }
  })
})
Fruit.find(function(err, fruits) {
  if (err) {
    console.log("error!");
  } else {
    mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    })
  }

});

// People.deleteMany({name:"John"},function(err){
//   if(err){
//     console.log("error")
//   }
// })

People.updateOne({name:"John"},{favoriteFruit:cucumber},function(err){

});
