var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser')
var app = express();

const port = 3000;
app.get("/orders", (req,res,next)=>{
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.listen(port, ()=>{
    console.log("Order Service Running on port 3000")
});