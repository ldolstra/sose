//jshint esversion:6
require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();
const port = 3000;


app.use(express.static("public"));
app.set('view engine', "ejs");


app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/lookbook", function(req, res) {
  res.render("lookbook");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});


app.listen(port, function() {
  console.log("Server started on port " + port);
});
