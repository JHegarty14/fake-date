const Fetch = require('../controllers/fetchControllers');

module.exports = app => {

    app.use('/graphql/fetch_people', Fetch.fetchPeople);

    app.use('/graphql/fetch_matches', Fetch.fetchMatches);
    
}