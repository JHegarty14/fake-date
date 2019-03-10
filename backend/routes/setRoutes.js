const Set = require('../controllers/setControllers');

module.exports = app => {

    app.use('/graphql/add_user', Set.addPerson);

    app.use('/graphql/add_match', Set.addMatch);

}