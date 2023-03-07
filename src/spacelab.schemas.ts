import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

export const typeDefs = `# Defines the schema for our data model
  type Query {
    toi: Float
  }
`;

export const BetaTest = {
    toi: () => 1.0,
};

