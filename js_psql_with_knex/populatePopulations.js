const allPopulationData = require('./populations');

const populationArr = [];

const knex = require("./client");

knex("countries").select("*").then(countries => {

    countries.forEach(country => {
        allPopulationData.forEach(populationObj => {
            if (country.code === populationObj.countryCode) {
                populationArr.push({
                    year: populationObj.year,
                    quantity: Math.floor(populationObj.value),
                    "country_id": country.id
                })
            }
        })
    });

    knex("populations").insert(populationArr).then(data => {
        console.log(data)
        knex.destroy();
    })
})

