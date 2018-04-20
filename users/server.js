const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// graphiql is a development tool that allows us to make queries
// against our development server, so only intended to use in a 
// development environment
app.use('/graphql', expressGraphQL({
	schema,
	graphiql: true
}));

app.listen(4000, ()=> {
	console.log('listening...');
});