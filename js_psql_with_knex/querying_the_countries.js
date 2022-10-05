const knex = require('./client');

// Find all countries whose names begin with "b" ignoring case.
const query1 = knex
    .select('*')
    .from('countries')
    .where('name', 'ilike', 'b%');
console.log(query1.toString());
// select * from "countries" where "name" ilike 'b%'
query1.then(countries => console.log(countries));

// Count how many countries have "central" in their name.
const query2 = knex('countries')
    .count('* as count')
    .where('name', 'ilike', '%central%');
console.log(query2.toString());
// select count(*) as "count" from "countries" where "name" ilike '%central%'
query2.then(count => console.log(count));


// Find all countries whose names begin with the same three letters as their code ignoring case.
const query3 = knex
    .select('*')
    .from('countries')
    .whereRaw(`"name" ilike "code" || '%'`);
console.log(query3.toString());
// select * from "countries" where "name" ilike "code" || '%'
query3.then(countries => console.log(countries));
