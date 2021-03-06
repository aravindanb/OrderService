//configure routes for order API's here

const ordersEndpoint = '/orders';
const orderCollection = 'orders'
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

/**
 * Endpoints for the Order Service
 */

// GET (all) /orders
app.get(ordersEndpoint, (req,res)=>{

var ordercollection =  db.collection(orderCollection);
ordercollection.find({}).toArray(function (err, result) {
    if(err) {
        console.log(err);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send({'error': 'An unknown error occurred'});
    } else {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(JSON.stringify(result));

    }
})

});

// GET /orders/:id
app.get(ordersEndpoint+'/:id', (req,res)=>{
    const orderID = req.params.id;
    const orderIDObject = {
        '_id': new ObjectID(orderID)
    };
    db.collection(orderCollection).findOne(orderIDObject,(err,order)=>{
        if(err){
            console.log(err);
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send({'error': 'An unknown error occurred'});
        } else {
            console.log(order);
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send(order);
        }
    })
});

// POST /orders
app.post(ordersEndpoint,(req,res)=>{
    //construct an object with the posted data
    const order = {
        productid: req.body.productId,
        product: req.body.product,
        productPrice: req.body.productPrice,
        productQty: req.body.productQty
    }
    console.log(order); // todo: remove this later
    //insert object into order collection
    db.collection(orderCollection).insert(order, (err,result)=>{

        if (err){
            // throw an error
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send({'error': 'An unknown error occurred'});
        } else {
            // send back the response
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send(result.ops[0]);
        }

    })
});


//PUT /orders/:id
//todo

//DELETE /orders/:id
//todo

}; 
