import { typeDefs } from './spacelab.schemas';

export const resolvers = {
    Querytest: {
        typeDefs: () => typeDefs, // this is the resolver for the Querytest type
    },
};