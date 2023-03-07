import { BetaTest } from './spacelab.schemas';


const resolvers = {
    Querytest: {
        BetaTest: () => BetaTest, // this is the resolver for the Querytest type
    },
};