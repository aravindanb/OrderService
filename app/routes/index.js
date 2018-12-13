//get orderRoutes
const orderRoutes = require('./order_routes');
const productRoutes = require('./products_route')

module.exports = function(app, db) {
  orderRoutes(app, db);
  productRoutes(app,db);
  // Other route groups could go here, in the future
};