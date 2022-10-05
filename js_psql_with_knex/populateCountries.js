const data = require('./populations');
const knex = require('./client');

const tableData = data.reduce((acc, val) => {
    const lastEntry = acc[acc.length - 1];
    const newVal = {
        name: val.countryName,
        code: val.countryCode,
    };
    if (
        lastEntry &&
        lastEntry.code === val.countryCode &&
        lastEntry.name === val.countryName
    ) {
        return acc;
    } else {
        return acc.concat([newVal]);
    }
}, []);

knex("countries")
    .insert(tableData)
    .returning('name', 'code')
    .then((data) => {
        console.log(data);
        knex.destroy();
    });