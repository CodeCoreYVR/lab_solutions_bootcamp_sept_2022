const express = require("express");
const logger = require("morgan");
const fs = require("fs");

const app = express();
app.use(logger("dev"));
app.set("view engine", "ejs");

app.get("/", function (request, response) {
  response.render("welcome", {
    title: 'Welcome to Labs for \"JS Express Basics\"'
  });
});

app.get('/car_status', (request, response) => {
  console.log('URL Query:', request.query);
  let yearOfCar = parseInt(request.query.yearOfCar);
  let carStatus;
  
  if (yearOfCar > 2023) {
      carStatus = 'from the future';
  } else if (yearOfCar > 2012) {
      carStatus = 'new';
  } else if (yearOfCar > 1992) {
      carStatus = 'old';
  } else { carStatus = 'very old' }
  response.render('car_status', { yearOfCar, carStatus }); // Same as { yearOfCar: yearOfCar, carStatus: carStatus }
})

app.get("/random_person", (request, response) => {
  const names = request.query.names || "";
  const namesArray = names.split(",");
  const winner = namesArray[Math.floor(Math.random() * namesArray.length)];
  
  response.render("random_person", { winner, names }); // Same as { winner: winner, names: names }
});

app.get('/fizz_buzz', (request, response) => {
  const number1 = request.query.number1 || null;
  const number2 = request.query.number2 || null;
  let fizzBuzz = [];
  if (number1 && number2) {
    for (let i = 1; i <= 100; i++) {
        if (i % number1 == 0 && i % number2 == 0) {
            fizzBuzz.push('fizzbuzz');
        } else if (i % number1 == 0) {
            fizzBuzz.push('fizz');
        } else if (i % number2 == 0) {
            fizzBuzz.push('buzz');
        } else {fizzBuzz.push(`${i}`)}
    }
  }
  response.render('fizz_buzz', { fizzBuzz, number1, number2 }) // Same as { fizzBuzz: fizzBuzz, number1: number1, number2: number2 }
})





const PORT = 5000;
const DOMAIN = "localhost";
app.listen(PORT, DOMAIN, () => {
  console.log(`Server is listening at http://${DOMAIN}:${PORT}`);
});