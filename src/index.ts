import dotenv from "dotenv"
dotenv.config();
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";

const prisma = new PrismaClient();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    req,
    prisma,
  }),
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
