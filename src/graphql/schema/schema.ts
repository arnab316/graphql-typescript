export const schema = `#graphql

  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
  }
  
 type Query{
  
  getAllProducts: [Product!]
  getProductById(id: ID!): Product
  getProductByName(name: String!) : Product

}


`;
