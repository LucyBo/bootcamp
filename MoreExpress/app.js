var express = require("express");
var app = express();

app.use(express.static("public"));
app.get("/", function(req, res){
  res.render("home.ejs");
});

app.get("/fallinlove/:thing", function(req, res){
  var thing = req.params.thing;
   res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Colt"}
    ];
    
    res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Server is listening")
});