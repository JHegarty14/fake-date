const GraphQLSchema = require('graphql').GraphQLSchema,
      makeExecutableSchema = require('graphql-tools').makeExecutableSchema;

const resolver = require('../resolvers/resolvers').insertUser;

const typeDefs = `
    type Person {
      id: ID
      name: String
      bio: String
      age: String
      location: String
      img: String
    }

    type Query {
      getPerson(id: ID!): Person
    }
`;
    
exports.insertUserSchema = makeExecutableSchema({
  typeDefs,
  resolver,
});