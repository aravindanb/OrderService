//configure routes for product API's here

const productsEndpoint = '/products';
module.exports = function(app, db) {

// GET /products
app.get(productsEndpoint, (req,res,next)=>{
    res.json(["Caprina", "Nivea", "Pears", "Irish Spring", "Yves Rocher"]);
});
};