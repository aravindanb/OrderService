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
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
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
            res.send({'error': 'An unknown error occurred'});
        } else {
            console.log(order);
            res.send(order);
        }
    })
});

// POST /orders
app.post(ordersEndpoint,(req,res)=>{
    //construct an object with the posted data
    const order = {
        productid: req.body.productid,
        product: req.body.product,
        productPrice: req.body.productPrice,
        productQty: req.body.productQty
    }
    console.log(order); // todo: remove this later
    //insert object into order collection
    db.collection(orderCollection).insert(order, (err,result)=>{

        if (err){
            // throw an error
            res.send({'error': 'An unknown error occurred'});
        } else {
            // send back the response
            res.send(result.ops[0]);
        }

    })
});


//PUT /orders/:id


//DELETE /orders/:id

}; 