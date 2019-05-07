var express = require("express");
var app = express();

// "/" => "start page"
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!!"); 
});

app.get("/speak/:animal", function(req, res){
  var sounds = {
    pig: "oink",
    cow: "muuuu",
    dog: "Wof! Woof!",
    cat: "meow!",
  }
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];
  res.send("The " + animal + " says " + sound);
});



//hello
app.get("/repeat/:message/:times", function(req, res){
  
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    for (var i = 0; i<times; i++){
      result +=(" " + message);
    }
    res.send(result);
});



app.get("*", function(req, res){
  res.send("Sorry, page not found... What are you doing with your life?"); 
});

// Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});
