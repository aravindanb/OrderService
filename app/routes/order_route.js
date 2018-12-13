//configure routes for order API's here

const ordersEndpoint = '/orders';
module.exports = function(app, db) {

/**
 * Endpoints for the Order Service
 */

// GET /orders
app.get(ordersEndpoint, (req,res)=>{
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

// GET /orders
app.get(ordersEndpoint+'/:id', (req,res)=>{
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

const collection = 
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
    db.collection('orders').insert(order, (err,result)=>{

        if (err){
            // throw an error
            res.send({'error': 'An unknown error occurred'});
        } else {
            // send back the response
            res.send(result.ops[0]);
        }

    })
})

}; 