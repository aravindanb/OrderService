const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();
const chalk = require('chalk');
const port = 3000;

//user bodyParser to process URL encoded forms
app.use(bodyParser.urlencoded({ extended: true}));

//
MongoClient.connect(db.url, (err, database)=>{
    if(err){
        return console.log(err);
    }
   
    // Move all the CRUD operations into this callback since we need the dabase object to be present

    //import the routes in the app.js - orderRoutes, productRoutes
    require('./app/routes')(app,database);
    /**
    * Server Listening at 3000
    */
    app.listen(port, ()=>{
        console.log(`Order Service Running on port ${chalk.green(port)}`);
    });
})




