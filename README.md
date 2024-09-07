This README file provides information about the endpoints and usage of the API hosted at `https://product-management-api-5ivy.onrender.com/`.

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
GET https://product-management-api-5ivy.onrender.com/products
```

## Create a Product

### POST /products

### Create a new product by providing a JSON payload with product details.

### Example Request:

```http
POST https://product-management-api-5ivy.onrender.com/products
Content-Type: application/json

{
    "name": "Vivo ",
    "price": 12999
}
```

## Update a product by id

### Update a product by providing its id.

### Example Request:

```http
PUT https://product-management-api-5ivy.onrender.com/{id}
Content-Type: application/json

{   "name": "updated name",
    "price": 1249
}
```

## Get a Product by ID

### Retrieve a product by providing its unique identifier.

### Example Request:

```http
PATCH https://product-management-api-5ivy.onrender.com/{id}
Content-Type: application/json

{
    "price": 1249
}
```

## Delete a Product by ID

### Delete a product by providing its unique identifier.

### Example Request:

```http
DELETE https://product-management-api-5ivy.onrender.com/{id}
```

## Route Not Found

### If you attempt to access a route that does not exist, you will receive a 404 Not Found response.

### Example Request:

```http
GET https://product-management-api-5ivy.onrender.com/abc_xyz
```
