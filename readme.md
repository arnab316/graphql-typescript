# GraphQL Product API

This project provides a GraphQL API for managing a collection of products. Below you'll find the schema definitions, queries, and mutations available in this API, along with example usage and sample data.

## Schema Definition

The GraphQL schema defines the types, queries, and mutations available in the API.

```graphql
# GraphQL Schema

type Product {
  id: ID!
  name: String!
  description: String!
  price: Float!
}

type Query {
  getAllProducts: [Product!]!
  getProductById(id: ID!): Product
  getProductByName(name: String!): Product
}

type Mutation {
  addProduct(id: ID, name: String!, description: String!, price: Float!): Product
  deleteProduct(id: ID!): Product
}
```


## Sample Data
- The API uses the following sample data for products:
```json
const products: Product[] = [
  { id: 1, name: "Product A", description: "Description A", price: 19.99 },
  { id: 2, name: "Product B", description: "Description B", price: 29.99 },
  { id: 3, name: "Iphone", description: "pro Max 256 Gb", price: 150.99 },
  { id: 4, name: "Pixel", description: "9a", price: 150.99 },
  { id: 5, name: "Samsung", description: "S 24 Ultra", price: 600 }
];

```

## Queries
- Get All Products
  - Retrieves a list of all products.

```graph
query {
  getAllProducts {
    id
    name
    description
    price
  }
}
```

# Response
```json{
  "data": {
    "getAllProducts": [
      { "id": "1", "name": "Product A", "description": "Description A", "price": 19.99 },
      { "id": "2", "name": "Product B", "description": "Description B", "price": 29.99 },
      { "id": "3", "name": "Iphone", "description": "pro Max 256 Gb", "price": 150.99 },
      { "id": "4", "name": "Pixel", "description": "9a", "price": 150.99 },
      { "id": "5", "name": "Samsung", "description": "S 24 Ultra", "price": 600 }
    ]
  }
}
```
# Get Product by ID
- Retrieves a product by its ID.

```graphql
query {
  getProductById(id: "1") {
    id
    name
    description
    price
  }
}
```
```jaon
{
  "data": {
    "getProductById": {
      "id": "1",
      "name": "Product A",
      "description": "Description A",
      "price": 19.99
    }
  }
}
```



## Mutations
- Add Product
- Adds a new product to the list.

```graphql

mutation {
  addProduct(id: "6", name: "New Product", description: "Description of new product", price: 99.99) {
    id
    name
    description
    price
  }
}
```
## Response:

```json

{
  "data": {
    "addProduct": {
      "id": "6",
      "name": "New Product",
      "description": "Description of new product",
      "price": 99.99
    }
  }
}
```
## Delete Product
- Deletes a product by its ID.

```graphql

mutation {
  deleteProduct(id: "1") {
    id
  }
}
```
# Response:

```json

{
  "data": {
    "deleteProduct": {
      "id": "1"
    }
  }
}
```