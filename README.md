

This README file provides information about the endpoints and usage of the API hosted at `http://localhost:3000`.

## Table of Contents

- [Retrieve Products](#retrieve-products)
- [Create a Product](#create-a-product)
- [Get a Product by ID](#get-a-product-by-id)
- [Update a Product by ID](#update-a-product-by-id)
- [Delete a Product by ID](#delete-a-product-by-id)
- [Route Not Found](#route-not-found)
- [Additional Endpoints](#additional-endpoints)

---

## Retrieve Products

### GET `/products`

This endpoint allows you to retrieve a list of products.

**Example Request:**
```http
GET http://localhost:3000/products
```

## Create a Product
### POST /products
### Create a new product by providing a JSON payload with product details.

### Example Request:
```http
POST http://localhost:3000/products
Content-Type: application/json

{
    "name": "Vivo ",
    "price": 12999
}
```


## Get a Product by ID
### Retrieve a product by providing its unique identifier.

### Example Request:

```http
PATCH http://localhost:3000/products/64cf470e3cf25bcafc40b3fe
Content-Type: application/json

{
    "price": 1249
}
```

## Delete a Product by ID
### Delete a product by providing its unique identifier.

### Example Request:
```http
DELETE http://localhost:3000/products/64de24bf75dd66fda472c765
```

## Route Not Found
### If you attempt to access a route that does not exist, you will receive a 404 Not Found response.

### Example Request:
```http
GET http://localhost:3000/abc_xyz
```
