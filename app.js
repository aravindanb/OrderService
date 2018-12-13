var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
const app = express();
const port = 3000;

//user bodyParser to process URL encoded forms
app.use(bodyParser.urlencoded({ extended: true}));

//import the routes in the app.js
require('./app/routes')(app,{});


/**
 * Server Listening at 3000
 */
app.listen(port, ()=>{
    console.log("Order Service Running on port 3000")
});