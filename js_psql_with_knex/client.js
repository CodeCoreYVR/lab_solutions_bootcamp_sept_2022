// knex is a function that is used to create a client
const knex = require('knex');
const dbConfig = require('./knexfile');

// we can fire off the knex function passing a configuration object
// to create a client
const client = knex(dbConfig.development);
// we export the client so we can use it anywhere we want
module.exports = client;