interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}
// Sample data for products (you can replace this with your database)
const products: Product[] = [
  { id: 1, name: "Product A", description: "Description A", price: 19.99 },
  { id: 2, name: "Product B", description: "Description B", price: 29.99 },
  { id: 3, name: "Iphone", description: "pro Max 256 Gb", price: 150.99 },
  { id: 4, name: "pixel", description: "9a ", price: 150.99 },
  { id: 5, name: "samsung", description: "S 24 Ultra ", price: 600 },
  // Add more products here
];
export const GraphqlResolver = {
  Query: {
    getAllProducts: () => products,
    getProductById: (_: unknown, args: any) =>
      products.find((product) => product.id === args.id),
    getProductByName: (_: unknown, args: any) =>
      products.find((product) => product.name === args.name),
  },
  Mutation: {
    addProduct: (_: unknown, args: any) => {
      if (!args.name || !args.description || args.price === undefined) {
        throw new Error("Missing required fields");
      }

      const newProduct = {
        id: Math.floor(Math.random() * 100),

        name: args.name,
        description: args.description,
        price: args.price,
      };

      products.push(newProduct);
      return newProduct;
    },
    deleteProduct: (_: unknown, args: any) => {
        if (!args.id) {
            throw new Error("Missing product id");
          }
        const productIndex = products.findIndex(product => product.id === args.id);       
        if (productIndex ===  args.id) {
            throw new Error("Product not found");
        }
        products.splice(productIndex, 1);
        
        return { id: args.id };
    }
  },
};
