// init
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// configuration
mongoose.connect("mongodb://nehes:ck8568@ds033459.mongolab.com:33459/nehesdb");

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type:'application/vnd.apijson' }));
app.use(methodOverride());

// listen as server
app.listen(8080);
console.log("App listening on port 8080");
