var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding an ew cat to the database
//var george = new Cat({
//  name: "Armand",
//  age: 7, 
//  temperament:"Evil"
//});

//george.save(function(err, cat){
//  if(err) {
//    console.log("something went wrong!")
//  } else { 
//   console.log("We just saved a cat to the DB")
//    console.log(cat);
//  }
//});

Cat.create({
  cat: "Snow White",
  age: 15,
  temperament: "Bland"
}, function (err, cat){
  if(err){
    console.log(err);
  }else {
    console.log(cat);
  }
});

//retrive all cats from datbase and console.log
Cat.find({}, function(err, cats){
  if(err) {
    console.log("Oh no, it's error!");
    console.log(err);
  } else { 
    console.log("Ale the cats...");
    console.log(cats);
  }
});