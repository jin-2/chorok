require("dotenv").config();
import { GraphQLServer } from 'graphql-yoga'

const PORT = process.env.PORT || 4000;

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

const resolvers = {
    Query: {
        hello: (_, { name }) => `Hello ${name || 'World'}`,
    },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start({port: PORT},() => console.log(`Server is running on localhost:${PORT}`));