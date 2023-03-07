import { ApolloServer } from '@apollo/server';
import { resolvers } from './spacelab.resolvers';
import { typeDefs } from './spacelab.schemas';
import { startStandaloneServer } from '@apollo/server/standalone';


const server = new ApolloServer ({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});