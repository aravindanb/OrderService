var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
const app = express();
const port = 3000;

//import the routes in the app.js
require('./app/routes')(app,{});

/**
 * Endpoints for the Order Service
 */

// GET /orders
app.get("/orders", (req,res,next)=>{
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

/**
 * Server Listening at 3000
 */
app.listen(port, ()=>{
    console.log("Order Service Running on port 3000")
});