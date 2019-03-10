const express_graphql = require('express-graphql'),
      insertMatchSchema = require('../schemas/insertMatch').insertMatchesSchema,
      insertUserSchema  = require('../schemas/insertUser').insertUserSchema;

exports.addPerson = (express_graphql({ insertUserSchema }));

exports.addMatch = (express_graphql({ insertMatchSchema }));

