const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

const DB = 'mongodb+srv://admin:Mongodb314314@cluster0.p3lgr.mongodb.net/sample_graphql?retryWrites=true&w=majority';

mongoose.connect(DB);
const dbConnection = mongoose.connection;

dbConnection.on('err', err=> console.error(`Connection error: ${err}`));
dbConnection.once('open', () => console.log('DB has connected'));

const schema = require('./schema/schema');

const PORT = 3000;
const server = express();

server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

server.listen(PORT, (error) => {
    error ? console.error(error) : console.log(`Server has started on port: ${PORT}`)
});