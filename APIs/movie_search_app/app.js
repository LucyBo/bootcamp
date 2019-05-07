var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("search");
});

app.get("/results", function(req, res){
   var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb" + query;
  request(url, function (error, response, body) {
    if (!error && response.statusCode ==200) {
      var data = JSON.parse(body)
      res.render("results", {data: data});
    }
  });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie App has started!!!");
});

//const request = require('request');
//request('http://www.google.com', function (error, response, body) {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
//});