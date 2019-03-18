const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const graphqlHttp = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolvers = require('./graphql/resolvers');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(
  '/graphql', 
  graphqlHttp({ 
    schema: graphqlSchema, 
    rootValue: graphqlResolvers,
    graphiql: true
  })
);

mongoose.connect('mongodb+srv://jneb:likgvQyckdgq9psk@cluster0-qbjhd.mongodb.net/ladder?retryWrites=true')
.then(result => {
  console.log('Connected!');
  app.listen(port);
})
.catch(err => {
  console.log(err);
});
