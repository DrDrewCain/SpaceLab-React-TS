
export const typeDefs = 
`#graphql
    type Test {
        id: ID!
        name: String!
    }
    type QueryTest {
        test: [Test]
    }
`;
