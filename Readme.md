# Order Service REST API 

### Run this project

- `npm install`
- Dev server in watch mode `npm run dev`  or
- `node app.js`

### Database account

```
user : AravindanB
password : 
```
- To connect using the mongo shell:

  ` mongo ds149682.mlab.com:49682/aravindan-orderservice-node -u <dbuser> -p <dbpassword> `

- To connect using a driver via the standard MongoDB URI 

  `mongodb://<dbuser>:<dbpassword>@ds149682.mlab.com:49682/aravindan-orderservice-node`




### Orders Endpoints

- POST /orders 

```
   {
    [
     "product1": {
      },
      "product2": {
       }
     ]
   }
```
- GET /orders
- GET /orders/123
- PUT /orders/123
- DELETE /orders/123

### Products Endpoints

- GET /products
- GET /products/123

