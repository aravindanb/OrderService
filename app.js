const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();
const port = 3000;

//user bodyParser to process URL encoded forms
app.use(bodyParser.urlencoded({ extended: true}));

MongoClient.connect(db.url, (err, database)=>{
    if(err){
        return console.log(err);
    }
    //import the routes in the app.js
    require('./app/routes')(app,database);
    /**
    * Server Listening at 3000
    */
    app.listen(port, ()=>{
        console.log("Order Service Running on port 3000")
    });
})




