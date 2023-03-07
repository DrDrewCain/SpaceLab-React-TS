import { ApolloServer } from '@apollo/server';
import { typeDefs } from './spacelab.schemas';
import { resolvers } from './spacelab.resolvers';
import { startStandaloneServer } from '@apollo/server/standalone';


const test = [
    {
        id: 1,
        name: 'Test 1',
    }
]

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const {} = startStandaloneServer(server,
    {
        listen: { port: 4000}
    });

    console.log(`🚀 Server ready at ${test}`);