const express_graphql    = require('express-graphql'),
      fetchMatchesSchema = require('../schemas/getMatch').getMatchSchema,
      fetchUsersSchema   = require('../schemas/getUser').getUsersSchema;

exports.fetchPeople = (express_graphql({ fetchUsersSchema }));

exports.fetchMatches = (express_graphql({ fetchMatchesSchema }));