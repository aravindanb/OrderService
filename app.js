var express = require("express");
var app = express();

app.get("/orders", (req,res,next)=>{
    res.json(["Tony", "Lisa", "Micahel", "Ginger", "Food"]);
});

app.listen(3000, ()=>{
    console.log("Order Service Running on port 3000")
});