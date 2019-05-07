var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

//Campground.create(
//  { 
//    name: "Granite Hill",
//    image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
//    description: "This is a huge granite hill, no bathrooms, no water. Beautiful nature."
//    
//  }, function(err, campground) {
//    if(err){
//      console.log(err)
//    }else{
//      console.log("NEWLY CREATED CAMPGROUND");
//      console.log(campground);
//   }
//  });


//adding landing page
app.get("/", function(req, res){
  res.render("landing");
});

//INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
  //Get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds){
    if(err){
      console.log(err);
    }else{
        //definiowanie pustego arraya z nzwami yelpgroundów i obiektami w srodku arraya
res.render("index", {campgrounds: allCampgrounds});
    }
  });
});

//create new campground
app.post("/campgrounds", function(req, res){
  //get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {name:name, image:image, description: desc}
  //Create new campground and save to DB
  Campground.create(newCampground, function(err, newlyCreated){
    if(err) {
      console.log(err)
    }else{
      //redirect back to campgrounds page
       res.redirect("/campgrounds");
    }
  });
});

//show the form, which send the data for the post.campground
app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

// !!! WAŻNA KOLEJNOSC LINIJKI WYZEJ I NIZEJ!!!
app.get("/campgrounds/:id", function(req, res){
  //find the campground with provided ID
  Campground.findById(req.params.id, function(err, foundCampground){
    if(err) {
      console.log(err);
    } else {
        //render show template with that campground
          res.render("show", {campground: foundCampground});
    }
  });
});

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("YelpCampServer has started!");
});