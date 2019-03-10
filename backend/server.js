const express = require('express'),
      bodyParser = require('body-parser'),
      express_graphql = require('express-graphql');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(req);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  res.setHeader('Strict-Transport-Security', 'max-age=31536000');
  next();
});

app.get('/graphiql', bodyParser.json(), express_graphql({
    endpoint: '/graphql'
}));

require('./routes/fetchRoutes')(app);
require('./routes/setRoutes')(app);

var PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Express GraphQL Server Now Running On localhost:${PORT}/graphql`));