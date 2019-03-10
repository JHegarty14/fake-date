const GraphQLSchema = require('graphql').GraphQLSchema,
      makeExecutableSchema = require('graphql-tools').makeExecutableSchema,
      { GraphQLDateTime } = require('graphql-iso-date');

const resolver = require('../resolvers/resolvers').insertMatch;

const typeDefs = `
    type Query {
        Matches(id: Int!): [Match]
    }

    type Match {
        id: ID
        personA: String
        personB: String
        date: String
        matched: Boolean
    }
`;
    
exports.insertMatchesSchema = makeExecutableSchema({
  typeDefs,
  resolver,
});