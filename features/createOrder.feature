Feature: Create a new Order

The Order is created with the Product Details.
Each order has a unique id, description ,price and quantity.

  Scenario: Order is created when all product information is given
    Given All Product Details are in the Request Body 
    When I do a POST to the Orders Endpoint
    Then Order should be created
    Then Order details should be returned.

  Scenario: Order is not created with no product data
    Given All Product Details except the price are in the Request Body
    When I do a POST to the Orders Endpoint
    Then Order should not be created
    Then Error information should be returned