import express, { Express, query } from "express";
import { config } from "./config/server-config";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { schema } from "./graphql/schema/schema";
import { connect } from "./config/database";
import { GraphqlResolver } from "./graphql/resolver/resolver";

const app: Express = express();
const port = config.PORT;

const setupAndStart = async (): Promise<void> => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: GraphqlResolver
  });
  await server.start();
  app.use("/graphql", expressMiddleware(server));
connect();

  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
};

setupAndStart();
