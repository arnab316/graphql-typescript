interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
}
// Sample data for products (you can replace this with your database)
const products: Product[] = [
    { id: "1", name: "Product A", description: "Description A", price: 19.99 },
    { id: "2", name: "Product B", description: "Description B", price: 29.99 },
    {id: "3", name: "Iphone", description: "pro Max 256 Gb", price: 150.99 },
    {id: "4", name: "pixel", description: "9a ", price: 150.99 },
    {id: "5", name: "samsung", description: "S 24 Ultra ", price: 600 },
    // Add more products here
  ];
export const GraphqlResolver = {
    Query: {
        getAllProducts: () => products,
        getProductById: (_:unknown, args:any) => products.find((product) => product.id === args.id),
        getProductByName: (_: unknown, args: any) => products.find((product) => product.name === args.name),
      },
}