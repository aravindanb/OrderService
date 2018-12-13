//configure routes for order API's here


const ordersEndpoint = '/orders';
module.exports = function(app, db) {

/**
 * Endpoints for the Order Service
 */

// GET /orders
app.get(ordersEndpoint, (req,res,next)=>{
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

};