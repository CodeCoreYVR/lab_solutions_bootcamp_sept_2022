function add(a, b = 0) {
  return promiseMath(a, b, a + b);
}

function sub(a, b = 0) {
  return promiseMath(a, b, a - b);
}

function mult(a, b = 1) {
  return promiseMath(a, b, a * b);
}

function div(a, b = 1) {
  return promiseMath(a, b, a / b);
}

function pow(a, b = 1) {
  return promiseMath(a, b, Math.pow(a, b));
}

function promiseMath(a, b, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNaN(a) || isNaN(b)) {
        reject("All parameters must be numbers");
      }
      resolve(value);
    });
  });
}

add(9)
  .then((value) => add(9, value)) // value is 9

  .then((value) => add(2, value)) // value is 18

  .then((value) => mult(5, value)) // value is 20

  .then((value) => div(value, 10)) // r is 100

  .then(console.log); // logs 10
