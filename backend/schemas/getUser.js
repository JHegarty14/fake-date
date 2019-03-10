const GraphQLSchema = require('graphql').GraphQLSchema,
      makeExecutableSchema = require('graphql-tools').makeExecutableSchema;

const resolver = require('../resolvers/resolvers').getAllResolver;

const typeDefs = `
    type Query {
        people: [Person]
    }

    type Person {
        id: ID
        name: String
        bio: String
        age: String
        location: String
        img: String
    }
`;
    
exports.getUsersSchema = makeExecutableSchema({
  typeDefs,
  resolver,
});