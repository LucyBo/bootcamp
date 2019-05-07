var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   //tu następuje associations comments + campgrounds
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

module.exports = mongoose.model("Campground", campgroundSchema);