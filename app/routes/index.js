const orderRoutes = require('./order_route');
const productRoutes = require('./products_route')

module.exports = function(app, db) {
  orderRoutes(app, db);
  productRoutes(app,db);
  // Add other route groups here in the future
};